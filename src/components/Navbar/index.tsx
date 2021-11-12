import React from "react";

import {
  Container,
  ContainerMed,
  Logo,
  Tabs,
  Tab,
  Border,
} from "./styles/navbar";

type Props = {
  background?: string;
  children?: React.ReactNode;
  src?: any;
};

export default function Navbar({ background, children, ...restProps }: Props) {
  return (
    <Container background={background} {...restProps}>
      {children}
    </Container>
  );
}

Navbar.ContainerMed = function NavbarContainerMed({
  children,
  ...restProps
}: Props) {
  return <ContainerMed {...restProps}>{children}</ContainerMed>;
};

Navbar.Logo = function NavbarLogo({ src, children, ...restProps }: Props) {
  return (
    <Logo src={src} {...restProps}>
      {children}
    </Logo>
  );
};

Navbar.Border = function NavbarBorder({ children, ...restProps }: Props) {
  return <Border {...restProps}>{children}</Border>;
};

Navbar.Tabs = function NavbarTabs({ children, ...restProps }: Props) {
  return <Tabs {...restProps}>{children}</Tabs>;
};

Navbar.Tab = function NavbarTab({ children, ...restProps }: Props) {
  return <Tab {...restProps}>{children}</Tab>;
};
