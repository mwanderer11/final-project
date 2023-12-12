import {Link, useLocation, useNavigate} from "react-router-dom";
import {FaSearch, FaUser, FaHome, FaUserFriends} from "react-icons/fa";
import {GiSoccerField} from "react-icons/gi";
import "./index.css"
import {useState} from "react";
import * as client from "./Players/client";

function SiteNav() {
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const selectPlayer = async (name) => {
        try {
            const p = await client.findPlayerByName(name);
            navigate(`/Roundnet/Players/${p.id}`)
        } catch (err) {
            console.log(err);
        }
    }
    const { pathname } = useLocation();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-light">
            <Link
                key={0}
                to={`Profile`}
                className={
                    `nav-item nav-link ${pathname.includes(`Profile`) && "active"}`}>
                <h1 className="wd-padding-left">{<FaUser/>}</h1> <p className="wd-padding-left">Profile</p>
            </Link>
            <Link
                key={1}
                to={`Home`}
                className={
                    `nav-item nav-link ${pathname.includes(`Home`) && "active"}`}>
                <h1 className="wd-padding-left">{<FaHome/>}</h1> <p className="wd-padding-left"> Home </p>
            </Link>
            <Link
                key={2}
                to={`Players`}
                className={
                    `nav-item nav-link ${pathname.includes(`Players`) && "active"}`}>
                <h1 className="wd-padding-left">{<FaUserFriends/>}</h1> <p className="wd-padding-left"> Player List </p>
            </Link>
            <Link
                key={3}
                to={`Matches`}
                className={
                    `nav-item nav-link ${pathname.includes(`Matches`) && "active"}`}>
                <h1 className="wd-padding-left">{<GiSoccerField/>}</h1> <p className="wd-padding-left"> Matches </p>
            </Link>
            <div className={"wd-padding-left"}>
                <input className="form-control-md
                 mr-sm-2 wd-padding-left" type="search" onChange={(e) => setName(e.target.value)}
                       placeholder="Search" aria-label={"Search"}/>
                <button className={"btn btn-outline-danger my-2 my-sm-0"} type={"submit"}
                onClick={() => selectPlayer(`${name}`)}>Search</button>
            </div>
        </nav>
    )
} export default SiteNav;