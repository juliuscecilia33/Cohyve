import React from "react";

import {
  Container,
  Hero,
  Heading,
  PreviewText,
  Banner,
  Info,
  ProfilePic,
} from "./styles/createClub";

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

export default function CreateClub({ children, ...restProps }: Props) {
  return <Container {...restProps}>{children}</Container>;
}

CreateClub.Hero = function CreateClubHero({ children, ...restProps }: Props) {
  return <Hero {...restProps}>{children}</Hero>;
};

CreateClub.Heading = function CreateClubHeading({
  children,
  ...restProps
}: Props) {
  return <Heading {...restProps}>{children}</Heading>;
};

CreateClub.PreviewText = function CreateClubPreviewText({
  children,
  ...restProps
}: Props) {
  return <PreviewText {...restProps}>{children}</PreviewText>;
};

CreateClub.Banner = function CreateClubBanner({
  children,
  ...restProps
}: Props) {
  return <Banner {...restProps}>{children}</Banner>;
};

CreateClub.Info = function CreateClubInfo({ children, ...restProps }: Props) {
  return <Info {...restProps}>{children}</Info>;
};

CreateClub.ProfilePic = function CreateClubProfilePic({
  children,
  ...restProps
}: Props) {
  return <ProfilePic {...restProps}>{children}</ProfilePic>;
};
