import React from "react";

import {
  Container,
  MembersAndPartners,
  Members,
  Partners,
  Title,
  Item,
  ViewAll,
} from "./styles/clubOne";

type Props = {
  children?: React.ReactNode;
  profileUrl?: any;
  position?: string;
  name?: string;
  borderRadius?: any;
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

ClubOne.Item = function ClubOneItem({
  borderRadius,
  position,
  name,
  profileUrl,
  children,
  ...restProps
}: Props) {
  return (
    <Item borderRadius={borderRadius} {...restProps}>
      <div className="ProfileImage">
        <img src={profileUrl} alt="Item Profile Url" />
      </div>
      <div className="Text">
        <h3>{name}</h3>
        <p>{position}</p>
      </div>
    </Item>
  );
};

ClubOne.Partners = function ClubOnePartners({ children, ...restProps }: Props) {
  return <Partners {...restProps}>{children}</Partners>;
};

ClubOne.Title = function ClubOneTitle({ children, ...restProps }: Props) {
  return <Title {...restProps}>{children}</Title>;
};

ClubOne.ViewAll = function ClubOneViewAll({ children, ...restProps }: Props) {
  return <ViewAll {...restProps}>{children}</ViewAll>;
};
