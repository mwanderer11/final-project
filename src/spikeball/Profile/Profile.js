import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

function Profile() {
    const {id} = useParams();
    const [account, setAccount] = useState(null);
    const navigate = useNavigate();

    const fetchAccount = async () => {
        const acc = await client.account();
        setAccount(acc);
    };

    const findUserById = async (id) => {
        const user = await client.findUserById(id);
        setAccount(user);
    }

    const save = async () => {
        await client.updateUser(account);
    };
    const signout = async () => {
        await client.signout();
        navigate("/Roundnet/signin");
    };
    const signin = async () => {
        navigate("/Roundnet/signin")
    }
    useEffect(() => {
        if(id) {
            findUserById(id);
        } else {
            fetchAccount();
        }
    });

    return (
        <div className="w-50">
            <h1>Profile</h1>
            {account && (
                <div>
                    {account.username !== "" && (
                        <div>
                            Username: <input className="form-control" value={account.username}
                                             onChange={(e) => setAccount({...account, username: e.target.value})}/>
                            {!id && (
                                <div>
                                    Password: <input className="form-control" value={account.password}
                               onChange={(e) => setAccount({
                                                               ...account,
                                                               password: e.target.value
                                                           })}/>
                                </div>
                                 )}
                    First Name: <input className="form-control" value={account.firstName}
                           onChange={(e) => setAccount({ ...account,
                                                           firstName: e.target.value })}/>
                    Last Name: <input className="form-control" value={account.lastName}
                           onChange={(e) => setAccount({ ...account,
                                                           lastName: e.target.value })}/>
                    Date of Birth: <input className="form-control" value={account.dob}
                           onChange={(e) => setAccount({ ...account,
                                                           dob: e.target.value })}/>
                    Email: <input className="form-control" value={account.email}
                           onChange={(e) => setAccount({ ...account,
                                                           email: e.target.value })}/>
                    Role: {account.role === "ADMIN" && (
                        <select className="form-select" onChange={(e) => setAccount({ ...account,
                                                                                        role: e.target.value })}>
                            <option value="MEMBER">Member</option>
                            <option value="ADMIN" selected>Admin</option>
                            <option value="COACH">Coach</option>
                        </select>
                    )}
                    {account.role === "MEMBER" && (
                    <select className="form-select" onChange={(e) => setAccount({ ...account,
                                                                                    role: e.target.value })}>
                        <option value="MEMBER" selected>Member</option>
                        <option value="ADMIN">Admin</option>
                        <option value="COACH">Coach</option>
                    </select>
                                  )}
                    {account.role === "COACH" && (
                        <select className="form-select" onChange={(e) => setAccount({ ...account,
                                                                                        role: e.target.value })}>
                            <option value="MEMBER">Member</option>
                            <option value="ADMIN">Admin</option>
                            <option value="COACH" selected>Coach</option>
                        </select>
                    )}
                    <button onClick={save} className="btn btn-primary">
                        Save
                    </button>
                    <button onClick={signout} className="btn btn-danger">Sign out</button>
                    <Link to="/Roundnet/Profile/Users" className="btn btn-warning w-100">
                        Users
                    </Link>
                            <h2>Friends</h2>
                            {account.username === "maliawanderer" && (
                                <div>
                                    <div className="list-group">
                                        <Link className="list-group-item" to={"/Roundnet/Profile/65775a234b2a010c57a3ccf5"}>
                                            Sunny Gu
                                        </Link>
                                        <Link className="list-group-item" to={"/Roundnet/Profile/5775a234b2a010c57a3ccef"}>
                                            Charles Tipton
                                        </Link>
                                    </div>
                                </div>
                            )}
                            {account.username === "sunnygu" && (
                                <div>
                                    <div className="list-group">
                                        <Link className="list-group-item" to={"/Roundnet/Profile/65775a234b2a010c57a3ccee"}>
                                            Malia Wanderer
                                        </Link>
                                        <Link className="list-group-item" to={"/Roundnet/Profile/65775a234b2a010c57a3ccf0"}>
                                            Sam Diani
                                        </Link>
                                    </div>
                                </div>
                            )}
                            {account.username === "ctipton" && (
                                <div>
                                    <div className="list-group">
                                        <Link className="list-group-item" to={"/Roundnet/Profile/65775a234b2a010c57a3ccee"}>
                                            Malia Wanderer
                                        </Link>
                                    </div>
                                </div>
                            )}
                            {account.username === "samuel" && (
                                <div>
                                    <div className="list-group">
                                        <Link className="list-group-item" to={"/Roundnet/Profile/65775a234b2a010c57a3ccf5"}>
                                            Sunny Gu
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div> )}
                    {account.username === "" && (
                        <div>
                            <button onClick={signin} className="btn btn-danger">Sign in</button>
                        </div>
                    )}
                </div>
             )}
            {!account && (
                <div>
                    <button onClick={signin} className="btn btn-danger">Sign in</button>
                </div>
            )}
        </div>
    );
}
export default Profile;