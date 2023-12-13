import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

function Profile() {
    const {id} = useParams();
    const [account, setAccount] = useState(null);
    const navigate = useNavigate();
    const fetchAccount = async () => {
        const account = await client.account();
        setAccount(account);
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
            <h1>Account</h1>
            {account && (
                <div>
                    {!id && (
                        <input className="form-control" value={account.password}
                               onChange={(e) => setAccount({
                                                               ...account,
                                                               password: e.target.value
                                                           })}/>
                    )}
                    <input className="form-control" value={account.firstName}
                           onChange={(e) => setAccount({ ...account,
                                                           firstName: e.target.value })}/>
                    <input className="form-control" value={account.lastName}
                           onChange={(e) => setAccount({ ...account,
                                                           lastName: e.target.value })}/>
                    <input className="form-control" value={account.dob}
                           onChange={(e) => setAccount({ ...account,
                                                           dob: e.target.value })}/>
                    <input className="form-control" value={account.email}
                           onChange={(e) => setAccount({ ...account,
                                                           email: e.target.value })}/>
                    <select className="form-select" onChange={(e) => setAccount({ ...account,
                                                                                    role: e.target.value })}>
                        <option value="MEMBER">Member</option>
                        <option value="ADMIN">Admin</option>
                        <option value="COACH">Coach</option>
                    </select>
                    <button onClick={save} className="btn btn-primary">
                        Save
                    </button>
                    <button onClick={signout} className="btn btn-danger">Sign out</button>
                    <Link to="/Roundnet/Users" className="btn btn-warning w-100">
                        Users
                    </Link>
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