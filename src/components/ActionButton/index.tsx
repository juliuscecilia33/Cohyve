import React from "react";

import { Container, Small } from "./styles/actionButton";

type Props = {
  children?: React.ReactNode;
  background?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  color?: string;
};

export default function ActionButton({
  color,
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
          color={color}
          onClick={onClick}
          {...restProps}
        >
          {children}
        </Container>
      ) : (
        <Container
          background={background}
          color={color}
          onClick={onClick}
          {...restProps}
        >
          {children}
        </Container>
      )}
    </>
  );
}

ActionButton.Small = function ActionButtonSmall({
  color,
  disabled,
  background,
  onClick,
  children,
  ...restProps
}: Props) {
  return (
    <Small {...restProps}>
      <>
        {disabled ? (
          <Container
            disabled
            background={background}
            color={color}
            onClick={onClick}
            {...restProps}
          >
            {children}
          </Container>
        ) : (
          <Container
            background={background}
            color={color}
            onClick={onClick}
            {...restProps}
          >
            {children}
          </Container>
        )}
      </>
    </Small>
  );
};
