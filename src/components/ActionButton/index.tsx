import React from "react";

import { Container } from "./styles/actionButton";

type Props = {
  children?: React.ReactNode;
};

export default function ActionButton({ children, ...restProps }: Props) {
  return <Container {...restProps}>{children}</Container>;
}
