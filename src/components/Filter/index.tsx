import React from "react";

import { Container } from "./styles/filter";

type Props = {
  children?: React.ReactNode;
};

export default function Filter({ children, ...restProps }: Props) {
  return <Container {...restProps}>{children}</Container>;
}

Filter.Members = function FilterMembers({ children, ...restProps }: Props) {
  return <Members {...restProps}>{children}</Members>;
};
