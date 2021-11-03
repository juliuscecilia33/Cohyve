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
} from "./styles/login";

type Props = {
  children?: React.ReactNode;
  title?: string;
  type?: string;
  setValue?: any;
  value?: any;
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

Login.PromoImage = function LoginPromoImage({ children, ...restProps }: Props) {
  return <PromoImage {...restProps}>{children}</PromoImage>;
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

Login.Heading = function LoginHeading({ children, ...restProps }: Props) {
  return <Heading {...restProps}>{children}</Heading>;
};

Login.Inputs = function LoginInputs({ children, ...restProps }: Props) {
  return <Inputs {...restProps}>{children}</Inputs>;
};

Login.Input = function LoginInput({
  setValue,
  value,
  title,
  type,
  children,
  ...restProps
}: Props) {
  return (
    <Input {...restProps}>
      <p>{title}</p>
      <input
        onChange={(event: any) => setValue(event.target.value)}
        value={value}
        placeholder={title}
      />
    </Input>
  );
};
