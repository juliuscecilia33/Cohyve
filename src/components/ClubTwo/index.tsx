import React from "react";
import { getRandomColor } from "../../getRandomColor";

import {
  Container,
  Posts,
  Content,
  ButtonContainer,
  Pinned,
  Heading,
} from "./styles/clubTwo";

type Props = {
  children?: React.ReactNode;
  profileUrl?: any;
  detail?: string;
  name?: string;
  borderRadius?: any;
};

export default function ClubTwo({ children, ...restProps }: Props) {
  return <Container {...restProps}>{children}</Container>;
}

ClubTwo.Content = function ClubTwoContent({ children, ...restProps }: Props) {
  return <Content {...restProps}>{children}</Content>;
};

ClubTwo.Posts = function ClubTwoPosts({ children, ...restProps }: Props) {
  return <Posts {...restProps}>{children}</Posts>;
};

ClubTwo.Heading = function ClubTwoHeading({ children, ...restProps }: Props) {
  return <Heading {...restProps}>{children}</Heading>;
};

ClubTwo.Pinned = function ClubTwoPinned({ children, ...restProps }: Props) {
  return <Pinned {...restProps}>{children}</Pinned>;
};

ClubTwo.ButtonContainer = function ClubTwoButtonContainer({
  children,
  ...restProps
}: Props) {
  return <ButtonContainer {...restProps}>{children}</ButtonContainer>;
};
