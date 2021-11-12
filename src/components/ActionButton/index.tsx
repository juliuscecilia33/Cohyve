import React from "react";

import { Container } from "./styles/actionButton";

type Props = {
  children?: React.ReactNode;
  background?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function ActionButton({
  background,
  onClick,
  children,
  ...restProps
}: Props) {
  return (
    <Container background={background} onClick={onClick} {...restProps}>
      {children}
    </Container>
  );
}
