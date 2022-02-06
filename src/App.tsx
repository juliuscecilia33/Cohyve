import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import {
  LoginPage,
  RegisterPage,
  UserPage,
  CreateClubPage,
  ClubsPage,
  CustomizePage,
} from "./pages";
import * as ROUTES from "./constants/routes";
import { UserTokenContext } from "./context/UserToken";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userToken, setUserToken] = useState("");

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

  const checkAuthenticated = async () => {
    try {
      const res = await fetch("http://localhost:5000/auth/verify", {
        method: "POST",
        headers: { jwt_token: localStorage.token },
      });

      const parseRes = await res.json();

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err: any) {
      setIsAuthenticated(false);
      console.error(err.message);
    }
  };

  useEffect(() => {
    checkAuthenticated();
  }, []);

  console.log(isAuthenticated);

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
            <Route exact path={ROUTES.CREATE}>
              <CreateClubPage />
            </Route>
            <Route exact path={ROUTES.CLUBS}>
              <ClubsPage />
            </Route>
            <Route exact path={ROUTES.CUSTOMIZE}>
              <CustomizePage />
            </Route>
          </Switch>
        </Router>
      </UserTokenContext.Provider>
    </>
  );
}

export default App;
