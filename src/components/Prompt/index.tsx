import React from "react";

import { Container, Top, Bottom, Window } from "./styles/prompt";
import { ActionButton } from "../../components";

type Props = {
  background?: string;
  children?: React.ReactNode;
  src?: any;
  handleOK?: any;
  handleCancel?: any;
};

export default function Prompt({ children, ...restProps }: Props) {
  return <Container {...restProps}>{children}</Container>;
}

Prompt.Window = function PromptWindow({ children, ...restProps }: Props) {
  return <Window {...restProps}>{children}</Window>;
};

Prompt.Top = function PromptTop({ children, ...restProps }: Props) {
  return (
    <Top {...restProps}>
      <h2>
        This page contains <span>unsaved</span> changes. Do you still wish to
        leave this page?
      </h2>
    </Top>
  );
};

Prompt.Bottom = function PromptBottom({
  handleOK,
  handleCancel,
  children,
  ...restProps
}: Props) {
  return (
    <Bottom {...restProps}>
      <ActionButton
        color="#FAFCFA"
        onClick={handleOK}
        background="linear-gradient(94.39deg, #58a4b0 8.09%, #afd5aa 93.12%), #284b63;"
        disabled={false}
      >
        Yes
      </ActionButton>
      <ActionButton.Text
        color="#284B63"
        hoverColor="#AFD5AA"
        onClick={handleCancel}
        disabled={false}
      ></ActionButton.Text>
    </Bottom>
  );
};
