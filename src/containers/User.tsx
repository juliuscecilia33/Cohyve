import React, { useState } from "react";
import { User, Hero, CreateClub, ActionButton } from "../components";

export function UserContainer() {
  const editProfile = () => {
    console.log("editing profile");
  };

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
      <User.ContentSection>
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
        {clubsSelected ? (
          <User.Items></User.Items>
        ) : schoolSelected ? (
          <User.Items></User.Items>
        ) : (
          <User.Items></User.Items>
        )}
      </User.ContentSection>
    </User>
  );
}
