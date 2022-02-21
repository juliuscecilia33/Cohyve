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
  RegisterFinishPage,
} from "./pages";
import * as ROUTES from "./constants/routes";
import { UserContext } from "./context/UserToken";
// import * as firebase from "firebase/app";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setUser(user);
        setIsAuthenticated(true);
        // ...
      } else {
        // User is signed out
        setIsAuthenticated(false);
        setUser(null);
      }
    });

    return () => {
      // perform some cleanup actions
      unsubscribe(); // used for efficiency since it will be an infinite loop of change
    };
  }, []);

  console.log("isAuthenticated: ", isAuthenticated);

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <Router>
          <Switch>
            <Route
              exact
              path={ROUTES.LOGIN}
              render={(props) =>
                isAuthenticated ? (
                  <Redirect to={ROUTES.USER} />
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
                  <Redirect to={ROUTES.USER} />
                ) : (
                  <RegisterPage setIsAuthenticated={setIsAuthenticated} />
                )
              }
            />
            <Route
              exact
              path={ROUTES.USER}
              render={(props) =>
                !isAuthenticated ? <Redirect to={ROUTES.LOGIN} /> : <UserPage />
              }
            />
            <Route exact path={ROUTES.CREATE}>
              <CreateClubPage />
            </Route>
            <Route exact path={ROUTES.CLUBS}>
              <ClubsPage />
            </Route>
            <Route exact path={ROUTES.REGISTERFINISH}>
              <RegisterFinishPage />
            </Route>
            <Route path={ROUTES.CUSTOMIZE}>
              <CustomizePage />
            </Route>
            x
          </Switch>
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
