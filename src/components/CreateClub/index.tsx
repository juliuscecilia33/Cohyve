import React from "react";

import {
  Container,
  Hero,
  Heading,
  PreviewText,
  Banner,
  Info,
  ProfilePic,
  InfoText,
  Description,
  Name,
  SchoolAndLocation,
} from "./styles/createClub";

type Props = {
  children?: React.ReactNode;
  name?: string;
  year?: any;
  school?: string;
  location?: string;
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

CreateClub.InfoText = function CreateClubInfoText({
  children,
  ...restProps
}: Props) {
  return <InfoText {...restProps}>{children}</InfoText>;
};

CreateClub.Description = function CreateClubDescription({
  children,
  ...restProps
}: Props) {
  return <Description {...restProps}>{children}</Description>;
};

CreateClub.Name = function CreateClubName({
  name,
  year,
  children,
  ...restProps
}: Props) {
  return (
    <Name {...restProps}>
      <h1>{name}</h1>
      <p>{year}</p>
    </Name>
  );
};

CreateClub.SchoolAndLocation = function CreateClubSchoolAndLocation({
  school,
  location,
  children,
  ...restProps
}: Props) {
  return (
    <SchoolAndLocation {...restProps}>
      <p>{school}</p>
      <p>{location}</p>
    </SchoolAndLocation>
  );
};
