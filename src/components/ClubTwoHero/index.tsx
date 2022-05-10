import React from "react";

import {
  Container,
  ProfileAndButtons,
  Links,
  Banner,
  Information,
  ClubName,
  ClubDescription,
  FollowersAndMembers,
  ClubDetails,
  ClubDetailsRow,
  ClubDetailsItem,
} from "./styles/clubTwoHero";
import { ActionButton } from "../../components";

type Props = {
  children?: React.ReactNode;
  bannerSrc?: string;
  followClick?: any;
  partnerClick?: any;
  profileSrc?: string;
  followers?: number;
  members?: number;
  school?: string;
  state?: string;
  icon?: string;
  label?: string;
};

export default function ClubTwoHero({ children, ...restProps }: Props) {
  return <Container {...restProps}>{children}</Container>;
}

ClubTwoHero.Banner = function ClubTwoHeroBanner({
  bannerSrc,
  children,
  ...restProps
}: Props) {
  return (
    <Banner {...restProps}>
      <img src={bannerSrc} alt="Banner" />
    </Banner>
  );
};

ClubTwoHero.ProfileAndButtons = function ClubTwoHeroProfileAndButtons({
  followClick,
  partnerClick,
  profileSrc,
  children,
  ...restProps
}: Props) {
  return (
    <ProfileAndButtons {...restProps}>
      <ActionButton
        color="#F0F2EF"
        background="linear-gradient(94.39deg, #58A4B0 8.09%, #AFD5AA 93.12%);"
        onClick={followClick}
      >
        Follow
      </ActionButton>
      <div className="profilePic">
        <img src={profileSrc} alt="Profile" />
      </div>
      <ActionButton
        color="#F0F2EF"
        background="linear-gradient(94.39deg, #ABC9F5 8.09%, #5A5EC5 93.12%);"
        onClick={partnerClick}
      >
        Partner
      </ActionButton>
    </ProfileAndButtons>
  );
};

ClubTwoHero.Links = function ClubTwoHeroLinks({
  children,
  ...restProps
}: Props) {
  return (
    <Links {...restProps}>
      <a
        href="https://www.linkedin.com/in/julius-cecilia/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fas fa-globe"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/julius-cecilia/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-twitter"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/julius-cecilia/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-instagram"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/julius-cecilia/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-facebook-square"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/julius-cecilia/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fas fa-envelope-open-text"></i>
      </a>
    </Links>
  );
};

ClubTwoHero.Information = function ClubTwoHeroInformation({
  children,
  ...restProps
}: Props) {
  return <Information {...restProps}>{children}</Information>;
};

ClubTwoHero.ClubName = function ClubTwoHeroClubName({
  children,
  ...restProps
}: Props) {
  return <ClubName {...restProps}>{children}</ClubName>;
};

ClubTwoHero.ClubDescription = function ClubTwoHeroClubDescription({
  children,
  ...restProps
}: Props) {
  return <ClubDescription {...restProps}>{children}</ClubDescription>;
};

ClubTwoHero.FollowersAndMembers = function ClubTwoHeroFollowersAndMembers({
  followers,
  members,
  children,
  ...restProps
}: Props) {
  return (
    <FollowersAndMembers {...restProps}>
      <p>
        Followers: <span>{followers}</span>
      </p>
      <p>
        Members: <span>{members}</span>
      </p>
    </FollowersAndMembers>
  );
};

ClubTwoHero.ClubDetails = function ClubTwoHeroClubDetails({
  children,
  ...restProps
}: Props) {
  return <ClubDetails {...restProps}>{children}</ClubDetails>;
};

ClubTwoHero.ClubDetailsRow = function ClubTwoHeroClubDetailsRow({
  children,
  ...restProps
}: Props) {
  return <ClubDetailsRow {...restProps}>{children}</ClubDetailsRow>;
};

ClubTwoHero.ClubDetailsItem = function ClubTwoHeroClubDetailsItem({
  label,
  icon,
  children,
  ...restProps
}: Props) {
  return (
    <ClubDetailsItem {...restProps}>
      <i className={icon}></i>
      <div className="item_details">
        <p>{label}</p>
        {children}
      </div>
    </ClubDetailsItem>
  );
};
