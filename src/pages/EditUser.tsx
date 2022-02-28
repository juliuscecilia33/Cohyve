import React from "react";
import {
  NavbarContainer,
  FooterContainer,
  EditUserContainer,
} from "../containers";
import { auth } from "../firebase";

interface DataProps {
  user: any;
}

export default function EditUserPage({ user }: DataProps) {
  // console.log(auth.currentUser);

  return (
    <>
      <NavbarContainer background="#F4FAF4" />
      <EditUserContainer />
      <FooterContainer />
    </>
  );
}
