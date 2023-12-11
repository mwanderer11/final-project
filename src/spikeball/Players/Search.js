import {FaMagnifyingGlass} from "react-icons/fa6";
import * as client from "./client"

function Search() {
    const searchPlayer = async (name) => {
        try {
            await client.findPlayerByName(name);
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div>
    <FaMagnifyingGlass onClick={() => searchPlayer()}/>
        </div>
    )
}