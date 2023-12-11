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
    )
    return (
        <ul className="list-group">
            <li className="list-group-item">
                <button onClick={handleAddPlayer} type="button" className="btn btn-success float-end">
                    Add player
                </button>
                <button onClick={handleUpdatePlayer} type="button" className="btn btn-warning float-end">
                    Update player
                </button>
                <input className="form-control-sm wd-sidebar-padding-text" value={player.name}
                       onChange={(e) => dispatch(setPlayer({
                                                               ...player, name: e.target.value}))}/>
            </li>
            {players.map((player, index) => (
                <li key={index} className="list-group-item module-spacing">
                    <button type="button" className="btn btn-danger float-end"
                            onClick={handleDeletePlayer}>Delete</button>
                    <button type="button" className="btn btn-success float-end"
                            onClick={() =>
                                dispatch(setPlayers(player))}>Edit</button>
                    {player.name}: {player.ranking}
                </li>
                ))
            }
        </ul>
    );
} export default Players;