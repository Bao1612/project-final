import "./Login.css"
import { useState } from "react";
import axios from "axios";

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
        axios({
            method: 'post',
            url: 'http://125.212.249.230:3001/api/v1/auth/login',
            data: {
                "username": email,
                "password": password
            }
        });
    }

    return (
        <div id="login-container">
            <p>Đăng nhập</p>
            <form onSubmit={handleLogin}>
                <div className="login-form">
                    <input value={email} onChange={getEmail} className="enmailInput" placeholder="Email"/>
                    <input value={password} onChange={getPassword} className="passwordInput" placeholder="Password" type="password" />
                    <div className="remember"><input type="checkbox" /> Ghi nhớ</div>
                    <button type="submit" className="login-btn">Đăng nhập</button>
                </div>
            </form>
        </div>
    )
}

export default Login;