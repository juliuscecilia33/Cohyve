import React, { useState } from "react";
import { ActionButton, Login } from "../components";
import Promo from "../images/Club Page.png";
import { Link as ReactRouterLink } from "react-router-dom";
import * as ROUTES from "../constants/routes";

interface DataProps {
  setIsAuthenticated: any;
}

export function LoginContainer({ setIsAuthenticated }: DataProps) {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputs;

  const onChange = (e: any) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {
      const body = { email, password };
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();

      if (parseRes.jwtToken) {
        localStorage.setItem("token", parseRes.jwtToken);
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }

      setInputs({ email: "", password: "" });
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <>
      <Login>
        <Login.ContainerMed>
          <Login.Promo>
            <Login.PromoHeader>
              Grow your <span>Club</span> today
            </Login.PromoHeader>
            <Login.PromoImage src={Promo} />
            <Login.PromoText>Collaborate, Compete, Promote</Login.PromoText>
          </Login.Promo>
        </Login.ContainerMed>
        <Login.ContainerMed>
          <Login.Heading color="#284b63">Login</Login.Heading>
          <Login.Input
            name="email"
            value={email}
            placeholder="Email"
            onChange={(e: any) => onChange(e)}
            type="email"
          />
          <Login.Input
            name="password"
            value={password}
            placeholder="Password"
            onChange={(e: any) => onChange(e)}
            type="password"
          />
          <ActionButton onClick={(e) => handleLogin(e)}>Login</ActionButton>
          <Login.Message>
            Not registered yet?{" "}
            <ReactRouterLink to={ROUTES.REGISTER}>
              <span>Create an account!</span>
            </ReactRouterLink>
          </Login.Message>
        </Login.ContainerMed>
      </Login>
    </>
  );
}
