import React, { useState } from "react";
import { User, Hero, CreateClub, ActionButton } from "../components";
import { ClubBlockV2Container } from "../containers";

import Banner from "../images/BannerTest.jpeg";
import Profile from "../images/Profile.jpeg";

export function UserContainer() {
  const editProfile = () => {
    console.log("editing profile");
  };

  const members = [
    {
      profilePic: Profile,
      user: "JarredKelenic",
    },
    {
      profilePic: "",
      user: "JulioRodriguez",
    },
    {
      profilePic: Profile,
      user: "JuanSoto",
    },
    {
      profilePic: Profile,
      user: "MikeTrout",
    },
    {
      profilePic: Profile,
      user: "FernandoTatis",
    },
    {
      profilePic: Profile,
      user: "RafaelDevers",
    },
    {
      profilePic: Profile,
      user: "LuisRobert",
    },
  ];

  const [clubsSelected, setClubsSelected] = useState(true);
  const [schoolSelected, setSchoolSelected] = useState(false);
  const [followingSelected, setFollowingSelected] = useState(false);

  return (
    <User>
      <Hero>
        <CreateClub.BannerPlaceholder>
          <User.ProfileData
            name="Julius Cecilia"
            description="Hard work beats talent, when talent doesn't work hard"
            profileImageUrl="https://firebasestorage.googleapis.com/v0/b/cohyve.appspot.com/o/Placeholder.png?alt=media&token=83d8109a-c0ac-4cba-bd95-247ad79857da"
          >
            <ActionButton.Small
              color="#AFD5AA"
              onClick={() => editProfile()}
              background="linear-gradient(94.39deg, #4D566A 8.09%, #091F2E 93.12%), #153243;"
            >
              Edit Profile
            </ActionButton.Small>
          </User.ProfileData>
        </CreateClub.BannerPlaceholder>
      </Hero>
      <User.Tabs>
        <User.Tab
          selected={clubsSelected}
          onClick={() => {
            setClubsSelected(true);
            setSchoolSelected(false);
            setFollowingSelected(false);
          }}
        >
          Clubs
        </User.Tab>
        <User.Tab
          selected={schoolSelected}
          onClick={() => {
            setClubsSelected(false);
            setSchoolSelected(true);
            setFollowingSelected(false);
          }}
        >
          School
        </User.Tab>
        <User.Tab
          selected={followingSelected}
          onClick={() => {
            setClubsSelected(false);
            setSchoolSelected(false);
            setFollowingSelected(true);
          }}
        >
          Following
        </User.Tab>
      </User.Tabs>

      {/* We could just call a function that calls the data of clubs, school, etc. then set it equal to state's value that way we only retrieve it once; we can check if state is null */}
      <User.ContentSection>
        {clubsSelected ? (
          <>
            <User.Items>
              <ClubBlockV2Container
                rankCount={2}
                ranked={true}
                clubName="Ping Pong Club Club Club"
                banner={Banner}
                verified={true}
                followers={50}
                memberCount={12}
                members={members.slice(0, 4)}
                partners={members.slice(0, 4)}
                school="University of Washington"
                profile={Profile}
              />
              <ClubBlockV2Container
                rankCount={3}
                ranked={true}
                clubName="Ping Pong Club Club Club"
                banner={Banner}
                verified={true}
                followers={50}
                memberCount={12}
                members={members.slice(0, 4)}
                partners={members.slice(0, 4)}
                school="University of Washington"
                profile={Profile}
              />
            </User.Items>
            <User.Table>
              <User.Items background="#F6F6F6">
                <User.Label>Club Name</User.Label>
                <User.Label>Category</User.Label>
                <User.Label>Followers</User.Label>
                <User.Label>Role</User.Label>
              </User.Items>
              <User.Items>
                <User.ClubName
                  verified={true}
                  profileImageUrl="https://firebasestorage.googleapis.com/v0/b/cohyve.appspot.com/o/Placeholder.png?alt=media&token=83d8109a-c0ac-4cba-bd95-247ad79857da"
                >
                  Chemistry Club
                </User.ClubName>
                <User.Category>Academics</User.Category>
                <User.Followers>67</User.Followers>
                <User.Role></User.Role>
              </User.Items>
            </User.Table>
          </>
        ) : schoolSelected ? (
          <User.Items></User.Items>
        ) : (
          <User.Items></User.Items>
        )}
      </User.ContentSection>
    </User>
  );
}
