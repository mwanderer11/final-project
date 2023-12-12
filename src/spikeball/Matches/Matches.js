import React, {useEffect, useState} from "react"
import * as client from "./client"
import * as playerClient from "../Players/client"

function Matches() {
    const date = new Date();
    const month = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();
    const [matches, setMatches] = useState([]);
    const [match, setMatch] =  useState({id: "", date: "", player1: "", player2: "", player3: "", player4: ""});
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
    const deleteMatch = async () => {
        try {
            await client.removeMatch(match.id);
            setPlayers(players.filter((m) => m.id !== match.id));
        } catch (err) {
            console.log(err);
        }
    };

    const updateMatch = async () => {
        try {
            await client.updateMatch(match);
            setPlayers(matches.map((m) => (m.id === match.id ? match : m)));
        } catch (err) {
            console.log(err);
        }
    };

    const selectMatch = async (match) => {
        try {
            const m = await client.findMatchById(match.id);
            setMatch(m);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => { fetchMatches(); }, []);
    useEffect(() => {fetchPlayers(); }, []);

    const todayMatch = matches.filter(m => m.date === new Date(year, month, day).toString());
    const pastMatch = matches.filter(m=> m.date !== new Date(year, month, day).toString());
    return (
        <div>
            <h2> Match list </h2>
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