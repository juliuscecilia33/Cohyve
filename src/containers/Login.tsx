import React, { useState } from "react";
import { ActionButton, Login } from "../components";
import Promo from "../images/Clubs.png";

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
          <Login.Heading>Login</Login.Heading>
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
            placeholder="Pasword"
            onChange={(e: any) => onChange(e)}
            type="password"
          />
          <ActionButton onClick={(e) => handleLogin(e)}>Submit</ActionButton>
        </Login.ContainerMed>
      </Login>
    </>
  );
}
