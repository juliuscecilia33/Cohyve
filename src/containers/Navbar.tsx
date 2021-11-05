import React from "react";
import { Navbar, ActionButton } from "../components";
import Logo from "../images/Logo.png";

export function NavbarContainer() {
  return (
    <Navbar>
      <Navbar.ContainerMed>
        <Navbar.Logo src={Logo} />
        <Navbar.Border />
        <Navbar.Tabs>
          <Navbar.Tab>Clubs</Navbar.Tab>
          <Navbar.Tab>Schools</Navbar.Tab>
        </Navbar.Tabs>
      </Navbar.ContainerMed>
      <Navbar.ContainerMed>
        <ActionButton>Get Started</ActionButton>
      </Navbar.ContainerMed>
    </Navbar>
  );
}
