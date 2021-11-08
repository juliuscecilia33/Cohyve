import React from "react";

import {
  Container,
  ContainerMed,
  Promo,
  PromoHeader,
  PromoImage,
  PromoText,
  Heading,
  Input,
  Inputs,
  Message,
} from "./styles/login";

type Props = {
  children?: React.ReactNode;
  type?: string;
  name?: string;
  placeholder?: string;
  onChange?: any;
  value?: any;
  src?: any;
  color?: string;
};

export default function Login({ children, ...restProps }: Props) {
  return <Container {...restProps}>{children}</Container>;
}

Login.Promo = function LoginPromo({ children, ...restProps }: Props) {
  return <Promo {...restProps}>{children}</Promo>;
};

Login.PromoHeader = function LoginPromoHeader({
  children,
  ...restProps
}: Props) {
  return <PromoHeader {...restProps}>{children}</PromoHeader>;
};

Login.PromoImage = function LoginPromoImage({
  src,
  children,
  ...restProps
}: Props) {
  return (
    <PromoImage src={src} {...restProps}>
      {children}
    </PromoImage>
  );
};

Login.PromoText = function LoginPromoText({ children, ...restProps }: Props) {
  return <PromoText {...restProps}>{children}</PromoText>;
};

Login.ContainerMed = function LoginContainerMed({
  children,
  ...restProps
}: Props) {
  return <ContainerMed {...restProps}>{children}</ContainerMed>;
};

Login.Heading = function LoginHeading({
  color,
  children,
  ...restProps
}: Props) {
  return (
    <Heading color={color} {...restProps}>
      {children}
    </Heading>
  );
};

Login.Inputs = function LoginInputs({ children, ...restProps }: Props) {
  return <Inputs {...restProps}>{children}</Inputs>;
};

Login.Input = function LoginInput({
  name,
  onChange,
  placeholder,
  value,
  type,
  children,
  ...restProps
}: Props) {
  return (
    <Input {...restProps}>
      <p>{name}</p>
      <input
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </Input>
  );
};

Login.Message = function LoginMessage({ children, ...restProps }: Props) {
  return (
    <Message {...restProps}>
      <p>{children}</p>
    </Message>
  );
};
