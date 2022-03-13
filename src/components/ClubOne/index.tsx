import React from "react";

import {
  Container,
  MembersAndPartners,
  Members,
  Partners,
} from "./styles/clubOne";

type Props = {
  children?: React.ReactNode;
};

type ImageProps = {
  src?: any;
  alt?: any;
  imageUrl?: any;
  imageSource?: any;
  children?: React.ReactNode;
};

export default function ClubOne({ children, ...restProps }: Props) {
  return <Container {...restProps}>{children}</Container>;
}

ClubOne.MembersAndPartners = function ClubOneMembersAndPartners({
  children,
  ...restProps
}: Props) {
  return <MembersAndPartners {...restProps}>{children}</MembersAndPartners>;
};

ClubOne.Members = function ClubOneMembers({ children, ...restProps }: Props) {
  return <Members {...restProps}>{children}</Members>;
};

ClubOne.Partners = function ClubOnePartners({ children, ...restProps }: Props) {
  return <Partners {...restProps}>{children}</Partners>;
};
