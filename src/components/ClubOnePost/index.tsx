import React from "react";

import {
  Container,
  PhotosPostContainer,
  NoPhotosPostContainer,
  PostContainer,
} from "./styles/clubOnePost";

type Props = {
  children?: React.ReactNode;
  postImages?: any;
  postType?: string;
};

export default function ClubOnePost({
  postType,
  postImages,
  children,
  ...restProps
}: Props) {
  return (
    <Container {...restProps}>
      {postImages ? (
        <PhotosPostContainer postType={postType} />
      ) : (
        <NoPhotosPostContainer postType={postType} />
      )}
    </Container>
  );
}

ClubOnePost.PhotosPostContainer = function ClubOnePhotosPostContainer({
  postType,
  children,
  ...restProps
}: Props) {
  return (
    <PhotosPostContainer {...restProps}>
      <>
        <PhotosContainer />
        <PostContainer />
      </>
    </PhotosPostContainer>
  );
};

ClubOnePost.PhotosContainer = function ClubOnePhotosContainer({
  children,
  ...restProps
}: Props) {
  return <PhotosContainer {...restProps}>{children}</PhotosContainer>;
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
  postType,
  children,
  ...restProps
}: Props) {
  return (
    <PostContainer {...restProps}>
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
