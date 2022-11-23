import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CarauselLogin, Input } from "../../atoms";
import "./login.scss";
import { api } from "../../../api/api";

const LoginMain = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");

    const Login = async (e) => {
        e.preventDefault();
        try {
            await api.post('/auth/login', {
                password: password,
                email: email
            })
            navigate('../dashboard')
        } catch (err) {
            if (err.response) {
                setMsg(err.response.data.msgErr)
            }
        }
    };
    return (
        <section className="body-login">
            <div className="cont-login d-flex flex-row position-absolute top-50 start-50 translate-middle">
                <div className="img-login">
                    <CarauselLogin />
                </div>
                <div className="content-login d-flex flex-column align-items-center justify-content-center">
                    <h1>Login</h1>
                    <p>
                        Inventory in or out of restaurant.
                    </p>
                    <form onSubmit={Login}>
                        {msg
                            ? <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                {msg}
                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                            : <div>

                            </div>
                        }
                        <div className="cont-from-login">
                            <div className="mb-3">
                                <Input name="email" placeholder="Email" id="emai" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <Input name="password" placeholder="Password" id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="mt-2">
                                <button type="submit" className="botton">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default LoginMain