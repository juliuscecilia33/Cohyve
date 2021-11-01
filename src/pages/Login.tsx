import React from "react";
import { LoginContainer } from "../containers";

interface DataProps {
  setIsAuthenticated: any;
}

export default function LoginPage({ setIsAuthenticated }: DataProps) {
  return <LoginContainer setIsAuthenticated={setIsAuthenticated} />;
}
