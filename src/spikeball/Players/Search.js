import {FaMagnifyingGlass} from "react-icons/fa6";
import * as client from "./client"
import {useParams, Link} from "react-router-dom";
import {useEffect, useState} from "react";

function Search() {
    const { query } = useParams();
    const [players, setPlayers] = useState([]);
    const fetchPlayers = async () => {
        const players = await client.findPlayers();
        setPlayers(players);
    };
    useEffect(() => { fetchPlayers(); }, []);
    const search = players.filter(p => p.name.includes(query));
    return (
        <div>
            <h1 className={"wd-padding-left-extreme"}>Search Results {<FaMagnifyingGlass/>}</h1>
            <div className="list-group">
            {search.map((s) => (
                <Link className="list-group-item" key={s._id} to={`Roundnet/Players/${s._id}`}>
                    {s.name}: {s.ranking}
                </Link>
            ))}
            </div>
        </div>
    )
} export default Search;