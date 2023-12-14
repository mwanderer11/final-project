import {Link, useLocation, useNavigate} from "react-router-dom";
import { FaUser, FaHome, FaUserFriends} from "react-icons/fa";
import "./index.css"
import {useState} from "react";

function SiteNav() {
    const net = <img src="net.png" width={50} height={50} alt=""></img>
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const search = async () => {
        navigate(`Search/${name}`);
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
                <h1 className="wd-padding-left">{net}</h1> <p className="wd-padding-left"> Matches </p>
            </Link>
            <h1 className={"wd-padding-left"}>Northeastern Club Roundnet</h1>
            <div className={"wd-padding-left"}>
                <input className="form-control-md
                 mr-sm-2" type="search" onChange={(e) => setName(e.target.value)}
                       placeholder="Search" aria-label={"Search"}/>
                <button className="btn btn-outline-danger my-2 my-sm-0" type={"submit"}
                onClick={search}>Search</button>
            </div>
        </nav>
    )
} export default SiteNav;