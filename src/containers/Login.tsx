import React, { useState } from "react";
import { ActionButton } from "../components";

interface DataProps {
  setIsAuthenticated: any;
}

export function LoginContainer({ setIsAuthenticated }: DataProps) {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputs;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
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
      <input
        type="text"
        name="email"
        value={email}
        onChange={(e) => onChange(e)}
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => onChange(e)}
      />
      <ActionButton onClick={(e) => handleLogin(e)}>Submit</ActionButton>
    </>
  );
}
