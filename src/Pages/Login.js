import "./Login.css"
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Register from "./Register";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const getEmail = (event) => {
        setEmail(event.target.value)
    }

    const getPassword = (event) => {
        setPassword(event.target.value)
    }

    const handleLogin = () => {
        
    }

    return (
        <div id="login-container">
            <p>Đăng nhập</p>
            <form onSubmit={handleLogin}>
                <div className="login-form">
                    <div className="login-input">
                        <input value={email} onChange={getEmail} className="enmailInput" placeholder="Email"/>
                        <input value={password} onChange={getPassword} className="passwordInput" placeholder="Password" type="password" />
                        <div className="remember"><input type="checkbox" /> Ghi nhớ</div>
                        <button type="submit" className="login-btn">Đăng nhập</button>
                        <div className="Register">

                                <Link
                                style={{
                                    textDecoration: "none",
                                    color: "white"
                                }}
                                to="/register"
                                >
                                    <div className="register-btn">Đăng ký</div>
                                </Link>
                                
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;