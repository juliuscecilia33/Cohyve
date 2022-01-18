import React from "react";

import { Container } from "./styles/actionButton";

type Props = {
  children?: React.ReactNode;
  background?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

export default function ActionButton({
  disabled,
  background,
  onClick,
  children,
  ...restProps
}: Props) {
  return (
    <>
      {disabled ? (
        <Container
          disabled
          background={background}
          onClick={onClick}
          {...restProps}
        >
          {children}
        </Container>
      ) : (
        <Container background={background} onClick={onClick} {...restProps}>
          {children}
        </Container>
      )}
    </>
  );
}
