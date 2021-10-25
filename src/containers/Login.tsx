import React, { useState } from "react";
import axios from "axios";

export function LoginContainer() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const [token, setToken] = useState(null);

  const { email, password } = inputs;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = (e: any) => {
    e.preventDefault();

    const loginBody = { email, password };

    axios
      .post("http://localhost:5000/auth/login", loginBody)
      .then((response) => {
        setToken(response);
        console.log(response);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  return (
    <>
      <form onSubmit={onSubmitForm}>
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
        <button>Submit</button>
      </form>
    </>
  );
}
