import React from "react";
import { NavbarContainer, FooterContainer, UserContainer } from "../containers";

interface DataProps {
  userInfo: any;
}

export default function UserPage({ userInfo }: DataProps) {
  return (
    <>
      <NavbarContainer background="#F4FAF4" />
      <UserContainer userInfo={userInfo} />
      <FooterContainer />
    </>
  );
}
