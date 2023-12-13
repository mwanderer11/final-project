import { useParams} from "react-router-dom";
import * as client from "./client"
import {useEffect, useState} from "react";

function Match() {
    const {id} = useParams();
    console.log(id);
    const [match, setMatch] = useState(null);

    const fetchMatch = async (id) => {
        const m = await client.findMatchById(id);
        console.log(m);
        setMatch(m);
        console.log(match)
    }

    useEffect(() => {
        fetchMatch(id);
    })
    return (
        <div>
            <h1>Match</h1>
            {match && (
                <div>
            1. {match.player1}, {match.player2} vs {match.player3}, {match.player4}
            2. {match.player1}, {match.player3} vs {match.player2}, {match.player4}
            3. {match.player1}, {match.player4} vs {match.player3}, {match.player2}
                </div>
                   )}
        </div>
    )

} export default Match;