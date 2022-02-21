import React from "react";
import { Navbar, ActionButton } from "../components";
import Logo from "../images/Logo.png";
import { Link as ReactRouterLink } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

interface DataProps {
  background: string;
}

export function NavbarContainer({ background }: DataProps) {
  const signoutUser = () => {
    signOut(auth);
  };

  console.log("navbar: ", auth.currentUser);

  return (
    <Navbar background={background}>
      <Navbar.ContainerMed>
        <ReactRouterLink to={ROUTES.HOME}>
          <Navbar.Logo src={Logo} />
        </ReactRouterLink>
        <Navbar.Border />
        <Navbar.Tabs>
          <ReactRouterLink to={ROUTES.CLUBS}>
            <Navbar.Tab>Clubs</Navbar.Tab>
          </ReactRouterLink>
          <Navbar.Tab>Schools</Navbar.Tab>
        </Navbar.Tabs>
        <ReactRouterLink to={ROUTES.CREATE}>
          <ActionButton
            onClick={null}
            color="#FAFCFA"
            background="linear-gradient(94.39deg, #58a4b0 8.09%, #afd5aa 93.12%), #284b63;"
          >
            Create Club
          </ActionButton>
        </ReactRouterLink>
        {auth.currentUser ? (
          <ReactRouterLink to={ROUTES.LOGIN}>
            <ActionButton
              color="#FAFCFA"
              onClick={() => signoutUser()}
              background="linear-gradient(94.39deg, #58a4b0 8.09%, #afd5aa 93.12%), #284b63;"
            >
              Temporary Signout
            </ActionButton>
          </ReactRouterLink>
        ) : (
          <ReactRouterLink to={ROUTES.LOGIN}>
            <ActionButton
              color="#FAFCFA"
              onClick={() => signoutUser()}
              background="linear-gradient(94.39deg, #58a4b0 8.09%, #afd5aa 93.12%), #284b63;"
            >
              Login
            </ActionButton>
          </ReactRouterLink>
        )}
      </Navbar.ContainerMed>
    </Navbar>
  );
}
