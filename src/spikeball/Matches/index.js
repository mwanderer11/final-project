import { useParams} from "react-router-dom";
import * as client from "./client"
import {useEffect, useState} from "react";

function Match() {
    const {id} = useParams();
    const [match, setMatch] = useState(null);

    const fetchMatch = async () => {
        const m = await client.findMatchById(id);
        setMatch(m);
    }

    useEffect(() => {
        fetchMatch();
    })

    return (
        <div>
            <h1>Match up</h1>
            1. {match.player1}, {match.player2} vs {match.player3}, {match.player4}
            2. {match.player1}, {match.player3} vs {match.player2}, {match.player4}
            3. {match.player1}, {match.player4} vs {match.player3}, {match.player2}
        </div>
    )

} export default Match;