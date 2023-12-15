import React, {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import * as client from "./client"
import * as userClient from "../Profile/client"

function Matches() {
    const date = new Date();
    const month = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();
    const d1 = new Date(year, month, day);
    const [match, setMatch] = useState(null);
    const [matches, setMatches] = useState([]);
    const [account, setAccount] = useState(null)

    const fetchMatches = async () => {
        const matches = await client.findMatches();
        setMatches(matches);
    }

    const fetchAccount = async () => {
        const acc = await userClient.account();
        setAccount(acc);
    }

    const handleCreate = async () => {
       try {
           setMatch({date: new Date().toString(), ...match});
           const newMatch = await client.createMatch(match);
           console.log(newMatch)
           setMatches([newMatch, ...matches]);
       } catch(err) {
           console.log(err);
       }
    };
    const todayMatch = matches.filter(m => new Date(m.date).toDateString() === d1.toDateString());
    const pastMatch = matches.filter(m=> new Date(m.date).toDateString() !== d1.toDateString());
    const nameMatches = matches.filter(m => account.firstName === m.player1
                                            || account.firstName === m.player2
                                            || account.firstName === m.player3
                                            || account.firstName === m.player4);

    useEffect(() => {
        fetchMatches();
        fetchAccount();
    }, []);

    return (
        <div>
            {account && (
                <div>
                    {account.username !== "" && (
                        <div>
                    <h3>Your matches</h3>
                    <div className="list-group">
                    {nameMatches.map((match) =>
                        <Link key={match._id} className="list-group-item" to={`/Roundnet/Matches/${match._id}`}>
                            {match.player1}, {match.player2}, {match.player3}, {match.player4}
                            <div className="float-end">{new Date(match.date).toDateString()}</div>
                        </Link>
                    )}
                    </div>
                    {account.role === "ADMIN" && (
                        <div>
            <h3>Create Match</h3>
            <input placeholder="player1" onChange={(e) =>
                setMatch({...match, player1: e.target.value, date: new Date().toString()})}/>
            <input placeholder="player2" onChange={(e) =>
                setMatch({...match, player2: e.target.value})}/>
            <input placeholder="player3" onChange={(e) =>
                setMatch({...match, player3: e.target.value})}/>
            <input placeholder="player4" onChange={(e) =>
                setMatch({...match, player4: e.target.value})}/>
            <button type="button" className="btn btn-small btn-success" onClick={handleCreate}>Create Match</button>
                        </div> )}  </div>
                    )} </div> )}
            <h3> Match list </h3>
            <h3>Today's matches</h3>
            <div className={"list-group"}>
            {todayMatch.map((match) =>
                <Link key={match._id} className="list-group-item" to={`/Roundnet/Matches/${match._id}`}>
                    {match.player1}, {match.player2}, {match.player3}, {match.player4}
                    <div className="float-end">{new Date(match.date).toDateString()}</div>
                </Link>)}
            </div>
            <h3>Past matches</h3>
            <div className={"list-group"}>
                {pastMatch.map((match) => (
                    <Link key={match._id} className="list-group-item" to={`/Roundnet/Matches/${match._id}`}>
                        {match.player1}, {match.player2}, {match.player3}, {match.player4}
                        <div className="float-end">{new Date(match.date).toDateString()}</div>
                    </Link>
                ))}
            </div>
        </div>
    )
} export default Matches;