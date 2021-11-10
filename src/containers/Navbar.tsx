import React from "react";
import { Navbar, ActionButton } from "../components";
import Logo from "../images/Logo.png";
import { Link as ReactRouterLink } from "react-router-dom";
import * as ROUTES from "../constants/routes";

export function NavbarContainer() {
  return (
    <Navbar>
      <Navbar.ContainerMed>
        <ReactRouterLink to={ROUTES.HOME}>
          <Navbar.Logo src={Logo} />
        </ReactRouterLink>
        <Navbar.Border />
        <Navbar.Tabs>
          <Navbar.Tab>Clubs</Navbar.Tab>
          <Navbar.Tab>Schools</Navbar.Tab>
        </Navbar.Tabs>
      </Navbar.ContainerMed>
      <Navbar.ContainerMed>
        <ReactRouterLink to={ROUTES.REGISTER}>
          <ActionButton>Get Started</ActionButton>
        </ReactRouterLink>
      </Navbar.ContainerMed>
    </Navbar>
  );
}
