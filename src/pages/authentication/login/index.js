import React from "react";
import { Botton, CarauselLogin, Input } from "../../../components";

class Login extends React.Component {
    render() {
        return (
        <section className="body-login">
            <div className="cont-login d-flex flex-row position-absolute top-50 start-50 translate-middle">
            <div className="img-login">
                {/* <CarauselLogin /> */}
            </div>
            <div className="content-login d-flex flex-column align-items-center justify-content-center">
                <h1>Login</h1>
                <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi,
                dolores.
                </p>
                <form action="">
                <Input
                    name="username"
                    placeholder="Nama Pengguna"
                    id="username"
                    type="text"
                />
                <Input
                    name="password"
                    placeholder="Kata Sandi"
                    id="password"
                    type="password"
                />
                <Botton value="Login" />
                </form>
            </div>
            </div>
        </section>
        );
    }
}

export default Login;
