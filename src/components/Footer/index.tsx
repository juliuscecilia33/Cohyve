import React from "react";

import {
  Container,
  ContainerMed,
  Logo,
  Tabs,
  Tab,
  TabHeading,
} from "./styles/footer";

type Props = {
  children?: React.ReactNode;
  src?: any;
};

export default function Footer({ children, ...restProps }: Props) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.ContainerMed = function FooterContainerMed({
  children,
  ...restProps
}: Props) {
  return <ContainerMed {...restProps}>{children}</ContainerMed>;
};

Footer.Logo = function FooterLogo({ src, children, ...restProps }: Props) {
  return (
    <Logo src={src} {...restProps}>
      {children}
    </Logo>
  );
};

Footer.Tabs = function FooterTabs({ children, ...restProps }: Props) {
  return <Tabs {...restProps}>{children}</Tabs>;
};

Footer.TabHeading = function FooterTabHeading({
  children,
  ...restProps
}: Props) {
  return <TabHeading {...restProps}>{children}</TabHeading>;
};

Footer.Tab = function FooterTab({ children, ...restProps }: Props) {
  return <Tab {...restProps}>{children}</Tab>;
};
