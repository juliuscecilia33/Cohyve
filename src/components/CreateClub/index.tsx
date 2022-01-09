import React from "react";

import {
  Container,
  Hero,
  Heading,
  PreviewText,
  ImageBanner,
  InfoContainer,
  Info,
  BasicInfo,
  ProfilePic,
  InfoText,
  Buttons,
  ButtonsAndLinks,
  Description,
  Name,
  SchoolAndLocation,
  Links,
  Icon,
  Stats,
  FollowersAndMembers,
  Partners,
  FollowersAndMembersText,
  Section,
  Inputs,
  HalfInput,
  LargeInput,
  QuarterInput,
  SmInputs,
  DropdownContainer,
  Dropdown,
  DropdownItems,
  DropdownItem,
  SearchInput,
  SearchContainer,
  SearchItems,
  SearchItem
} from "./styles/createClub";

type Props = {
  children?: React.ReactNode;
  name?: string;
  year?: any;
  school?: string;
  location?: string;
  type?: string;
  placeholder?: string;
  onChange?: any;
  value?: any;
  src?: any;
  imageUrl?: any;
  profileImageUrl?: any;
  title?: string;
  onClick?: any;
  showItems?: boolean;
  onBlur?: any;
};

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: any;
  onBlur?: any;
  value?: string;
  title?: string;
  setShowItems?: any;
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
  return <PreviewText {...restProps}>Preview</PreviewText>;
};

CreateClub.ImageBanner = function CreateClubImageBanner({
  imageUrl,
  children,
  ...restProps
}: Props) {
  return (
    <ImageBanner imageUrl={imageUrl} {...restProps}>
      {children}
    </ImageBanner>
  );
};

CreateClub.InfoContainer = function CreateClubInfoContainer({
  children,
  ...restProps
}: Props) {
  return <InfoContainer {...restProps}>{children}</InfoContainer>;
};

CreateClub.Info = function CreateClubInfo({ children, ...restProps }: Props) {
  return <Info {...restProps}>{children}</Info>;
};

CreateClub.BasicInfo = function CreateClubBasicInfo({
  children,
  ...restProps
}: Props) {
  return <BasicInfo {...restProps}>{children}</BasicInfo>;
};

CreateClub.ProfilePic = function CreateClubProfilePic({
  profileImageUrl,
  children,
  ...restProps
}: Props) {
  return (
    <ProfilePic profileImageUrl={profileImageUrl} {...restProps}>
      {children}
    </ProfilePic>
  );
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
      <p>
        {school} | {location}
      </p>
    </SchoolAndLocation>
  );
};

CreateClub.ButtonsAndLinks = function CreateClubButtonsAndLinks({
  children,
  ...restProps
}: Props) {
  return <ButtonsAndLinks {...restProps}>{children}</ButtonsAndLinks>;
};

CreateClub.Buttons = function CreateClubButtons({
  children,
  ...restProps
}: Props) {
  return <Buttons {...restProps}>{children}</Buttons>;
};

CreateClub.Links = function CreateClubLinks({ children, ...restProps }: Props) {
  return <Links {...restProps}>{children}</Links>;
};

CreateClub.Icon = function CreateClubIcon({ children, ...restProps }: Props) {
  return <Icon {...restProps}>{children}</Icon>;
};

CreateClub.Stats = function CreateClubStats({ children, ...restProps }: Props) {
  return <Stats {...restProps}>{children}</Stats>;
};

CreateClub.FollowersAndMembers = function CreateClubFollowersAndMembers({
  children,
  ...restProps
}: Props) {
  return <FollowersAndMembers {...restProps}>{children}</FollowersAndMembers>;
};

CreateClub.FollowersAndMembersText =
  function CreateClubFollowersAndMembersText({
    children,
    ...restProps
  }: Props) {
    return (
      <FollowersAndMembersText {...restProps}>
        {children}
      </FollowersAndMembersText>
    );
  };

CreateClub.Partners = function CreateClubPartners({
  children,
  ...restProps
}: Props) {
  return (
    <Partners {...restProps}>
      <h3>Partners</h3>
    </Partners>
  );
};

CreateClub.Section = function CreateClubSection({
  children,
  ...restProps
}: Props) {
  return <Section {...restProps}>{children}</Section>;
};

CreateClub.SearchContainer = function CreateClubSearchContainer({
  children,
  ...restProps
}: Props) {
  return <SearchContainer {...restProps}>{children}</SearchContainer>;
};

CreateClub.SearchInput = function CreateClubSearchInput({
  title,
  name,
  onChange,
  placeholder,
  value,
  type,
  children,
  ...restProps
}: Props) {
  return (
    <SearchInput {...restProps}>
      <p>{title}</p>
      <input
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </SearchInput>
  );
};

CreateClub.SearchItems = function CreateClubSearchItems({
  onBlur,
  showItems,
  children,
  ...restProps
}: Props) {
  return (
    <SearchItems {...restProps}>
      {children}
    </SearchItems>
  );
};

CreateClub.SearchItem = function CreateClubSearchItem({
  onClick,
  children,
  ...restProps
}: ButtonProps) {
  return (
    <SearchItem onClick={onClick} {...restProps}>
      {children}
    </SearchItem>
  );
};

CreateClub.DropdownContainer = function CreateClubDropdownContainer({
  children,
  ...restProps
}: Props) {
  return <DropdownContainer {...restProps}>{children}</DropdownContainer>;
};

CreateClub.Dropdown = function CreateClubDropdown({
  onBlur,
  value,
  title,
  onClick,
  children,
  ...restProps
}: ButtonProps) {
  return (
    <Dropdown {...restProps}>
      <p>{title}</p>
      <button onBlur={onBlur} onClick={onClick}>
        {value}
      </button>
    </Dropdown>
  );
};

CreateClub.DropdownItems = function CreateClubDropdownItems({
  onBlur,
  showItems,
  children,
  ...restProps
}: Props) {
  return (
    <DropdownItems onBlur={onBlur} showItems={showItems} {...restProps}>
      {children}
    </DropdownItems>
  );
};

CreateClub.DropdownItem = function CreateClubDropdownItem({
  onClick,
  children,
  ...restProps
}: ButtonProps) {
  return (
    <DropdownItem onClick={onClick} {...restProps}>
      {children}
    </DropdownItem>
  );
};

CreateClub.Inputs = function CreateClubInputs({
  children,
  ...restProps
}: Props) {
  return <Inputs {...restProps}>{children}</Inputs>;
};

CreateClub.SmInputs = function CreateClubSmInputs({
  children,
  ...restProps
}: Props) {
  return <SmInputs {...restProps}>{children}</SmInputs>;
};

CreateClub.HalfInput = function CreateClubHalfInput({
  title,
  name,
  onChange,
  placeholder,
  value,
  type,
  children,
  ...restProps
}: Props) {
  return (
    <HalfInput {...restProps}>
      <p>{title}</p>
      <input
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </HalfInput>
  );
};

CreateClub.LargeInput = function CreateClubLargeInput({
  title,
  name,
  onChange,
  placeholder,
  value,
  type,
  children,
  ...restProps
}: Props) {
  return (
    <LargeInput {...restProps}>
      <p>{title}</p>
      <textarea
        name={name}
        // type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </LargeInput>
  );
};

CreateClub.QuarterInput = function CreateClubQuarterInput({
  title,
  name,
  onChange,
  placeholder,
  value,
  type,
  children,
  ...restProps
}: Props) {
  return (
    <QuarterInput {...restProps}>
      <p>{title}</p>
      <input
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </QuarterInput>
  );
};
