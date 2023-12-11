import React, {useEffect, useState} from "react";
import { useParams} from "react-router-dom";
import * as client from "./client"

function Players() {
    const {id} = useParams();
    const [player, setPlayer] = useState(null);

    const findPlayerById = async (id) => {
        const player = await client.findPlayerById(id);
        setPlayer(player);
    }

    useEffect(() => {
        findPlayerById(id);
    });
    return (
        <div className="w-50">
            <h1>Player Profile</h1>
            {player && (
                <div>
                    Name: {player.name}
                    <br/>
                    Ranking: {player.ranking}
                    <Link to="/Roundnet/Players" className="btn btn-warning w-100">
                        Players
                    </Link>
                </div>
            )}
        </div>
    );
} export default Players;