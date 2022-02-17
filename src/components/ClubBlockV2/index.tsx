import React from "react";

import {
  Container,
  ImageContainer,
  RankLabel,
  TopBar,
  Stats,
  School,
  MembersAndPartners,
  InformationContainer,
  Item,
  Name,
} from "./styles/clubBlockV2";

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
  partners?: any;
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

export default function ClubBlockV2({ children, ...restProps }: Props) {
  return <Container {...restProps}>{children}</Container>;
}

ClubBlockV2.TopBar = function ClubBlockV2TopBar({
  verified,
  background,
  src,
  clubName,
  children,
  ...restProps
}: Props) {
  return (
    <TopBar background={background} {...restProps}>
      <div>
        <img src={src} alt={clubName} />
      </div>
      <ClubBlockV2.Name verified={verified}>{clubName}</ClubBlockV2.Name>
    </TopBar>
  );
};

ClubBlockV2.Name = function ClubBlockV2Name({
  verified,
  children,
  ...restProps
}: Props) {
  return (
    <Name {...restProps}>
      <h3>{children}</h3>
      {verified && <img src={VerifiedIcon} alt="Verified Icon" />}
    </Name>
  );
};

ClubBlockV2.ImageContainer = function ClubBlockV2ImageContainer({
  src,
  clubName,
  rankCount,
  ranked,
  children,
  ...restProps
}: Props) {
  return (
    <ImageContainer {...restProps}>
      {ranked && (
        <ClubBlockV2.RankLabel
          background={() => getRandomColor()}
          rankCount={rankCount}
        >
          <h3>#{rankCount}</h3>
        </ClubBlockV2.RankLabel>
      )}
      <img src={src} alt={clubName} />
    </ImageContainer>
  );
};

ClubBlockV2.RankLabel = function ClubBlockV2RankLabel({
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

ClubBlockV2.InformationContainer = function ClubBlockV2InformationContainer({
  children,
  ...restProps
}: Props) {
  return <InformationContainer {...restProps}>{children}</InformationContainer>;
};

ClubBlockV2.Stats = function ClubBlockV2Stats({
  followers,
  memberCount,
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

ClubBlockV2.School = function ClubBlockV2School({
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

ClubBlockV2.MembersAndPartners = function ClubBlockV2MembersAndPartners({
  partners,
  members,
  children,
  ...restProps
}: Props) {
  return (
    <MembersAndPartners {...restProps}>
      {members.map((member: any) => {
        return (
          <ClubBlockV2.Item
            profilePic={member.profilePic}
            user={member.user}
            background={() => getRandomColor()}
          />
        );
      })}
      {partners.map((partner: any) => {
        return (
          <ClubBlockV2.Item
            profilePic={partner.profilePic}
            user={partner.user}
            background={() => getRandomColor()}
          />
        );
      })}
    </MembersAndPartners>
  );
};

ClubBlockV2.Item = function ClubBlockV2Item({
  background,
  profilePic,
  user,
  children,
  ...restProps
}: Props) {
  return (
    <Item background={background} {...restProps}>
      {profilePic !== "" && <img src={profilePic} alt={user} />}
    </Item>
  );
};
