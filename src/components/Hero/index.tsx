import React from "react";

import {
  Container,
  Heading,
  CreateClub,
  Description,
  User,
} from "./styles/hero";

type Props = {
  children?: React.ReactNode;
};

export default function Hero({ children, ...restProps }: Props) {
  return <Container {...restProps}>{children}</Container>;
}

Hero.Heading = function HeroHeading({ children, ...restProps }: Props) {
  return <Heading {...restProps}>{children}</Heading>;
};

Hero.CreateClub = function HeroCreateClub({ children, ...restProps }: Props) {
  return <CreateClub {...restProps}>{children}</CreateClub>;
};

Hero.User = function HeroUser({ children, ...restProps }: Props) {
  return <User {...restProps}>{children}</User>;
};

Hero.Description = function HeroDescription({ children, ...restProps }: Props) {
  return <Description {...restProps}>{children}</Description>;
};
