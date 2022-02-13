import React, { useState } from "react";
import { resourceLimits } from "worker_threads";
import { ActionButton, Login } from "../components";
import Promo from "../images/Club Page.png";
import { Link as ReactRouterLink, useHistory } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../firebase";
import { updateProfile } from "firebase/auth";
import axios from "axios";

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

  const { name, email, password } = inputs;
  const [verified, setVerified] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: "http://localhost:3000/register/finish", // create a new component
    // This must be true.
    handleCodeInApp: true,
    iOS: {
      bundleId: "com.example.ios",
    },
    android: {
      packageName: "com.example.android",
      installApp: true,
      minimumVersion: "12",
    },
    dynamicLinkDomain: "example.page.link",
  };

  // add user profile description input?

  const onChange = (e: any) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const handleLogin = async (e: any) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        console.log(user);

        updateProfile(auth.currentUser, {
          displayName: name,
        });

        const appBody = {
          firebase_user_id: user.uid,
          school: "",
          profileURL: "",
          bannerURL: "",
          description: "",
        };

        axios
          .post("http://localhost:5000/auth/register/", appBody)
          .then((response: any) => {
            console.log(response.data);
            console.log("Successfully created user");
            // Direct to clubs page
            // history.push({
            //   pathname:
            //     "/" +
            //     clubName.replace(/\s+/g, "-").toLowerCase() +
            //     "/" +
            //     response.data.club_id +
            //     "/customize",
            // });
          })
          .catch((error) => {
            setSubmitError(error.message);
            console.error("There was an error!", error);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

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
          {/* After email confirmation, next page will be customization page, school, profile picture, banner, ask them if they're in any clubs */}

          <ActionButton
            onClick={(e) => handleLogin(e)}
            background="linear-gradient(94.39deg, #58a4b0 8.09%, #afd5aa 93.12%), #284b63;"
          >
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
