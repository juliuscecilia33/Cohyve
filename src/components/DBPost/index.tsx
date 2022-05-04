import React from "react";

import { Container } from "./styles/dbPost";

type Props = {
  children?: React.ReactNode;
};

export default function DBPost({ children, ...restProps }: Props) {
  return <Container {...restProps}>{children}</Container>;
}
