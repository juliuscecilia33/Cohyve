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
  PinnedIcon,
  PartnersProfile,
} from "./styles/clubTwoPinnedPost";

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

export default function ClubTwoPinnedPost({ children, ...restProps }: Props) {
  return <Container {...restProps}>{children}</Container>;
}

ClubTwoPinnedPost.Image = function ClubTwoPinnedPostImage({
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
      <div className="image_icons">
        {postImages.length > 1 && (
          <ClubTwoPinnedPost.MoreImagesIcon linkTo={linkTo} />
        )}
        {postType === "Partner Event" && (
          <ClubTwoPinnedPost.PartnersProfile
            clubProfile={clubProfile}
            partnerProfile={partnerProfile}
            linkTo={linkTo}
          />
        )}
      </div>
    </Image>
  );
};

ClubTwoPinnedPost.MoreImagesIcon = function ClubTwoPinnedPostMoreImagesIcon({
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

ClubTwoPinnedPost.PinnedIcon = function ClubTwoPinnedPostPinnedIcon({
  children,
  ...restProps
}: Props) {
  return (
    <PinnedIcon {...restProps}>
      <i className="fa-solid fa-thumbtack"></i>
    </PinnedIcon>
  );
};

ClubTwoPinnedPost.PartnersProfile = function ClubTwoPinnedPostMoreImagesIcon({
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

ClubTwoPinnedPost.Title = function ClubTwoPinnedPostTitle({
  children,
  ...restProps
}: Props) {
  return <Title {...restProps}>{children}</Title>;
};

ClubTwoPinnedPost.Details = function ClubTwoPostDetails({
  children,
  ...restProps
}: Props) {
  return <Details {...restProps}>{children}</Details>;
};

ClubTwoPinnedPost.UserDetails = function ClubTwoPostUserDetails({
  children,
  ...restProps
}: Props) {
  return <UserDetails {...restProps}>{children}</UserDetails>;
};

ClubTwoPinnedPost.PostActions = function ClubTwoPostUserDetails({
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

ClubTwoPinnedPost.ProfileImage = function ClubTwoPostProfileImage({
  profileImage,
  children,
  ...restProps
}: Props) {
  return <ProfileImage src={profileImage} alt="Profile Image" {...restProps} />;
};

ClubTwoPinnedPost.UserInfo = function ClubTwoPostTitleUserInfo({
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
