import React from "react";
import {
  LoginContainer,
  NavbarContainer,
  FooterContainer,
} from "../containers";

interface DataProps {
  setIsAuthenticated: any;
}

export default function LoginPage({ setIsAuthenticated }: DataProps) {
  return (
    <>
      <NavbarContainer background="#FAFCFA" />
      <LoginContainer setIsAuthenticated={setIsAuthenticated} />
      <FooterContainer />
    </>
  );
}
