import {Route, Routes, Navigate} from "react-router-dom";
import SiteNav from "./SiteNav";
import Home from "./Home/index";
import Players from "./Players/Players";
import PlayerTable from "./Players/table";
import Matches from "./Matches/Matches";
import Match from "./Matches/index"
import Profile from "./Profile/Profile"

function Spikeball() {
    return (
        <div>
            <SiteNav/>
            <Routes>
                <Route path="/" element={<Navigate to="Home"/>}/>
                <Route path="/Roundnet/Home"
                       element={<Home/>}/>
                <Route path="Profile" to="/Roundnet/Profile"
                             element={<Profile/>}/>
                <Route path = "/Roundnet/Players"
                       element={<PlayerTable/>}/>
                <Route path="/Roundnet/Players/:id"
                       element={<Players/>}/>
                <Route path= "/Roundnet/Matches"
                       element={<Matches/>}/>
                <Route path="/Roundnet/Matches/:id"
                       element={<Match/>}/>
            </Routes>
        </div>
    )
} export default Spikeball;