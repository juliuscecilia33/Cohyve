import React from "react";

import {
  Container,
  CreateButtonContainer,
  SectionContainer,
} from "./styles/clubs";

type Props = {
  children?: React.ReactNode;
  rank?: boolean;
};

export default function Clubs({ children, ...restProps }: Props) {
  return <Container {...restProps}>{children}</Container>;
}

Clubs.CreateButtonContainer = function ClubsCreateButtonContainer({
  children,
  ...restProps
}: Props) {
  return (
    <CreateButtonContainer {...restProps}>{children}</CreateButtonContainer>
  );
};

Clubs.SectionContainer = function ClubsSectionContainer({
  children,
  ...restProps
}: Props) {
  return <SectionContainer {...restProps}>{children}</SectionContainer>;
};
