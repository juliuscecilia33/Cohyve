import React from "react";

import { Container } from "./styles/actionButton";

type Props = {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function ActionButton({
  onClick,
  children,
  ...restProps
}: Props) {
  return (
    <Container onClick={onClick} {...restProps}>
      {children}
    </Container>
  );
}
