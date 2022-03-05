import React from "react";

import { Container, Small, Medium, Circle, Text } from "./styles/actionButton";

type Props = {
  children?: React.ReactNode;
  background?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  color?: string;
  hoverColor?: string;
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

ActionButton.Circle = function ActionButtonCircle({
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
        <Circle
          disabled
          background={background}
          color={color}
          onClick={onClick}
          {...restProps}
        >
          {children}
        </Circle>
      ) : (
        <Circle
          background={background}
          color={color}
          onClick={onClick}
          {...restProps}
        >
          {children}
        </Circle>
      )}
    </>
  );
};

ActionButton.Text = function ActionButtonText({
  hoverColor,
  color,
  disabled,
  onClick,
  children,
  ...restProps
}: Props) {
  return (
    <>
      {disabled ? (
        <Text
          disabled
          color={color}
          hoverColor={hoverColor}
          onClick={onClick}
          {...restProps}
        >
          {children}
        </Text>
      ) : (
        <Text
          color={color}
          hoverColor={hoverColor}
          onClick={onClick}
          {...restProps}
        >
          {children}
        </Text>
      )}
    </>
  );
};
