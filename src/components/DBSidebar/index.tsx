import React from "react";

import {
  Container,
  Logo,
  Content,
  Tabs,
  Tab,
  Button,
} from "./styles/dbSidebar";

type Props = {
  children?: React.ReactNode;
  src?: any;
};

export default function DBSidebar({ children, ...restProps }: Props) {
  return <Container {...restProps}>{children}</Container>;
}

DBSidebar.Content = function DBSidebarContent({
  children,
  ...restProps
}: Props) {
  return <Content {...restProps}>{children}</Content>;
};

DBSidebar.Logo = function DBSidebarLogo({ children, ...restProps }: Props) {
  return <Logo {...restProps}>{children}</Logo>;
};

DBSidebar.Tabs = function DBSidebarTabs({ children, ...restProps }: Props) {
  return <Tabs {...restProps}>{children}</Tabs>;
};

DBSidebar.Tab = function DBSidebarTab({ children, ...restProps }: Props) {
  return <Tab {...restProps}>{children}</Tab>;
};

DBSidebar.Button = function DBSidebarButton({ children, ...restProps }: Props) {
  return <Button {...restProps}>{children}</Button>;
};
