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

import VerifiedIcon from "../Images/VerifiedIcon.png";

type Props = {
  children?: React.ReactNode;
  ranked?: boolean;
  src?: string;
  clubName?: string;
  rankCount?: number;
  verified?: boolean;
  followers?: number;
  members?: any;
  memberCount?: number;
  school?: string;
  profilePic?: string;
  user?: string;
  backgroundColor?: string;
};

export default function ClubBlock({ children, ...restProps }: Props) {
  return <Container {...restProps}>{children}</Container>;
}

ClubBlock.ImageContainer = function ClubBlockImageContainer({
  src,
  clubName,
  ranked,
  rankCount,
  children,
  ...restProps
}: Props) {
  return (
    <ImageContainer {...restProps}>
      {ranked && (
        <ClubBlock.RankLabel rankCount={rankCount}>
          <h3>#{rankCount}</h3>
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
  return <RankLabel {...restProps}>{children}</RankLabel>;
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
  memberCount,
  verified,
  children,
  ...restProps
}: Props) {
  return (
    <Stats {...restProps}>
      <div>
        <p>{followers}</p>
        <i className="fas fa-users"></i>
      </div>
      <div>
        <p>{memberCount}</p>
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
  backgroundColor,
  profilePic,
  user,
  children,
  ...restProps
}: Props) {
  return (
    <Member backgroundColor={backgroundColor} {...restProps}>
      <img src={profilePic} alt={user} />
    </Member>
  );
};
