import React from "react";

import {
  Container,
  ProfileSrc,
  ProfilePlaceholder,
  ClubsSection,
  SchoolSection,
  FollowingSection,
  Tabs,
  Tab,
  Table,
  Labels,
  Label,
  Items,
  Item,
  EditProfile,
  ProfileInfo,
} from "./styles/user";

type Props = {
  background?: string;
  profileImageUrl?: string;
  children?: React.ReactNode;
  name?: string;
  description?: string;
  src?: any;
  onClick?: any;
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

// Use BannerPlaceholder and BannerSrc from Create Club

User.ProfileData = function UserProfileData({
  profileImageUrl,
  children,
  ...restProps
}: Props) {
  if (profileImageUrl) {
    return (
      <User.ProfileData>
        <span>
          <User.ProfileSrc profileImageUrl={profileImageUrl} />
          <User.ProfileInfo />
        </span>
        {children}
      </User.ProfileData>
    );
  } else {
    return (
      <User.ProfileData>
        <span>
          <User.ProfilePlaceholder {...restProps}></User.ProfilePlaceholder>
          <User.ProfileInfo />
        </span>
        {children}
      </User.ProfileData>
    );
  }
};

User.ProfileInfo = function UserProfileInfo({
  name,
  description,
  children,
  ...restProps
}: Props) {
  return (
    <ProfileInfo {...restProps}>
      <h3>{name}</h3>
      <p>{description}</p>
    </ProfileInfo>
  );
};

User.ProfilePlaceholder = function UserProfilePlaceholder({
  onClick,
  children,
  ...restProps
}: Props) {
  return (
    <ProfilePlaceholder {...restProps}>
      <User.EditProfile onClick={onClick} />
    </ProfilePlaceholder>
  );
};

User.ProfileSrc = function UserProfileSrc({
  onClick,
  profileImageUrl,
  children,
  ...restProps
}: Props) {
  return (
    <ProfileSrc {...restProps}>
      <img src={profileImageUrl} alt="Profile" />
      <User.EditProfile onClick={onClick} />
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

User.ClubsSection = function UserClubsSection({
  children,
  ...restProps
}: Props) {
  return <ClubsSection {...restProps}>{children}</ClubsSection>;
};

User.SchoolSection = function UserSchoolSection({
  children,
  ...restProps
}: Props) {
  return <SchoolSection {...restProps}>{children}</SchoolSection>;
};

User.FollowingSection = function UserFollowingSection({
  children,
  ...restProps
}: Props) {
  return <FollowingSection {...restProps}>{children}</FollowingSection>;
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

User.Labels = function UserLabels({ children, ...restProps }: Props) {
  return <Labels {...restProps}>{children}</Labels>;
};

User.Label = function UserLabel({ children, ...restProps }: Props) {
  return <Label {...restProps}>{children}</Label>;
};

User.Items = function UserItems({ children, ...restProps }: Props) {
  return <Items {...restProps}>{children}</Items>;
};

User.Item = function UserItem({ children, ...restProps }: Props) {
  return <Item {...restProps}>{children}</Item>;
};
