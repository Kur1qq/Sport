import React from "react";
import "./login.css";

export default function Login(){
    return(
        <div className="login">
            <h1>Login</h1>
            <form>
                <div className="login-form">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div className="login-form">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}