import {Route, Routes, Navigate} from "react-router-dom";
import SiteNav from "./SiteNav";
import Home from "./Home/index";
import Players from "./Players/Players";
import PlayerTable from "./Players/table";
import Matches from "./Matches/Matches";
import Match from "./Matches/index"
import Profile from "./Profile/Profile"
import Signup from "./Profile/signup";
import Signin from "./Profile/signin";

function Spikeball() {
    return (
        <div>
            <SiteNav/>
            <Routes>
                <Route path="/" element={<Navigate to="Home"/>}/>
                <Route path="Home"
                       element={<Home/>}/>
                <Route path="Profile"
                             element={<Profile/>}/>
                <Route path = "Players"
                       element={<PlayerTable/>}/>
                <Route path="Players/:id"
                       element={<Players/>}/>
                <Route path= "Matches"
                       element={<Matches/>}/>
                <Route path="Matches/:id"
                       element={<Match/>}/>
                <Route path="signup"
                       element={<Signup/>}/>
                <Route path="signin" element={<Signin/>}/>
            </Routes>
        </div>
    )
} export default Spikeball;