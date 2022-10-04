import React from "react";
import "./regis.scss";
import { Botton, CarauselLogin, Input } from "../../../components";

class Regis extends React.Component {
  render() {
    return (
      <section className="body-login">
        <div className="cont-login d-flex flex-row position-absolute top-50 start-50 translate-middle">
          <div className="img-login">
            {/* <CarauselLogin /> */}
          </div>
          <div className="content-login d-flex flex-column align-items-center justify-content-center">
            <h1>Sign Up</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi,
              dolores.
            </p>
            <form action="">
              <Input
                name="username"
                placeholder="Username"
                id="username"
                type="text"
              />
              <Input 
                name="email" 
                placeholder="Email" 
                id="email" 
                type="email" />
              <Input
                name="password"
                placeholder="Password"
                id="password"
                type="password"
              />
              <Botton value="Sign Up" />
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Regis;
