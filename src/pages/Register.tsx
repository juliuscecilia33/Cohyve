import React from "react";
import { RegisterContainer, NavbarContainer } from "../containers";

interface DataProps {
  setIsAuthenticated: any;
}

export default function RegisterPage({ setIsAuthenticated }: DataProps) {
  return (
    <>
      <NavbarContainer />
      <RegisterContainer />
    </>
  );
}
