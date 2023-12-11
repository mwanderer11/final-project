import {Route, Routes, Navigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import SiteNav from "./SiteNav";
import Home from "./Home/index";
import Players from "./Players/Players";
import PlayerTable from "./Players/table";

function Spikeball() {
    const[players, setPlayers] = useState([]);
    const [player, setPlayer] = useState()
    const URL = 'localhost4000';
    const addNewPlayer = async () => {
        const response = await axios.post(URL, player);
    }
    // more functions

    return (
        <div className="table-borderless table-responsive">
            <table className="table">
                <tbody>
                <td valign="top" width="10%">
                    <SiteNav/>
                </td>
                <td>
                    <div className="overflow-y-scroll">
                        <Routes>
                            <Route path="/" element={<Navigate to="Home"/>}/>
                            <Route path="Home" to="Roundnet/Dashboard"
                                   element={<Home/>}/>
                            <Route path="Profile" to="Roundnet/Profile"
                                   element={<Profile/>}/>
                            <Route path = "Players" to "Roundnet/Players"
                                   element={<PlayerTable/>}/>
                            <Route path="Player" to "Roundnet/Players/:id"
                            element={<Players/>}/>
                        </Routes>
                    </div>
                </td>
                </tbody>
            </table>
        </div>
    )
} export default Spikeball();