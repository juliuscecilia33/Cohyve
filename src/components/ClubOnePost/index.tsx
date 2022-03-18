import React from "react";

import { Link as ReactRouterLink } from "react-router-dom";
import { ActionButton } from "../../components";

import {
  Container,
  PhotosPostContainer,
  NoPhotosPostContainer,
  PostContainer,
  PhotosContainer,
  MoreImagesIcon,
  TopPostLayer,
} from "./styles/clubOnePost";

type Props = {
  children?: React.ReactNode;
  postImages?: any;
  postType?: string;
  linkTo?: string;
  width?: string;
  onCommunity?: boolean;
  clubProfile?: any;
  userProfile?: any;
};

export default function ClubOnePost({
  userProfile,
  onCommunity,
  linkTo,
  postType,
  postImages,
  clubProfile,
  children,
  ...restProps
}: Props) {
  return (
    <Container {...restProps}>
      {postImages ? (
        <PhotosPostContainer
          linkTo={linkTo}
          postImages={postImages}
          postType={postType}
          onCommunity={onCommunity}
          clubProfile={clubProfile}
          userProfile={userProfile}
        />
      ) : (
        <NoPhotosPostContainer
          linkTo={linkTo}
          postType={postType}
          onCommunity={onCommunity}
          clubProfile={clubProfile}
          userProfile={userProfile}
        />
      )}
    </Container>
  );
}

ClubOnePost.PhotosPostContainer = function ClubOnePostPhotosPostContainer({
  userProfile,
  clubProfile,
  onCommunity,
  linkTo,
  postImages,
  postType,
  children,
  ...restProps
}: Props) {
  return (
    <PhotosPostContainer {...restProps}>
      <>
        <ReactRouterLink to={linkTo}>
          <PhotosContainer linkTo={linkTo} postImages={postImages} />
        </ReactRouterLink>
        <ReactRouterLink to={linkTo}>
          <PostContainer
            userProfile={userProfile}
            clubProfile={clubProfile}
            onCommunity={onCommunity}
            width="80%"
            postType={postType}
            linkTo={linkTo}
          />
        </ReactRouterLink>
      </>
    </PhotosPostContainer>
  );
};

ClubOnePost.PhotosContainer = function ClubOnePostPhotosContainer({
  linkTo,
  postImages,
  children,
  ...restProps
}: Props) {
  return (
    <PhotosContainer {...restProps}>
      <img src={postImages[0]} alt="Profile" />
      {postImages.length > 1 && <ClubOnePost.MoreImagesIcon linkTo={linkTo} />}
    </PhotosContainer>
  );
};

ClubOnePost.MoreImagesIcon = function ClubOnePostMoreImagesIcon({
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

ClubOnePost.NoPhotosPostContainer = function ClubOnePostNoPhotosPostContainer({
  postType,
  children,
  ...restProps
}: Props) {
  return (
    <NoPhotosPostContainer {...restProps}>
      <PostContainer width="100%" />
    </NoPhotosPostContainer>
  );
};

ClubOnePost.PostContainer = function ClubOnePostPostContainer({
  linkTo,
  userProfile,
  clubProfile,
  onCommunity,
  width,
  postType,
  children,
  ...restProps
}: Props) {
  return (
    <PostContainer width={width} {...restProps}>
      <ClubOnePost.TopPostLayer
        linkTo={linkTo}
        userProfile={userProfile}
        clubProfile={clubProfile}
        onCommunity={onCommunity}
        postType={postType}
      />
      {postType === "Partner Event" ? (
        <PartnerEventPostContainer />
      ) : postType === "Event" ? (
        <EventPostContainer />
      ) : postType === "Announcement" ? (
        <AnnouncementPostContainer />
      ) : postType === "Showcase" ? (
        <ShowcasePostContainer />
      ) : postType === "About" ? (
        <AboutPostContainer />
      ) : postType === "Sponsor" ? (
        <SponsorPostContainer />
      ) : null}
    </PostContainer>
  );
};

ClubOnePost.TopPostLayer = function ClubOnePostTopPostLayerContainer({
  linkTo,
  userProfile,
  clubProfile,
  onCommunity,
  postType,
  children,
  ...restProps
}: Props) {
  return (
    <TopPostLayer postType={postType} {...restProps}>
      <div className="clubAndUser">
        {onCommunity && (
          <>
            <img src={clubProfile} alt="Club Profile" />
            <div className="border"></div>
          </>
        )}
        <div className="user">
          <img src={userProfile} alt="User Profile" />
          <div className="userData"></div>
        </div>
      </div>
      <ReactRouterLink to={linkTo}>
        <ActionButton
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
              : postType === "Sponsor"
              ? "linear-gradient(87.85deg, #7F7FD5 1.81%, #86A8E7 50.62%, #9BE0DC 98.19%);"
              : null
          }
        >
          {postType}
        </ActionButton>
      </ReactRouterLink>
    </TopPostLayer>
  );
};
