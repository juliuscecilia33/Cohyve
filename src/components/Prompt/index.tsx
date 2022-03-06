import React from "react";

import { Container, Top, Bottom, Window } from "./styles/prompt";
import { ActionButton } from "../../components";

type Props = {
  background?: string;
  children?: React.ReactNode;
  src?: any;
};

export default function Prompt({ children, ...restProps }: Props) {
  return <Container {...restProps}>{children}</Container>;
}

Prompt.Window = function PromptWindow({ children, ...restProps }: Props) {
  return <Window {...restProps}>{children}</Window>;
};

Prompt.Top = function PromptTop({ children, ...restProps }: Props) {
  return <Top {...restProps}>{children}</Top>;
};

Prompt.Bottom = function PromptBottom({ children, ...restProps }: Props) {
  return <Bottom {...restProps}>{children}</Bottom>;
};
