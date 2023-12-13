import {useEffect, useState} from "react";
import * as client from "./client";

function Rankings() {
    const [players, setPlayers] = useState([]);
    const fetchPlayers = async () => {
        const players = await client.findPlayers();
        setPlayers(players);
    };
    useEffect(() => { fetchPlayers(); }, []);

    const sortRanking = players.sort(function(p1, p2)
                                     {return parseFloat(p2.ranking) - parseFloat(p1.ranking) })
    return (
        <div>
            <h2>Rankings</h2>
            <ol className={"list-group-numbered"}>
            {sortRanking.map((player) => (
                <li key={player._id} className={"list-group-item"}>
                    {player.name}
                </li>
            ))}
            </ol>
        </div>
    )
} export default Rankings;