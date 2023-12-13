import React, {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import * as client from "./client"
import * as playerClient from "../Players/client"

function Matches() {
    const date = new Date();
    const month = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();
    const d1 = new Date(year, month, day);
    const [matches, setMatches] = useState([]);
    const [players, setPlayers] = useState([]);
    console.log(date.toString());

    const fetchMatches = async () => {
        const matches = await client.findMatches();
        setMatches(matches);
    }

    const fetchPlayers = async () => {
        const players = await playerClient.findPlayers();
        setPlayers(players);
    };

    useEffect(() => { fetchMatches(); }, []);
    useEffect(() => {fetchPlayers(); }, []);

    const first = matches[0];
    console.log(first);
    const todayMatch = matches.filter(m => new Date(m.date).toDateString() === d1.toDateString());
    console.log(d1.toDateString())
    console.log(d1.toJSON())
    console.log(d1.toString())

    const pastMatch = matches.filter(m=> new Date(m.date).toDateString() !== d1.toDateString());
    return (
        <div>
            <h2> Match list </h2>
            <h3>Today's matches</h3>
            <div className={"list-group"}>
            {todayMatch.map((match) =>
                <Link key={match._id} className="list-group-item" to={`/Roundnet/Matches/${match._id}`}>
                    {match.player1}, {match.player2}, {match.player3}, {match.player4}
                </Link>)}
            </div>
            <h3>Past matches</h3>
            <div className={"list-group"}>
                {pastMatch.map((match) => (
                    <Link key={match._id} className="list-group-item" to={`/Roundnet/Matches/${match._id}`}>
                        {match.player1}, {match.player2}, {match.player3}, {match.player4}
                    </Link>
                ))}
            </div>
        </div>
    )
} export default Matches;