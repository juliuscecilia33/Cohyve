/* eslint-disable array-callback-return */
import React from "react";
import { ClubBlockV2 } from "../components";

interface DataProps {
  children?: React.ReactNode;
  ranked?: boolean;
  src?: string;
  clubName?: string;
  rankCount?: number;
  verified?: boolean;
  followers?: number;
  members?: any;
  school?: string;
  profile?: string;
  banner?: string;
  user?: string;
  backgroundColor?: any;
  memberCount?: number;
  partners?: any;
}

export function ClubBlockV2Container({
  partners,
  rankCount,
  ranked,
  clubName,
  banner,
  profile,
  verified,
  followers,
  members,
  school,
  memberCount,
}: DataProps) {
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
  const random = Math.floor(Math.random() * bgColors.length);

  return (
    <ClubBlockV2>
      <ClubBlockV2.TopBar
        clubName={clubName}
        src={profile}
        background={bgColors[random]}
      />
      <ClubBlockV2.ImageContainer
        src={banner}
        clubName={clubName}
        ranked={ranked}
        rankCount={rankCount}
      />
      <ClubBlockV2.InformationContainer>
        <ClubBlockV2.Stats
          followers={followers}
          memberCount={memberCount}
          members={members}
        />
        <ClubBlockV2.School school={school} />
      </ClubBlockV2.InformationContainer>
      <ClubBlockV2.MembersAndPartners partners={partners} members={members} />
    </ClubBlockV2>
  );
}
