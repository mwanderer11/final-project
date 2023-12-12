import {Route, Routes, Navigate} from "react-router-dom";
import SiteNav from "./SiteNav";
import Home from "./Home/index";
import Players from "./Players/Players";
import PlayerTable from "./Players/table";
import Matches from "./Matches/Matches";

function Spikeball() {
    return (
        <div>
            <SiteNav/>
            <Routes>
                <Route path="/" element={<Navigate to="Home"/>}/>
                <Route path="Home" to="/Roundnet/Home"
                       element={<Home/>}/>
                {/*<Route path="Profile" to="/Roundnet/Profile"
                             element={<Profile/>}/> */}
                <Route path = "Players" to="/Roundnet/Players"
                       element={<PlayerTable/>}/>
                <Route path="Player" to="/Roundnet/Players/:id"
                       element={<Players/>}/>
                <Route path="Matches" to="/Roundnet/Matches"
                       element={<Matches/>}/>
            </Routes>
        </div>
    )
} export default Spikeball;