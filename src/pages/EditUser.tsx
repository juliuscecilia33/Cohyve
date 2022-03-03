import React, { useState } from "react";
import {
  NavbarContainer,
  FooterContainer,
  EditUserContainer,
  RouterPrompt,
} from "../containers";
import { auth } from "../firebase";

interface DataProps {
  userInfo: any;
}

export default function EditUserPage({ userInfo }: DataProps) {
  // console.log(auth.currentUser);
  const [showPrompt, setShowPrompt] = useState(false);

  return (
    <>
      <RouterPrompt
        when={showPrompt}
        title="Leave this page"
        cancelText="Cancel"
        okText="Confirm"
        onOK={() => true}
        onCancel={() => false}
      />
      <NavbarContainer background="#F4FAF4" />
      <EditUserContainer
        showPrompt={showPrompt}
        setShowPrompt={setShowPrompt}
        userInfo={userInfo}
      />
      <FooterContainer />
    </>
  );
}
