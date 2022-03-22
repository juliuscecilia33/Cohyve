import React from "react";
import {
  ClubOne,
  ClubOnePost,
  ClubHeroOne,
  CreateClub,
  ActionButton,
} from "../components";

export function ClubOneContainer() {
  return (
    <>
      <ClubHeroOne>
        <ClubHeroOne.BannerSrc>
          <ClubHeroOne.InfoContainer>
            <CreateClub.Info>
              <CreateClub.BasicInfo>
                <CreateClub.ProfilePlaceholder
                  profileImageUrl={previewProfile}
                />
                <CreateClub.InfoText>
                  <CreateClub.Name name={clubName} year={established} />
                  <CreateClub.Description>{description}</CreateClub.Description>
                  <CreateClub.SchoolLocationCategory
                    school={school}
                    location={state}
                    category={category}
                  />
                </CreateClub.InfoText>
              </CreateClub.BasicInfo>
              <CreateClub.ButtonsAndLinks>
                <CreateClub.Buttons>
                  <ActionButton
                    color="#FAFCFA"
                    background="linear-gradient(94.39deg, #58A4B0 8.09%, #AFD5AA 93.12%);"
                    onClick={() => console.log("Follow")}
                  >
                    Follow
                  </ActionButton>
                  <ActionButton
                    color="#FAFCFA"
                    background="linear-gradient(94.39deg, #ABC9F5 8.09%, #5A5EC5 93.12%);"
                    onClick={() => console.log("Partner")}
                  >
                    Partner
                  </ActionButton>
                </CreateClub.Buttons>
                <CreateClub.Links>
                  <CreateClub.Icon>
                    <i className="fas fa-globe"></i>
                    <i className="fab fa-twitter-square"></i>
                    <i className="fab fa-instagram-square"></i>
                    <i className="fab fa-facebook-square"></i>
                    <i className="fas fa-envelope-open-text"></i>
                  </CreateClub.Icon>
                </CreateClub.Links>
              </CreateClub.ButtonsAndLinks>
              <CreateClub.Stats>
                <CreateClub.FollowersAndMembers>
                  <CreateClub.FollowersAndMembersText>
                    Followers: <span>0</span>
                  </CreateClub.FollowersAndMembersText>
                  <CreateClub.FollowersAndMembersText>
                    Members: <span>0</span>
                  </CreateClub.FollowersAndMembersText>
                </CreateClub.FollowersAndMembers>
                <CreateClub.Partners />
              </CreateClub.Stats>
            </CreateClub.Info>
          </ClubHeroOne.InfoContainer>
        </ClubHeroOne.BannerSrc>
      </ClubHeroOne>
    </>
  );
}
