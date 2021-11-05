import React from "react";

import { Container } from "../ActionButton/styles/actionButton";

type Props = {
  children?: React.ReactNode;
};

export default function LinkButton({ children, ...restProps }: Props) {
  return <Container {...restProps}>{children}</Container>;
}
