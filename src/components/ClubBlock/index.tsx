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
  StatsAndMembers,
  School,
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
  background?: any;
};

const bgColors = [
  "#D5AAAA",
  "#D5C9AA",
  "#C2D5AA",
  "#AAD5AC",
  "#AAD5C6",
  "#AAD0D5",
  "#AAB3D5",
  "#BDAAD5",
  "#D5AAD3",
  "#D5AAD3",
  "#B8D5AA",
  "#D5D1AA",
  "#AAD5C8",
  "#AAB6D5",
  "#BDAAD5",
  "#D5AAC4",
  "#CCD5AA",
  "#D5BFAA",
];

function getRandomColor() {
  const random = Math.floor(Math.random() * bgColors.length);

  return bgColors[random];
}

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
        <ClubBlock.RankLabel
          background={() => getRandomColor()}
          rankCount={rankCount}
        >
          <h3>#{rankCount}</h3>
        </ClubBlock.RankLabel>
      )}
      <img src={src} alt={clubName} />
      <i className="fas fa-external-link-square-alt"></i>
    </ImageContainer>
  );
};

ClubBlock.RankLabel = function ClubBlockRankLabel({
  background,
  rankCount,
  children,
  ...restProps
}: Props) {
  return (
    <RankLabel background={background} {...restProps}>
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
  memberCount,
  verified,
  children,
  ...restProps
}: Props) {
  return (
    <Stats {...restProps}>
      <div>
        <i className="fas fa-users"></i>
        <p>{followers}</p>
      </div>
      <div>
        <i className="fas fa-user-check"></i>
        <p>{memberCount}</p>
      </div>
    </Stats>
  );
};

ClubBlock.School = function ClubBlockSchool({
  school,
  children,
  ...restProps
}: Props) {
  return (
    <School {...restProps}>
      <p>{school}</p>
    </School>
  );
};

ClubBlock.StatsAndMembers = function ClubBlockStatsAndMembers({
  members,
  followers,
  memberCount,
  verified,
  children,
  ...restProps
}: Props) {
  return (
    <StatsAndMembers {...restProps}>
      <ClubBlock.Stats
        followers={followers}
        memberCount={memberCount}
        verified={verified}
      />
      <ClubBlock.Members members={members} />
    </StatsAndMembers>
  );
};

ClubBlock.Members = function ClubBlockMembers({
  members,
  children,
  ...restProps
}: Props) {
  return (
    <Members {...restProps}>
      {members.map((member: any) => {
        return (
          <ClubBlock.Member
            profilePic={member.profilePic}
            user={member.user}
            background={() => getRandomColor()}
          />
        );
      })}
    </Members>
  );
};

ClubBlock.Member = function ClubBlockMember({
  background,
  profilePic,
  user,
  children,
  ...restProps
}: Props) {
  return (
    <Member background={background} {...restProps}>
      {profilePic !== "" && <img src={profilePic} alt={user} />}
    </Member>
  );
};
