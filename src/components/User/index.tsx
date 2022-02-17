import React from "react";

import {
  Container,
  ProfileSrc,
  ProfilePlaceholder,
  Section,
  Tabs,
  Tab,
  Table,
} from "./styles/user";

type Props = {
  background?: string;
  profileImageUrl?: string;
  children?: React.ReactNode;
  src?: any;
};

type ImageProps = {
  src?: any;
  alt?: any;
  imageUrl?: any;
  imageSource?: any;
  children?: React.ReactNode;
};

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: any;
  onBlur?: any;
  value?: string | number;
  title?: string;
  setShowItems?: any;
};

export default function User({ background, children, ...restProps }: Props) {
  return (
    <Container background={background} {...restProps}>
      {children}
    </Container>
  );
}

// Use BannerPlaceholder and BannerSrc from Create Club

User.ProfilePlaceholder = function UserProfilePlaceholder({
  profileImageUrl,
  children,
  ...restProps
}: Props) {
  if (profileImageUrl) {
    return <User.ProfileSrc profileImageUrl={profileImageUrl} />;
  } else {
    return <ProfilePlaceholder {...restProps}></ProfilePlaceholder>;
  }
};

User.ProfileSrc = function UserProfileSrc({
  profileImageUrl,
  children,
  ...restProps
}: Props) {
  return (
    <ProfileSrc {...restProps}>
      <img src={profileImageUrl} alt="Profile" />
    </ProfileSrc>
  );
};

User.Section = function UserSection({ children, ...restProps }: Props) {
  return <Section {...restProps}>{children}</Section>;
};

User.Tabs = function UserTabs({ children, ...restProps }: Props) {
  return <Tabs {...restProps}>{children}</Tabs>;
};

User.Tab = function UserTab({ onClick, children, ...restProps }: ButtonProps) {
  return (
    <Tab onClick={onClick} {...restProps}>
      {children}
    </Tab>
  );
};

User.Table = function UserTable({ children, ...restProps }: Props) {
  return <Table {...restProps}>{children}</Table>;
};
