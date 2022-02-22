import React from "react";

import { Container, Small, Medium } from "./styles/actionButton";

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

ActionButton.Medium = function ActionButtonMedium({
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
        <Medium
          disabled
          background={background}
          color={color}
          onClick={onClick}
          {...restProps}
        >
          {children}
        </Medium>
      ) : (
        <Medium
          background={background}
          color={color}
          onClick={onClick}
          {...restProps}
        >
          {children}
        </Medium>
      )}
    </>
  );
};

ActionButton.Small = function ActionButtonSmall({
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
        <Small
          disabled
          background={background}
          color={color}
          onClick={onClick}
          {...restProps}
        >
          {children}
        </Small>
      ) : (
        <Small
          background={background}
          color={color}
          onClick={onClick}
          {...restProps}
        >
          {children}
        </Small>
      )}
    </>
  );
};
