import { useParams} from "react-router-dom";
import * as client from "./client"
import {useEffect, useState} from "react";

function Match() {
    const {id} = useParams();
    const [match, setMatch] = useState(null);
    const [firstScore, setScore1] = useState("");
    const [score2, setScore2] = useState("");
    const [score3, setScore3] = useState("");
    const fetchMatch = async (id) => {
        const m = await client.findMatchById(id);
        setMatch(m);
    }

    const updateScore1 = async () => {
        await setMatch({...match, score1: firstScore});
        await client.updateMatch(match);
    };

    const updateScore2 = async () => {
        await setMatch({...match, score2: score2});
        await client.updateMatch(match);
    }

    const updateScore3 = async () => {
        await setMatch({...match, score3: score3});
        await client.updateMatch(match);
    }

    useEffect(() => {
        fetchMatch(id);
    })
    return (
        <div>
            <h1>Match</h1>
            {match && (
                <div>
            1. {match.player1}, {match.player2} vs {match.player3}, {match.player4}  <br/>
                    Score: <input className="form-control-sm" value={match.score1}
                           onChange={(e) => setScore1(e.target.value)}/>
                    <button type="button" className="btn btn-sm btn-danger" onClick={updateScore1}>Submit Score</button>
                    <br/>
            2. {match.player1}, {match.player3} vs {match.player2}, {match.player4}
                    <br/>
                    Score:
                    <input className="form-control-sm" value={match.score2}
                           onChange={(e) => setScore2(e.target.value)}/>
                    <button type="button" className="btn btn-sm btn-danger" onClick={updateScore2}>Submit Score</button>
                    <br/>
            3. {match.player1}, {match.player4} vs {match.player3}, {match.player2}
                    <br/>
                    Score:
                    <input className="form-control-sm" value={match.score3}
                           onChange={(e) => setScore3(e.target.value)}/>
                    <button type="button" className="btn btn-sm btn-danger" onClick={updateScore3}>Submit Score</button>
                    <br/>
                </div>
                   )}
        </div>
    )

} export default Match;