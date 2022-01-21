import React from "react";

import { Container, Heading } from "./styles/hero";

type Props = {
  children?: React.ReactNode;
};

export default function Hero({ children, ...restProps }: Props) {
  return <Container {...restProps}>{children}</Container>;
}

Hero.Heading = function HerobHeading({ children, ...restProps }: Props) {
  return <Heading {...restProps}>{children}</Heading>;
};
