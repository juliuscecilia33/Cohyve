import React from "react";
import { Navbar, ActionButton } from "../components";
import Logo from "../images/Logo.png";
import { Link as ReactRouterLink } from "react-router-dom";
import * as ROUTES from "../constants/routes";

interface DataProps {
  background: string;
}

export function NavbarContainer({ background }: DataProps) {
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
        <ReactRouterLink to={ROUTES.REGISTER}>
          <ActionButton background="linear-gradient(94.39deg, #58a4b0 8.09%, #afd5aa 93.12%), #284b63;">
            Get Started
          </ActionButton>
        </ReactRouterLink>
      </Navbar.ContainerMed>
    </Navbar>
  );
}
