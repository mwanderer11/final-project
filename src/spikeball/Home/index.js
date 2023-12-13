import Matches from "../Matches/Matches";
import Rankings from "../Players/Rankings";
import {Link} from "react-router-dom"

function Home() {
    return (
        <div className="table-responsive wd-padding-small">
            <table className="table-borderless" border="0">
                <thead className="thead-dark">
                <tr>
                    <td>
                        <h1 className={"wd-padding-left-extreme"}>Home</h1>
                    </td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <Matches/>
                    </td>
                    <td valign={"top"} className={"wd-padding-left"}>
                        <Rankings/>
                        <Link to="Roundnet/Players" type="button" className="btn btn-warning">
                            View players
                        </Link>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
} export default Home;