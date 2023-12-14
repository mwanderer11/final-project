import React, { useState, useEffect } from "react";
import * as client from "./client";
import {BsTrash3Fill } from "react-icons/bs";
import {Link} from "react-router-dom"

function UserTable() {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const users = await client.findAllUsers();
        setUsers(users);
    };

    const deleteUser = async (user) => {
        try {
            await client.deleteUser(user);
            setUsers(users.filter((u) => u._id !== user._id));
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => { fetchUsers(); }, []);
    return (
        <div>
            <h1>User List</h1>
            <table className="table">
                <tbody>
                {users.map((user) => (
                    <tr key={user._id}>
                        <td>
                            <Link to={`/Roundnet/Profile/${user._id}`}> {user.username}
                            </Link></td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>  <button className="btn btn-danger" onClick={() => deleteUser(user)}>
                            <BsTrash3Fill/>
                        </button></td>
                    </tr>))}
                </tbody>
            </table>
        </div>
    );
}
export default UserTable;