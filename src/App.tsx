import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import axios from "axios";

import {
  LoginPage,
  RegisterPage,
  UserPage,
  CreateClubPage,
  ClubsPage,
  CustomizePage,
  EditUserPage,
} from "./pages";
import * as ROUTES from "./constants/routes";
import { UserInformation } from "./context/UserInformation";
// import * as firebase from "firebase/app";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [firebaseUser, setFirebaseUser] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [accountComplete, setAccountComplete] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User

        axios
          .get("http://localhost:5000/auth/userinformation/" + user.uid)
          .then((response: any) => {
            console.log("axios request called");

            console.log("response of user exists: ", response);

            if (response.data.length === 0) {
              console.log("User doesn't exist");

              setAccountComplete(false);
            } else {
              setUserInfo(response.data[0]);
              setAccountComplete(true);
              const uid = user.uid;
              setFirebaseUser(user);
              setIsAuthenticated(true);

              console.log(response.data);
            }
          })
          .catch((error) => {
            console.error("There was an error!", error);
          });

        console.log("auth state changed app.tsx");
        // ...
      } else {
        // User is signed out
        setIsAuthenticated(false);
        setFirebaseUser(null);
        setUserInfo(null);
      }
    });

    return () => {
      // perform some cleanup actions
      unsubscribe(); // used for efficiency since it will be an infinite loop of change
    };
  }, []);

  console.log("isAuthenticated: ", isAuthenticated);
  console.log("Account is Complete: ", accountComplete);
  console.log("user info: ", userInfo);

  return (
    <>
      <UserInformation.Provider value={{ firebaseUser, userInfo }}>
        <Router
          getUserConfirmation={() => {
            /* Empty callback to block the default browser prompt */
          }}
        >
          <Switch>
            <Route
              exact
              path={ROUTES.LOGIN}
              render={(props) =>
                isAuthenticated ? (
                  <Redirect to={"/" + userInfo.username} />
                ) : (
                  <LoginPage setIsAuthenticated={setIsAuthenticated} />
                )
              }
            />

            <Route
              exact
              path={ROUTES.REGISTER}
              render={(props) =>
                isAuthenticated ? (
                  <Redirect to={"/" + userInfo.username} />
                ) : (
                  <RegisterPage setIsAuthenticated={setIsAuthenticated} />
                )
              }
            />

            <Route
              exact
              path={ROUTES.CREATE}
              render={(props) =>
                !isAuthenticated ? (
                  <Redirect to={ROUTES.LOGIN} />
                ) : (
                  <CreateClubPage />
                )
              }
            />

            <Route exact path={ROUTES.CLUBS}>
              <ClubsPage />
            </Route>

            <Route
              exact
              path={ROUTES.USER}
              render={(props) =>
                !isAuthenticated ? (
                  <Redirect to={ROUTES.LOGIN} />
                ) : (
                  <UserPage userInfo={userInfo} />
                )
              }
            />

            <Route
              exact
              path={ROUTES.EDITUSER}
              render={(props) =>
                !isAuthenticated ? (
                  <Redirect to={ROUTES.LOGIN} />
                ) : (
                  <EditUserPage userInfo={userInfo} />
                )
              }
            />

            <Route exact path={ROUTES.CUSTOMIZE}>
              <CustomizePage />
            </Route>
          </Switch>
        </Router>
      </UserInformation.Provider>
    </>
  );
}

export default App;
