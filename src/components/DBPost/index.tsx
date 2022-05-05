import React from "react";

import { Container } from "./styles/dbPost";

type Props = {
  children?: React.ReactNode;
  isPinned?: boolean;
};

export default function DBPost({ isPinned, children, ...restProps }: Props) {
  return <Container {...restProps}>{children}</Container>;
}
