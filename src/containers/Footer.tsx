import React from "react";
import { Footer, ActionButton } from "../components";
import Logo from "../images/Logo.png";
import { Link as ReactRouterLink } from "react-router-dom";
import * as ROUTES from "../constants/routes";

export function FooterContainer() {
  return (
    <>
      <Footer>
        <Footer.ContainerMed>
          <ReactRouterLink to={ROUTES.HOME}>
            <Footer.Logo src={Logo} />
          </ReactRouterLink>
          <Footer.Tabs>
            <Footer.TabHeading>pages.</Footer.TabHeading>
            <Footer.Tab>Clubs</Footer.Tab>
            <Footer.Tab>Schools</Footer.Tab>
          </Footer.Tabs>
          <Footer.Tabs>
            <Footer.TabHeading>follow us.</Footer.TabHeading>
            <Footer.Tab>Twitter</Footer.Tab>
            <Footer.Tab>Instagram</Footer.Tab>
            <Footer.Tab>Facebook</Footer.Tab>
          </Footer.Tabs>
        </Footer.ContainerMed>
        <Footer.ContainerMed>
          <ReactRouterLink to={ROUTES.REGISTER}>
            <ActionButton>Get Started</ActionButton>
          </ReactRouterLink>
        </Footer.ContainerMed>
      </Footer>
    </>
  );
}
