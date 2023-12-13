import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signin() {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const navigate = useNavigate();
    const signin = async () => {
        await client.signin(credentials);
        navigate("/Roundnet/Profile");
    };
    const signup = async () => {
        navigate("/Roundnet/signup")
    }
    return (
        <div>
            <h1>Sign in</h1>
            <input className="form-control-sm"
                   value={credentials.username}
                   onChange={(e) => setCredentials({...credentials, username: e.target.value})}/>
            <br/>
            <input className="form-control-sm"
                   value={credentials.password}
                   onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
            <br/>
            <button className="btn btn-success" type="button" onClick={signin}> Sign in </button>
            <button className="btn btn-warning" type="button" onClick={signup}>Sign up</button>
        </div>
    );
}
export default Signin;