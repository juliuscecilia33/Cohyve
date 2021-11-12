import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import axios from "axios";
import { LoginPage, RegisterPage, UserPage } from "./pages";
import * as ROUTES from "./constants/routes";
import { UserTokenContext } from "./context/UserToken";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userToken, setUserToken] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  // Get clubs
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/clubs/")
  //     .then((response) => {
  //       setClubsData(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  useEffect(() => {
    let checkAuthenticated = async () => {
      try {
        const res = await fetch("http://localhost:5000/auth/verify", {
          method: "POST",
          headers: { jwt_token: localStorage.token },
        });

        const parseRes = await res.json();

        parseRes === true
          ? setIsAuthenticated(true)
          : setIsAuthenticated(false);
        setIsLoading(false);

        if (isAuthenticated) {
          setUserToken(localStorage.token);
        }

        console.log("is authenticated:", isAuthenticated);
      } catch (err: any) {
        setIsLoading(false);
        setIsAuthenticated(false);
        console.error(err.message);
      }
    };

    checkAuthenticated();
  }, []);

  console.log(userToken);

  return (
    <>
      <UserTokenContext.Provider value={{ userToken, setUserToken }}>
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
          </Switch>
        </Router>
      </UserTokenContext.Provider>
    </>
  );
}

export default App;
