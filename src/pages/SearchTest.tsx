import React from "react";
import {
  RegisterContainer,
  NavbarContainer,
  FooterContainer,
} from "../containers";
import { SearchBarContainer } from "../containers";
import SchoolData from "../schools.json";

interface DataProps {
  setIsAuthenticated: any;
}

export default function SearchTestPage() {
  return (
    <>
      <NavbarContainer background="#FAFCFA" />
      <SearchBarContainer
        placeholder="Enter a Book Name..."
        data={SchoolData}
      />
      <FooterContainer />
    </>
  );
}
