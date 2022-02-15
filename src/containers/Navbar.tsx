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

  return (
    <Navbar background={background}>
      <Navbar.ContainerMed>
        <ReactRouterLink to={ROUTES.HOME}>
          <Navbar.Logo src={Logo} />
        </ReactRouterLink>
        <Navbar.Border />
        <Navbar.Tabs>
          <Navbar.Tab>Clubs</Navbar.Tab>
          <Navbar.Tab>Schools</Navbar.Tab>
        </Navbar.Tabs>
        <ReactRouterLink to={ROUTES.CREATE}>
          <ActionButton
            color="#FAFCFA"
            background="linear-gradient(94.39deg, #58a4b0 8.09%, #afd5aa 93.12%), #284b63;"
          >
            Create Club
          </ActionButton>
        </ReactRouterLink>
        <ReactRouterLink to={ROUTES.LOGIN}>
          <ActionButton
            color="#FAFCFA"
            onClick={() => signoutUser()}
            background="linear-gradient(94.39deg, #58a4b0 8.09%, #afd5aa 93.12%), #284b63;"
          >
            Temporary Signout
          </ActionButton>
        </ReactRouterLink>
      </Navbar.ContainerMed>
    </Navbar>
  );
}
