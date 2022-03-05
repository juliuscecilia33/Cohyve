import React from "react";

import { Container, Top, Bottom } from "./styles/prompt";

type Props = {
  background?: string;
  children?: React.ReactNode;
  src?: any;
};

export default function Prompt({ children, ...restProps }: Props) {
  return <Container {...restProps}>{children}</Container>;
}

Prompt.Top = function PromptContainerMed({ children, ...restProps }: Props) {
  return <Top {...restProps}>{children}</Top>;
};

Prompt.Bottom = function PromptContainerMed({ children, ...restProps }: Props) {
  return <Bottom {...restProps}>{children}</Bottom>;
};
