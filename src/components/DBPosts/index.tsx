import React from "react";

import {
  Container,
  ButtonContainer,
  Heading,
  PinnedPostsContainer,
  FiltersContainer,
} from "./styles/dbPosts";

type Props = {
  children?: React.ReactNode;
};

export default function DBPosts({ children, ...restProps }: Props) {
  return <Container {...restProps}>{children}</Container>;
}

DBPosts.ButtonContainer = function DBPostsButtonContainer({
  children,
  ...restProps
}: Props) {
  return <ButtonContainer {...restProps}>{children}</ButtonContainer>;
};

DBPosts.Heading = function DBPostsHeading({ children, ...restProps }: Props) {
  return <Heading {...restProps}>{children}</Heading>;
};

DBPosts.PinnedPostsContainer = function DBPostsPinnedPostsContainer({
  children,
  ...restProps
}: Props) {
  return <PinnedPostsContainer {...restProps}>{children}</PinnedPostsContainer>;
};

DBPosts.FiltersContainer = function DBPostsFiltersContainer({
  children,
  ...restProps
}: Props) {
  return <FiltersContainer {...restProps}>{children}</FiltersContainer>;
};
