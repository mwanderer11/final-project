import React, {useEffect, useState} from "react"
import * as client from "./client"
import * as playerClient from "../Players/client"

function Matches() {
    const date = new Date();
    const month = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();
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

    const todayMatch = matches.filter(m => m.date === new Date(year, month, day).toString());
    const pastMatch = matches.filter(m=> m.date !== new Date(year, month, day).toString());
    return (
        <div>
            <h2> Match list </h2>
            {players}
            <h3>Today's matches</h3>
            <div className={"list-group"}>
            {todayMatch.map((match) => (
                <li className="list-group-item">
                    {match.player1}, {match.player2}, {match.player3}, {match.player4}
                </li>))};
            </div>
            <h3>Past matches</h3>
            <div className={"list-group"}>
                {pastMatch.map((match) => (
                    <li className="list-group-item">
                        {match.player1}, {match.player2}, {match.player3}, {match.player4}
                    </li>
                ))};
            </div>
        </div>
    )
} export default Matches;