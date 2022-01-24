import React from "react";

import { Container } from "./styles/clubs";

type Props = {
  children?: React.ReactNode;
  rank?: boolean;
};

export default function Clubs({ children, ...restProps }: Props) {
  return <Container {...restProps}>{children}</Container>;
}

Clubs.DropdownItem = function ClubsDropdownItem({
  children,
  ...restProps
}: Props) {
  return <DropdownItem {...restProps}>{children}</DropdownItem>;
};
