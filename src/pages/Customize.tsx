import React from "react";
import {
  CustomizeContainer,
  NavbarContainer,
  FooterContainer,
} from "../containers";

export default function CustomizePage() {
  return (
    <>
      <NavbarContainer background="#F4FAF4" />
      <CustomizeContainer />
      <FooterContainer />
    </>
  );
}
