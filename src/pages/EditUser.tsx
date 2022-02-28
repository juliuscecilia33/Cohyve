import React from "react";
import {
  NavbarContainer,
  FooterContainer,
  EditUserContainer,
} from "../containers";
import { auth } from "../firebase";

interface DataProps {
  userInfo: any;
}

export default function EditUserPage({ userInfo }: DataProps) {
  // console.log(auth.currentUser);

  return (
    <>
      <NavbarContainer background="#F4FAF4" />
      <EditUserContainer userInfo={userInfo} />
      <FooterContainer />
    </>
  );
}
