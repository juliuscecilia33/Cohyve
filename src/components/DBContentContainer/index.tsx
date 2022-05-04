import React from "react";

import { Container, Heading } from "./styles/dbContentContainer";

type Props = {
  children?: React.ReactNode;
};

export default function DBContentContainer({ children, ...restProps }: Props) {
  return <Container {...restProps}>{children}</Container>;
}

DBContentContainer.Heading = function DBContentContainerHeading({
  children,
  ...restProps
}: Props) {
  return <Heading {...restProps}>{children}</Heading>;
};
