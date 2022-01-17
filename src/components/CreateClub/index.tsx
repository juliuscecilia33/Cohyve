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
  SchoolLocationCategory,
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
  ImageUpload,
  SmInputs,
  DropdownContainer,
  Dropdown,
  DropdownItems,
  DropdownItem,
  SearchInput,
  SearchContainer,
  SearchItems,
  ButtonContainer,
  SearchItem,
  ImageInputs,
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
  maxLength?: any;
  pattern?: string;
  required?: boolean;
  category?: string;
  showMax?: boolean;
  handleChange?: any;
};

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: any;
  onBlur?: any;
  value?: string | number;
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

CreateClub.SchoolLocationCategory = function CreateClubSchoolLocationCategory({
  category,
  school,
  location,
  children,
  ...restProps
}: Props) {
  return (
    <SchoolLocationCategory {...restProps}>
      <p>
        {school} | {location} | {category}
      </p>
    </SchoolLocationCategory>
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
        required
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
  return <SearchItems {...restProps}>{children}</SearchItems>;
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
  required,
  pattern,
  maxLength,
  title,
  name,
  onChange,
  placeholder,
  value,
  type,
  children,
  showMax,
  ...restProps
}: Props) {
  return (
    <HalfInput {...restProps}>
      <p>{title}</p>
      {required ? (
        <input
          name={name}
          type={type}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          maxLength={maxLength}
          pattern={pattern}
          required
        />
      ) : (
        <input
          name={name}
          type={type}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          maxLength={maxLength}
          pattern={pattern}
        />
      )}
      {showMax && (
        <div>
          <p>
            {value.trim().length}/{maxLength}
          </p>
        </div>
      )}
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
  maxLength,
  ...restProps
}: Props) {
  return (
    <LargeInput {...restProps}>
      <p>{title}</p>
      <textarea
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
      />
      <div>
        <p>
          {value.trim().length}/{maxLength}
        </p>
      </div>
    </LargeInput>
  );
};

CreateClub.ImageUpload = function CreateClubImageUpload({
  handleChange,
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
    <ImageUpload {...restProps}>
      <p>{title}</p>
      <CreateClub.ImageInputs handleChange={handleChange}>
        Upload
      </CreateClub.ImageInputs>
    </ImageUpload>
  );
};

CreateClub.ImageInputs = function CreateClubImageInputs({
  handleChange,
  children,
  ...restProps
}: Props) {
  return (
    <ImageInputs {...restProps}>
      <input
        type="file"
        name="file-1[]"
        id="file-1"
        data-multiple-caption="{count} files selected"
        multiple
        onChange={handleChange}
      />
      <label htmlFor="file-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="17"
          viewBox="0 0 20 17"
        >
          <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z" />
        </svg>
        {children}
      </label>
    </ImageInputs>
  );
};

CreateClub.ButtonContainer = function CreateClubButtonContainer({
  children,
  ...restProps
}: Props) {
  return <ButtonContainer {...restProps}>{children}</ButtonContainer>;
};
