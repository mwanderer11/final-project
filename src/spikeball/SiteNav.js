import { Link, useLocation } from "react-router-dom";
import {FaSearch, FaUser, FaHome} from "react-icons/fa";
import "./index.css"

function SiteNav() {
    const { pathname } = useLocation();
    return (
        <div className="list-group wd-pos-fixed" style={{width: 125}}>
            <Link
                key={0}
                to={`Profile`}
                className={
                    `nav-link list-group-item ${pathname.includes(`Profile`) && "active"}`}>
                <h2><FaUser/></h2>Profile
            </Link>
            <Link
                key={1}
                to={`Home`}
                className={
                    `nav-link list-group-item ${pathname.includes(`Home`) && "active"}`}>
               <h2><FaHome/></h2> Home
            </Link>
            <Link
                key={2}
                to={`Search`}
                className={
                    `nav-link list-group-item ${pathname.includes(`Search`) && "active"}`}>
                <h2> <FaSearch/> </h2> Player Search
            </Link>
        </div>
    )
} export default SiteNav;