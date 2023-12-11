import React, { useState, useEffect } from "react";
import * as client from "./client";
import {Link} from "react-router-dom"
import {BsTrash3Fill, BsPlusCircleFill, BsFillCheckCircleFill, BsPencil} from "react-icons/bs";

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
            setPlayers(players.map((p) => (p.id === player.id ? player : p)));
        } catch (err) {
            console.log(err);
        }
    };

    const deletePlayer = async (player) => {
        try {
            await client.removePlayer(player.id);
            setPlayers(players.filter((p) => p.id !== player.id));
        } catch (err) {
            console.log(err);
        }
    };

    const selectPlayer = async (player) => {
        try {
            const p = await client.findPlayerById(player.id);
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
                        <input value={player.name} onChange={(e) =>
                                   setPlayer({...player, name: e.target.value})}/>
                        <input value{player.ranking} onChange={(e) =>
                                    setPlayer({...player, ranking: e.target.value})}/>
                    </td>
                    <td className="text-nowrap">
                        <BsFillCheckCircleFill onClick={updatePlayer}
                                               className="me-2 text-success fs-1 text"/>
                        <BsPlusCircleFill onClick={createPlayer}
                                          className="me-2 text-success fs-1 text"/>
                         <button className="btn btn-warning me-2">
                             <BsPencil onClick={() => selectPlayer(player)}/>
                         </button>
                    </td>
                </tr>
                </thead>
                <tbody>
                {players.map((player) => (
                    <tr key={player.id}>
                        <td>
                            <Link to={`/Roundnet/Players/${player.id}`}>
                                {player.name}
                            </Link>
                        </td>
                        <td>{player.ranking}</td>
                    </tr>))}
                <td>
                    <button className="btn btn-danger" onClick={() => deletePlayer(player)}>
                        <BsTrash3Fill/>
                    </button>
                </td>
                </tbody>
            </table>
        </div>
    );
} export default PlayerTable;
