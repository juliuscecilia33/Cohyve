import React from "react";
import { LoginContainer, NavbarContainer } from "../containers";

interface DataProps {
  setIsAuthenticated: any;
}

export default function LoginPage({ setIsAuthenticated }: DataProps) {
  return (
    <>
      <NavbarContainer />
      <LoginContainer setIsAuthenticated={setIsAuthenticated} />
    </>
  );
}
