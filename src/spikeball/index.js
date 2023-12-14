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
import Search from "./Players/Search";
import UserTable from "./Profile/table";

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
                <Route path="Profile/Users"
                       element={<UserTable/>}/>
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
                <Route path="Search/:query"
                       element={<Search/>}/>
            </Routes>
        </div>
    )
} export default Spikeball;