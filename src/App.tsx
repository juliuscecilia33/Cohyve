import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import { LoginPage, RegisterPage } from "./pages";
import * as ROUTES from "./constants/routes";

function App() {
  const [clubsData, setClubsData] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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

      console.log("is authenticated:", isAuthenticated);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <Router>
      <Switch>
        <Route path={ROUTES.LOGIN} exact>
          <LoginPage setIsAuthenticated={setIsAuthenticated} />
        </Route>
        <Route path={ROUTES.REGISTER} exact>
          <RegisterPage setIsAuthenticated={setIsAuthenticated} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
