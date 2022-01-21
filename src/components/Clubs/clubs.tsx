import React from "react";

import { Container, ClubBlock } from "./styles/clubs";

type Props = {
  children?: React.ReactNode;
  rank?: boolean;
};

export default function Clubs({ children, ...restProps }: Props) {
  return <Container {...restProps}>{children}</Container>;
}

Clubs.ClubBlock = function ClubsClubBlock({
  rank,
  children,
  ...restProps
}: Props) {
  return <ClubBlock {...restProps}>{children}</ClubBlock>;
};
