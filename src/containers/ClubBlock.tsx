/* eslint-disable array-callback-return */
import React from "react";
import { ClubBlock } from "../components";

interface DataProps {
  children?: React.ReactNode;
  rank?: boolean;
  src?: string;
  clubName?: string;
  rankCount?: number;
  verified?: boolean;
  followers?: number;
  members?: any;
  school?: string;
  profilePic?: string;
  user?: string;
  backgroundColor?: string;
}

export function ClubBlockContainer({
  rankCount,
  rank,
  clubName,
  src,
  verified,
  followers,
  members,
  school,
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
    <ClubBlock>
      <ClubBlock.ImageContainer
        src={src}
        clubName={clubName}
        rank={rank}
        rankCount={rankCount}
      />
      <ClubBlock.InformationContainer>
        <ClubBlock.Name verified={verified}>{clubName}</ClubBlock.Name>
        <ClubBlock.Stats followers={followers} members={members} />
        <ClubBlock.SchoolAndMembers school={school}>
          {members.map((member: any) => {
            <ClubBlock.Member
              profilePic={member.profilePic}
              user={member.user}
              backgroundColor={bgColors[random]}
            />;
          })}
        </ClubBlock.SchoolAndMembers>
      </ClubBlock.InformationContainer>
    </ClubBlock>
  );
}
