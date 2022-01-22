import React from "react";

import {
  Container,
  ImageContainer,
  RankLabel,
  InformationContainer,
  Name,
  Stats,
  Members,
  Member,
  SchoolAndMembers,
} from "./styles/clubBlock";

import VerifiedIcon from "../../images/VerifiedIcon.png";

type Props = {
  children?: React.ReactNode;
  rank?: boolean;
  src?: string;
  clubName?: string;
  rankCount?: number;
  verified?: boolean;
  followers?: number;
  members?: number;
  school?: string;
  profilePic?: string;
  user?: string;
};

export default function ClubBlock({ children, ...restProps }: Props) {
  return <Container {...restProps}>{children}</Container>;
}

ClubBlock.ImageContainer = function ClubBlockImageContainer({
  src,
  clubName,
  rank,
  rankCount,
  children,
  ...restProps
}: Props) {
  return (
    <ImageContainer {...restProps}>
      {rank && (
        <ClubBlock.RankLabel rankCount={rankCount}>
          {rankCount}
        </ClubBlock.RankLabel>
      )}
      <img src={src} alt={clubName} />
      <i className="fas fa-external-link-square-alt"></i>
    </ImageContainer>
  );
};

ClubBlock.RankLabel = function ClubBlockRankLabel({
  rankCount,
  children,
  ...restProps
}: Props) {
  return (
    <RankLabel rankCount={rankCount} {...restProps}>
      {children}
    </RankLabel>
  );
};

ClubBlock.InformationContainer = function ClubBlockInformationContainer({
  children,
  ...restProps
}: Props) {
  return <InformationContainer {...restProps}>{children}</InformationContainer>;
};

ClubBlock.Name = function ClubBlockName({
  verified,
  children,
  ...restProps
}: Props) {
  return (
    <Name {...restProps}>
      <p>{children}</p>
      {verified && <img src={VerifiedIcon} alt="Verified Icon" />}
    </Name>
  );
};

ClubBlock.Stats = function ClubBlockStats({
  followers,
  members,
  verified,
  children,
  ...restProps
}: Props) {
  return (
    <Stats {...restProps}>
      <div>
        {followers}
        <i className="fas fa-users"></i>
      </div>
      <div>
        {members}
        <i className="fas fa-user-check"></i>
      </div>
    </Stats>
  );
};

ClubBlock.SchoolAndMembers = function ClubBlockSchoolAndMembers({
  school,
  children,
  ...restProps
}: Props) {
  return (
    <SchoolAndMembers {...restProps}>
      <p>{school}</p>
      {children}
    </SchoolAndMembers>
  );
};

ClubBlock.Members = function ClubBlockMembers({
  children,
  ...restProps
}: Props) {
  return <Members {...restProps}>{children}</Members>;
};

ClubBlock.Member = function ClubBlockMember({
  profilePic,
  user,
  children,
  ...restProps
}: Props) {
  return (
    <Member {...restProps}>
      <img src={profilePic} alt={user} />
    </Member>
  );
};
