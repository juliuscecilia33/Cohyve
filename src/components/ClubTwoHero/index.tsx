import React from "react";

import {
  Container,
  Banner,
  ProfileAndButtons,
  Links,
} from "./styles/clubTwoHero";
import { ActionButton } from "../../components";

type Props = {
  children?: React.ReactNode;
  bannerSrc?: string;
  followClick?: any;
  partnerClick?: any;
  profileSrc?: string;
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
