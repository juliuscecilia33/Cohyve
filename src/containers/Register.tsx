import React, { useState } from "react";
import { resourceLimits } from "worker_threads";
import { ActionButton, Login } from "../components";
import Promo from "../images/Club Page.png";
import { Link as ReactRouterLink, useHistory } from "react-router-dom";
import * as ROUTES from "../constants/routes";

// interface DataProps {
//   setIsAuthenticated: any;
// }

export function RegisterContainer() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    school: "",
  });

  const { name, email, password, school } = inputs;

  // add user profile description input?

  const onChange = (e: any) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  // const handleLogin = async (e: any) => {
  //   e.preventDefault();

  //   try {
  //     const body = { email, password };
  //     const response = await fetch("http://localhost:5000/auth/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //       body: JSON.stringify(body),
  //     });

  //     const parseRes = await response.json();

  //     if (parseRes.jwtToken) {
  //       localStorage.setItem("token", parseRes.jwtToken);
  //       setIsAuthenticated(true);
  //     } else {
  //       setIsAuthenticated(false);
  //     }

  //     setInputs({ email: "", password: "" });
  //   } catch (err: any) {
  //     console.error(err.message);
  //   }
  // };

  return (
    <>
      <Login>
        <Login.ContainerMed>
          <Login.Heading color="#284b63">Register</Login.Heading>
          <Login.Input
            name="name"
            value={name}
            placeholder="Name"
            onChange={(e: any) => onChange(e)}
            type="text"
          />
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
          {/* User is going to select school from dropdown  */}
          <Login.Input
            name="school"
            value={school}
            placeholder="School"
            onChange={(e: any) => onChange(e)}
            type="text"
          />
          <ActionButton background="linear-gradient(94.39deg, #58a4b0 8.09%, #afd5aa 93.12%), #284b63;">
            Register
          </ActionButton>
          <Login.Message>
            Already have an account?{" "}
            <ReactRouterLink to={ROUTES.LOGIN}>
              <span>Login!</span>
            </ReactRouterLink>
          </Login.Message>
        </Login.ContainerMed>
        <Login.ContainerMed>
          <Login.Promo>
            <Login.PromoHeader>
              Grow your <span>Club</span> today
            </Login.PromoHeader>
            <Login.PromoImage src={Promo} />
            <Login.PromoText>Collaborate, Compete, Promote</Login.PromoText>
          </Login.Promo>
        </Login.ContainerMed>
      </Login>
    </>
  );
}
