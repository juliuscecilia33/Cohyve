import React from "react";

import { Link as ReactRouterLink } from "react-router-dom";

import {
  Container,
  PhotosPostContainer,
  NoPhotosPostContainer,
  PostContainer,
  PhotosContainer,
  MoreImagesIcon,
} from "./styles/clubOnePost";

type Props = {
  children?: React.ReactNode;
  postImages?: any;
  postType?: string;
  linkTo?: string;
  width?: string;
};

export default function ClubOnePost({
  linkTo,
  postType,
  postImages,
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
        />
      ) : (
        <NoPhotosPostContainer linkTo={linkTo} postType={postType} />
      )}
    </Container>
  );
}

ClubOnePost.PhotosPostContainer = function ClubOnePhotosPostContainer({
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
          <PostContainer width="80%" />
        </ReactRouterLink>
      </>
    </PhotosPostContainer>
  );
};

ClubOnePost.PhotosContainer = function ClubOnePhotosContainer({
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

ClubOnePost.MoreImagesIcon = function ClubOneMoreImagesIcon({
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

ClubOnePost.NoPhotosPostContainer = function ClubOneNoPhotosPostContainer({
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

ClubOnePost.PostContainer = function ClubOnePostContainer({
  width,
  postType,
  children,
  ...restProps
}: Props) {
  return (
    <PostContainer width={width} {...restProps}>
      {postType === "partnerevent" ? (
        <PartnerEventPostContainer />
      ) : postType === "event" ? (
        <EventPostContainer />
      ) : postType === "announcement" ? (
        <AnnouncementPostContainer />
      ) : postType === "showcase" ? (
        <ShowcasePostContainer />
      ) : postType === "about" ? (
        <AboutPostContainer />
      ) : postType === "sponsor" ? (
        <SponsorPostContainer />
      ) : null}
    </PostContainer>
  );
};
