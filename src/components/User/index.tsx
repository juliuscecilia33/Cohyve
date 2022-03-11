import React from "react";

import {
  Container,
  ProfileSrc,
  ContentSection,
  Tabs,
  Tab,
  Table,
  Label,
  Items,
  ClubName,
  ClubProfileSrc,
  Category,
  Followers,
  Role,
  EditProfile,
  ProfileInfo,
  ProfileContainer,
  ButtonContainer,
  BannerSrc,
  EditBanner,
} from "./styles/user";

import { ActionButton } from "../../components";

import VerifiedIcon from "../Images/VerifiedIcon.png";

type Props = {
  background?: string;
  profileImageUrl?: string;
  children?: React.ReactNode;
  name?: string;
  school?: string;
  description?: string;
  src?: any;
  verified?: boolean;
  editProfile?: boolean;
  editBanner?: boolean;
  onClick?: any;
  username?: string;
};

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: any;
  onBlur?: any;
  value?: string | number;
  title?: string;
  setShowItems?: any;
  selected?: boolean;
};

export default function User({ children, ...restProps }: Props) {
  return <Container {...restProps}>{children}</Container>;
}

User.ProfileContainer = function UserProfileContainer({
  onClick,
  children,
  ...restProps
}: Props) {
  return (
    <ProfileContainer {...restProps}>
      <span>{children}</span>
    </ProfileContainer>
  );
};

User.ProfileInfo = function UserProfileInfo({
  username,
  school,
  name,
  description,
  children,
  ...restProps
}: Props) {
  return (
    <ProfileInfo {...restProps}>
      <div>
        <h3>{name}</h3>
        <button>
          <p>{school}</p>
        </button>
      </div>
      <h2>{username}</h2>
      <p>{description}</p>
    </ProfileInfo>
  );
};

User.BannerSrc = function UserBannerSrc({
  editBanner,
  onClick,
  src,
  children,
  ...restProps
}: Props) {
  return (
    <BannerSrc {...restProps}>
      <img src={src} alt="Banner" />
      {editBanner && <User.EditBanner onClick={onClick} />}
      {children}
    </BannerSrc>
  );
};

User.ButtonContainer = function UserButtonContainer({
  onClick,
  children,
  ...restProps
}: Props) {
  return (
    <ButtonContainer onClick={onClick} {...restProps}>
      Edit Profile
    </ButtonContainer>
  );
};

User.ProfileSrc = function UserProfileSrc({
  editProfile,
  onClick,
  profileImageUrl,
  children,
  ...restProps
}: Props) {
  return (
    <ProfileSrc {...restProps}>
      <img src={profileImageUrl} alt="Profile" />
      {editProfile && <User.EditProfile onClick={onClick} />}
    </ProfileSrc>
  );
};

User.EditProfile = function UserEditProfile({
  onClick,
  children,
  ...restProps
}: ButtonProps) {
  return (
    <EditProfile onClick={onClick} {...restProps}>
      <i className="fa-solid fa-plus"></i>
    </EditProfile>
  );
};

User.EditBanner = function UserEditBanner({
  onClick,
  children,
  ...restProps
}: ButtonProps) {
  return (
    <EditBanner onClick={onClick} {...restProps}>
      <i className="fa-solid fa-pencil"></i>
    </EditBanner>
  );
};

User.ContentSection = function UserContentSection({
  children,
  ...restProps
}: Props) {
  return <ContentSection {...restProps}>{children}</ContentSection>;
};

User.Tabs = function UserTabs({ children, ...restProps }: Props) {
  return <Tabs {...restProps}>{children}</Tabs>;
};

User.Tab = function UserTab({
  selected,
  onClick,
  children,
  ...restProps
}: ButtonProps) {
  return (
    <Tab selected={selected} onClick={onClick} {...restProps}>
      {children}
    </Tab>
  );
};

User.Table = function UserTable({ children, ...restProps }: Props) {
  return <Table {...restProps}>{children}</Table>;
};

User.Label = function UserLabel({ children, ...restProps }: Props) {
  return <Label {...restProps}>{children}</Label>;
};

User.Items = function UserItems({ background, children, ...restProps }: Props) {
  return (
    <Items background={background} {...restProps}>
      {children}
    </Items>
  );
};

User.ClubName = function UserClubName({
  profileImageUrl,
  verified,
  children,
  ...restProps
}: Props) {
  return (
    <ClubName {...restProps}>
      <User.ClubProfileSrc profileImageUrl={profileImageUrl} />
      <h3>{children}</h3>
      {verified && <img src={VerifiedIcon} alt="Verified Icon" />}
    </ClubName>
  );
};

User.ClubProfileSrc = function UserClubProfileSrc({
  profileImageUrl,
  children,
  ...restProps
}: Props) {
  return (
    <ClubProfileSrc {...restProps}>
      <img src={profileImageUrl} alt="Profile" />
    </ClubProfileSrc>
  );
};

User.Category = function UserCategory({ children, ...restProps }: Props) {
  return <Category {...restProps}>{children}</Category>;
};

User.Followers = function UserFollowers({ children, ...restProps }: Props) {
  return <Followers {...restProps}>{children}</Followers>;
};

User.Role = function UserRole({ children, ...restProps }: Props) {
  return <Role {...restProps}>{children}</Role>;
};
