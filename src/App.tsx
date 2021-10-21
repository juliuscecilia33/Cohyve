import React, { useEffect, useState } from "react";
import axios from "axios";

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

  // Verify if user is authenticated
  useEffect(() => {
    checkAuthenticated();
  }, []);

  return <div>Hello Cohyve</div>;
}

export default App;
