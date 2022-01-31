import React from "react";

import { Container, Heading } from "./styles/hero";

type Props = {
  children?: React.ReactNode;
  padding?: string;
};

export default function Hero({ padding, children, ...restProps }: Props) {
  return (
    <Container padding={padding} {...restProps}>
      {children}
    </Container>
  );
}

Hero.Heading = function HeroHeading({ children, ...restProps }: Props) {
  return <Heading {...restProps}>{children}</Heading>;
};
