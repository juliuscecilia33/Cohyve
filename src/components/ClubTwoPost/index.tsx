import React from "react";
import { getRandomColor } from "../../getRandomColor";
import { ActionButton } from "../../components";
import { Link as ReactRouterLink } from "react-router-dom";

import {
  Container,
  Image,
  Title,
  Details,
  ProfileImage,
  UserInfo,
  UserDetails,
  PostActions,
  MoreImagesIcon,
  PartnersProfile,
  AboutPostContainer,
  PartnerEventPostContainer,
  SupportPostContainer,
} from "./styles/clubTwoPost";

type Props = {
  children?: React.ReactNode;
  profileImage?: string;
  username?: string;
  userPosition?: string;
  timePosted?: any;
  likeCount?: number;
  commentCount?: number;
  postType?: string;
  linkTo?: string;
  postImages?: any;
  width?: string;
  onCommunity?: boolean;
  clubProfile?: any;
  userProfile?: any;
  text?: string;
  date?: string;
  location?: string;
  locationDetails?: string;
  time?: string;
  partners?: any;
  position?: string;
  posted?: string;
  profilePic?: string;
  user?: string;
  background?: string;
  whatwedo?: string;
  purpose?: string;
  contact?: string;
  twitterLink?: string;
  emailLink?: string;
  instagramLink?: string;
  facebookLink?: string;
  otherLink?: string;
  links?: any;
  goal?: number;
  isAnnouncement?: boolean;
  buttonBackground?: string;
  partnerProfile?: string;
};

export default function ClubTwoPost({ children, ...restProps }: Props) {
  return <Container {...restProps}>{children}</Container>;
}

ClubTwoPost.Image = function ClubTwoPostImage({
  postType,
  linkTo,
  postImages,
  clubProfile,
  partnerProfile,
  children,
  ...restProps
}: Props) {
  return (
    <Image src={postImages[0]} alt="Profile" {...restProps}>
      {postImages.length > 1 && <ClubTwoPost.MoreImagesIcon linkTo={linkTo} />}
      {postType === "Partner Event" && (
        <ClubTwoPost.PartnersProfile
          clubProfile={clubProfile}
          partnerProfile={partnerProfile}
          linkTo={linkTo}
        />
      )}
    </Image>
  );
};

ClubTwoPost.MoreImagesIcon = function ClubTwoPostMoreImagesIcon({
  linkTo,
  children,
  ...restProps
}: Props) {
  return (
    <ReactRouterLink to={linkTo}>
      <MoreImagesIcon {...restProps}>
        <i className="fa-solid fa-images"></i>
      </MoreImagesIcon>
    </ReactRouterLink>
  );
};

ClubTwoPost.PartnersProfile = function ClubTwoPostMoreImagesIcon({
  clubProfile,
  partnerProfile,
  linkTo,
  children,
  ...restProps
}: Props) {
  return (
    <PartnersProfile {...restProps}>
      <ReactRouterLink to={linkTo}>
        <div className="partner">
          <img src={clubProfile} alt="Club Profile" />
        </div>
        <div className="partner">
          <img src={partnerProfile} alt="Partner Profile" />
        </div>
      </ReactRouterLink>
    </PartnersProfile>
  );
};

ClubTwoPost.Title = function ClubTwoPostTitle({
  children,
  ...restProps
}: Props) {
  return <Title {...restProps}>{children}</Title>;
};

ClubTwoPost.Details = function ClubTwoPostDetails({
  children,
  ...restProps
}: Props) {
  return <Details {...restProps}>{children}</Details>;
};

ClubTwoPost.UserDetails = function ClubTwoPostUserDetails({
  children,
  ...restProps
}: Props) {
  return <UserDetails {...restProps}>{children}</UserDetails>;
};

ClubTwoPost.PartnerEventPostContainer =
  function ClubTwoPostPartnerEventPostContainer({
    linkTo,
    time,
    date,
    location,
    locationDetails,
    text,
    children,
    ...restProps
  }: Props) {
    return (
      <PartnerEventPostContainer {...restProps}>
        <div className="date_and_location_container">
          <i className="fa-solid fa-calendar-day"></i>
          <div className="date_and_location_details">
            <p>Meetup Time</p>
            <h2>{date}</h2>
            <h3>{time}</h3>
          </div>
        </div>
        <div className="date_and_location_container">
          <i className="fa-solid fa-compass"></i>
          <div className="date_and_location_details">
            <p>Meetup Location</p>
            <h2>{location}</h2>
            <h3>{locationDetails}</h3>
          </div>
        </div>
      </PartnerEventPostContainer>
    );
  };

ClubTwoPost.AboutPostContainer = function ClubOnePostAboutPostContainer({
  twitterLink,
  emailLink,
  instagramLink,
  facebookLink,
  otherLink,
  whatwedo,
  purpose,
  contact,
  children,
  ...restProps
}: Props) {
  return (
    <AboutPostContainer {...restProps}>
      <div className="heading_and_text">
        <h2>What we do</h2>
        <p>{whatwedo}</p>
      </div>
      <div className="heading_and_text">
        <h2>Purpose</h2>
        <p>{purpose}</p>
      </div>
      <div className="contact">
        <h2>Contact</h2>
        <div className="social_icons">
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
        </div>
      </div>
    </AboutPostContainer>
  );
};

ClubTwoPost.SupportPostContainer = function ClubTwoPostSupportPostContainer({
  linkTo,
  links,
  goal,
  text,
  children,
  ...restProps
}: Props) {
  return (
    <SupportPostContainer {...restProps}>
      <p>Goal: ${goal}</p>
      <div className="links_buttons">
        {links &&
          links.map((link: any, key: any) => {
            return (
              <ReactRouterLink to={link}>
                <button>
                  <p>{link}</p>
                </button>
              </ReactRouterLink>
            );
          })}
      </div>
    </SupportPostContainer>
  );
};

ClubTwoPost.PostActions = function ClubTwoPostUserDetails({
  postType,
  linkTo,
  commentCount,
  likeCount,
  children,
  ...restProps
}: Props) {
  return (
    <PostActions {...restProps}>
      <div className="post_action">
        <div className="action_icon">
          <i className="fa-solid fa-heart-pulse"></i>
        </div>
        <p>{likeCount}</p>
      </div>
      <div className="post_action">
        <div className="action_icon">
          <i className="fa-solid fa-comments"></i>
        </div>
        <p>{commentCount}</p>
      </div>
      <ActionButton.Medium
        color="#FAFCFA"
        onClick={() => null}
        background={
          postType === "Partner Event"
            ? "linear-gradient(87.85deg, #F64F59 1.81%, #C471ED 51%, #12C2E9 98.19%);"
            : postType === "Event"
            ? "linear-gradient(87.85deg, #12C2E9 1.81%, #C471ED 51%, #F64F59 98.19%);"
            : postType === "Announcement"
            ? "linear-gradient(87.85deg, #FEAC5E 1.81%, #C779D0 51%, #4BC0C8 98.19%);"
            : postType === "Showcase"
            ? "linear-gradient(87.85deg, #A770EF 1.81%, #CF8BF3 51%, #FDB99B 98.19%);"
            : postType === "About"
            ? "linear-gradient(94.39deg, #58A4B0 8.09%, #AFD5AA 93.12%);"
            : postType === "Support"
            ? "linear-gradient(87.85deg, #7F7FD5 1.81%, #86A8E7 50.62%, #9BE0DC 98.19%);"
            : postType === "Post"
            ? "linear-gradient(94.39deg, #4D566A 8.09%, #091F2E 93.12%);"
            : null
        }
      >
        <ReactRouterLink to={linkTo}>{postType}</ReactRouterLink>
      </ActionButton.Medium>
    </PostActions>
  );
};

ClubTwoPost.ProfileImage = function ClubTwoPostProfileImage({
  profileImage,
  children,
  ...restProps
}: Props) {
  return <ProfileImage src={profileImage} alt="Profile Image" {...restProps} />;
};

ClubTwoPost.UserInfo = function ClubTwoPostTitleUserInfo({
  timePosted,
  userPosition,
  username,
  children,
  ...restProps
}: Props) {
  return (
    <UserInfo {...restProps}>
      <h3>{username}</h3>
      <p>
        {userPosition} • {timePosted}
      </p>
    </UserInfo>
  );
};
