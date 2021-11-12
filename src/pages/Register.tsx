import React from "react";
import {
  RegisterContainer,
  NavbarContainer,
  FooterContainer,
} from "../containers";

interface DataProps {
  setIsAuthenticated: any;
}

export default function RegisterPage({ setIsAuthenticated }: DataProps) {
  return (
    <>
      <NavbarContainer background="#FAFCFA" />
      <RegisterContainer />
      <FooterContainer />
    </>
  );
}
