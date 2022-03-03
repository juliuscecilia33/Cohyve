import React from "react";

import { Container } from "./styles/prompt";

type Props = {
  background?: string;
  children?: React.ReactNode;
  src?: any;
};

export default function Prompt({ children, ...restProps }: Props) {
  return <Container {...restProps}>{children}</Container>;
}

Prompt.ContainerMed = function NavbarContainerMed({
  children,
  ...restProps
}: Props) {
  return <ContainerMed {...restProps}>{children}</ContainerMed>;
};
