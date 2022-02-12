import React from "react";
import { NavbarContainer, FooterContainer } from "../containers";
import { auth } from "../firebase";

export default function RegisterFinishPage() {
  console.log(auth.currentUser);
  console.log("hello");

  return (
    <>
      <NavbarContainer background="#F4FAF4" />
      <p>Finish register steps</p>
      <FooterContainer />
    </>
  );
}
