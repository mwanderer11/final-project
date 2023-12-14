import Matches from "../Matches/Matches";
import Rankings from "../Players/Rankings";
import {useNavigate} from "react-router-dom"

function Home() {
    const navigate = useNavigate();
    const toPlayers = async () => {
        navigate("/Roundnet/Players");
    };
    return (
        <div className="table-responsive wd-padding-small">
            <table className="table-borderless" border="0">
                <tbody>
                <tr>
                    <td valign={"top"} width="80%">
                        <Matches/>
                    </td>
                    <td valign={"top"} className={"wd-padding-left"}>
                        <Rankings/>
                        <button onClick={toPlayers} type="button" className="btn btn-warning">
                            View players
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
} export default Home;