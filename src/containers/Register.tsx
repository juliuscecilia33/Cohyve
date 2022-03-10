import React, { useState, useContext } from "react";
import { resourceLimits } from "worker_threads";
import { ActionButton, Login } from "../components";
import Promo from "../images/Club Page.png";
import { Link as ReactRouterLink } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendEmailVerification,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";
import { updateProfile } from "firebase/auth";
import axios from "axios";
import { useHistory } from "react-router-dom";
import GoogleLogo from "../images/GoogleLogo.png";
import { UserInformation } from "../context/UserInformation";

export function RegisterContainer() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    school: "",
  });

  const { setUser, user } = useContext(UserInformation);

  const provider = new GoogleAuthProvider();

  let history = useHistory();

  const { name, email, password } = inputs;
  const [verified, setVerified] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [userExistsError, setUserExistsError] = useState(null);

  // add user profile description input?

  const handleGoogleLogin = async (e: any) => {
    e.preventDefault();

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log("token: ", token);
        // The signed-in user info.
        const user = result.user;
        console.log("user: ", user);

        // const appBody = {
        //   firebase_user_id: user.uid,
        //   school: "",
        //   profileURL: "",
        //   bannerURL: "",
        //   description: "",
        // };

        // do get request?

        const appBody = {
          name: user.displayName,
          firebase_user_id: user.uid,
          school: "",
          profileURL: "",
          bannerURL: "",
          description: "",
          username:
            user.displayName.replace(/\s+/g, "").toLowerCase() + user.uid,
          // send display name to name column
        };

        // since we're already making this check in app.tsx, we can get
        // rid of this axios call and pass in the props response from app?
        axios
          .get("http://localhost:5000/auth/userinformation/" + user.uid)
          .then((response: any) => {
            console.log("axios request called");

            console.log("response of user exists: ", response);

            if (response.data.length === 0) {
              console.log("User doesn't exist");
              axios
                .post("http://localhost:5000/auth/register/", appBody)
                .then((response: any) => {
                  console.log("axios request called");

                  console.log(response.data);
                  // setUser(response.data.rows[0]);
                  console.log("Successfully created user");
                  history.push({
                    pathname:
                      "/" +
                      user.displayName.replace(/\s+/g, "-").toLowerCase() +
                      "/edit",
                  });
                })
                .catch((error) => {
                  setSubmitError(error.message);
                  console.error("There was an error!", error);
                });
            } else {
              console.log("user exists");
              history.push({
                pathname: "/" + response.data.rows[0].username,
              });
            }
          })
          .catch((error) => {
            setUserExistsError(error.message);
            console.error("There was an error!", error);
          });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
        // The email of the user's account used.
        const email = error.email;
        console.log("error email: ", email);
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const onChange = (e: any) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const handleRegister = async (e: any) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        console.log(user);

        updateProfile(auth.currentUser, {
          displayName: name.replace(/\s+/g, "").toLowerCase() + user.uid,
        });

        const appBody = {
          name: name,
          firebase_user_id: user.uid,
          school: "",
          profileURL: "",
          bannerURL: "",
          description: "",
          username: name.replace(/\s+/g, "").toLowerCase() + user.uid,
          // send display name to name column
        };

        axios
          .post("http://localhost:5000/auth/register/", appBody)
          .then((response: any) => {
            console.log("axios request called");

            console.log(response.data);
            console.log("Successfully created user");
            history.push({
              // maybe change this to response.data.username
              pathname: response.data.username.toLowerCase() + "/edit",
            });
          })
          .catch((error) => {
            setSubmitError(error.message);
            console.error("There was an error!", error);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;

        if (errorMessage === "Firebase: Error (auth/email-already-in-use).") {
          console.log("got error message saying email aleady in use");
        }
        console.log("error message: ", errorMessage);
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
            color="#FAFCFA"
            onClick={(e) => handleRegister(e)}
            background="linear-gradient(94.39deg, #58a4b0 8.09%, #afd5aa 93.12%), #284b63;"
          >
            Register
          </ActionButton>
          <ActionButton
            color="#284B63"
            onClick={(e) => handleGoogleLogin(e)}
            background="linear-gradient(94.39deg, #F4F9E9 8.09%, #DEECDE 93.12%);"
          >
            <img src={GoogleLogo} alt="Google Logo" />
            Sign in with Google
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
