import React, { Component, useState, useEffect } from 'react'


function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");

    const getEmail = (event) => {
        setEmail(event.target.value)
    }

    const getPassword = (event) => {
        setPassword(event.target.value)
    }

    const getConfirmPassword = (event) => {
        setConfirmPassword(event.target.value)
    }


    const handleRegister = () => {
            const items = JSON.parse(localStorage.setItem('items'));
            if(setConfirmPassword(items) === setPassword(items)) {
                if (items) {
                    setEmail(items);
                    setPassword(items);
                    setConfirmPassword(items);
                    alert("Đăng ký thành công")
                }

                else {
                    alert("Mật khẩu không trùng khớp")
                }

            }

    }

    return (
        <div id="login-container">
            <p>Đăng ký</p>
            <form>
                <div className="login-form">
                    <div className="login-input">
                        <input value={email} onChange={getEmail} className="enmailInput" placeholder="Email"/>
                        <input value={password} onChange={getPassword} className="passwordInput" placeholder="Password" type="password" />
                        <input value={confirmpassword} onChange={getConfirmPassword} className="passwordInput" placeholder="Confirm password" type="password" />

                        <button onClick={handleRegister} className="login-btn">Đăng ký</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Register;