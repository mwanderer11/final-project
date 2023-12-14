import React, { useState, useEffect } from "react";
import * as client from "./client";
import {Link} from "react-router-dom"
import {BsTrash3Fill } from "react-icons/bs";

function PlayerTable() {
    const [players, setPlayers] = useState([]);
    const [player, setPlayer] = useState({id: "", name: "", ranking: ""});
    const createPlayer = async () => {
        try {
            const newPlayer = await client.createPlayer(player)
            setPlayers([newPlayer, ...players]);
        } catch (err) {
            console.log(err);
        }
    };

    const fetchPlayers = async () => {
        const players = await client.findPlayers();
        setPlayers(players);
    };

    const updatePlayer = async () => {
        try {
            await client.updatePlayer(player);
            setPlayers(players.map((p) => (p._id === player._id ? player : p)));
        } catch (err) {
            console.log(err);
        }
    };

    const deletePlayer = async (player) => {
        try {
            await client.removePlayer(player._id);
            setPlayers(players.filter((p) => p._id !== player._id));
        } catch (err) {
            console.log(err);
        }
    };

    const selectPlayer = async (player) => {
        try {
            const p = await client.findPlayerById(player._id);
            setPlayer(p);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => { fetchPlayers(); }, []);

    return (
        <div>
            <h1>Players</h1>
            <table className="table">
                <thead>
                <tr>
                    <td>
                        <input placeholder="name" value={player.name} onChange={(e) =>
                                   setPlayer({...player, name: e.target.value})}/>
                        <input placeholder="ranking" value={player.ranking} onChange={(e) =>
                                    setPlayer({...player, ranking: e.target.value})}/>
                    </td>
                    <td className="text-nowrap">
                        <button type="button" onClick={updatePlayer}
                                className="btn btn-warning">Save</button>
                        <button type="button" onClick={createPlayer}
                                className="btn btn-success">Add Player</button>
                    </td>
                </tr>
                </thead>
                <tbody>
                {players.map((player) => (
                    <tr key={player._id}>
                        <td>
                            <Link to={`/Roundnet/Players/${player._id}`}>
                                {player.name}
                            </Link>
                        </td>
                        <td>{player.ranking}</td>
                        <td>
                            <button className="btn btn-warning me-2" onClick={() => selectPlayer(player)}>
                                Edit Player </button>
                            <button className="btn btn-danger" onClick={() => deletePlayer(player)}>
                            <BsTrash3Fill/>
                        </button></td>
                    </tr>))}
                <td>
                </td>
                </tbody>
            </table>
        </div>
    );
} export default PlayerTable;
