import React, { useState, useContext } from "react";
import { ActionButton, Login } from "../components";
import Promo from "../images/Club Page.png";
import { Link as ReactRouterLink, useHistory } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";
import GoogleLogo from "../images/GoogleLogo.png";
import axios from "axios";
import { UserInformation } from "../context/UserInformation";

interface DataProps {
  setIsAuthenticated: any;
}

export function LoginContainer({ setIsAuthenticated }: DataProps) {
  const { setUser, user } = useContext(UserInformation);

  const provider = new GoogleAuthProvider();

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [userExistsError, setUserExistsError] = useState(null);
  const [submitError, setSubmitError] = useState(null);

  const { email, password } = inputs;

  const history = useHistory();
  const onChange = (e: any) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

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

        const appBody = {
          name: user.displayName,
          firebase_user_id: user.uid,
          school: "",
          profileURL: "",
          bannerURL: "",
          description: "",
          username:
            user.displayName.replace(/\s+/g, "").toLowerCase().slice(0, 6) +
            user.uid,
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
                      user.displayName
                        .replace(/\s+/g, "")
                        .toLowerCase()
                        .slice(0, 6) +
                      user.uid +
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

  const handleLogin = async (e: any) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);

        axios
          .get("http://localhost:5000/auth/userinformation/" + user.uid)
          .then((response: any) => {
            console.log("axios request called");
            history.push({
              pathname: "/" + response.data.rows[0].username,
            });
          })
          .catch((error) => {
            setUserExistsError(error.message);
            console.error("There was an error!", error);
          });

        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setSubmitError(errorMessage);
      });
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
          <ActionButton
            color="#FAFCFA"
            background="linear-gradient(94.39deg, #58a4b0 8.09%, #afd5aa 93.12%), #284b63;"
            onClick={(e) => handleLogin(e)}
          >
            Login
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
