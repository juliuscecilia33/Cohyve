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

function App() {
  const [clubsData, setClubsData] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Get clubs
  useEffect(() => {
    axios
      .get("http://localhost:5000/clubs/")
      .then((response) => {
        setClubsData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(clubsData);

  const checkAuthenticated = async () => {
    try {
      const res = await fetch("http://localhost:5000/authentication/verify", {
        method: "POST",
        headers: { jwt_token: localStorage.token },
      });

      const parseRes = await res.json();

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
      setIsLoading(false);
      console.log("is authenticated:", isAuthenticated);
    } catch (err: any) {
      setIsLoading(false);
      setIsAuthenticated(false);
      console.error(err.message);
    }
  };

  useEffect(() => {
    checkAuthenticated();
  }, []);

  console.log("Authenthicated: ", isAuthenticated);

  return (
    <Router>
      <Switch>
        <Route path={ROUTES.LOGIN} exact>
          <LoginPage setIsAuthenticated={setIsAuthenticated} />
        </Route>
        <Route path={ROUTES.REGISTER} exact>
          <RegisterPage setIsAuthenticated={setIsAuthenticated} />
        </Route>
        <Route
          exact
          path={ROUTES.USER}
          render={(props) =>
            !isAuthenticated ? <Redirect to={ROUTES.LOGIN} /> : <UserPage />
          }
        />
      </Switch>
    </Router>
  );
}

export default App;
