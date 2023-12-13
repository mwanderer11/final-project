import {useNavigate, useParams} from "react-router-dom";
import * as client from "./client"
import {useEffect, useState} from "react";

function Match() {
    const {id} = useParams();
    const [match, setMatch] = useState(null);
    const navigate = useNavigate();

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
        </div>
    )

} export default Match;