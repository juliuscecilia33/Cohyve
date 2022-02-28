import React from "react";
import {
  NavbarContainer,
  FooterContainer,
  EditUserContainer,
} from "../containers";
import { auth } from "../firebase";

export default function EditUserPage() {
  console.log(auth.currentUser);

  return (
    <>
      <NavbarContainer background="#F4FAF4" />
      <EditUserContainer />
      <FooterContainer />
    </>
  );
}
