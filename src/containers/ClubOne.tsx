import React, { useState } from "react";
import {
  ClubOne,
  ClubOnePost,
  ClubHeroOne,
  CreateClub,
  ActionButton,
} from "../components";
import { Link as ReactRouterLink } from "react-router-dom";

export function ClubOneContainer() {
  const [profileImageUrl, setProfileImageUrl] = useState("");
  const [clubName, setClubName] = useState("");
  const [established, setEstablished] = useState(null);
  const [description, setDescription] = useState("");
  const [school, setSchool] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [followers, setFollowers] = useState(0);
  const [members, setMembers] = useState(0);
  const [postImages, setPostImages] = useState(null);

  return (
    <ClubOne>
      <ClubHeroOne>
        <ClubHeroOne.BannerSrc>
          <ClubHeroOne.InfoContainer>
            <CreateClub.Info>
              <CreateClub.BasicInfo>
                <CreateClub.ProfilePlaceholder
                  profileImageUrl={profileImageUrl}
                />
                <CreateClub.InfoText>
                  <CreateClub.Name name={clubName} year={established} />
                  <CreateClub.Description>{description}</CreateClub.Description>
                  <CreateClub.SchoolLocationCategory
                    school={school}
                    location={location}
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
      <ClubOne.Content>
        <ClubOne.Posts>
          {/* Add postType "Post", default */}
          <ClubOnePost>
            {postImages ? (
              <>
                <ReactRouterLink to={linkTo}>
                  <ClubOnePost.PhotosContainer
                    linkTo={linkTo}
                    postImages={postImages}
                  />
                </ReactRouterLink>
                <ReactRouterLink to={linkTo}>
                  <ClubOnePost.PostContainer
                    userProfile={userProfile}
                    clubProfile={clubProfile}
                    onCommunity={onCommunity}
                    width="80%"
                    postType={postType}
                    linkTo={linkTo}
                  />
                </ReactRouterLink>
              </>
            ) : (
              <ClubOnePost.PostContainer
                userProfile={userProfile}
                clubProfile={clubProfile}
                onCommunity={onCommunity}
                width="100%"
                postType={postType}
                linkTo={linkTo}
              />
            )}
          </ClubOnePost>
        </ClubOne.Posts>
        <ClubOne.MembersAndPartners>
          <ClubOne.Members>
            <ClubOne.Title>Members</ClubOne.Title>
            <ClubOne.Item
              borderRadius="50%"
              detail="President/Founder"
              name="John Doe"
              profileUrl={null}
            />
            <ClubOne.Item
              borderRadius="50%"
              detail="President/Founder"
              name="John Doe"
              profileUrl={null}
            />
            <ClubOne.Item
              borderRadius="50%"
              detail="President/Founder"
              name="John Doe"
              profileUrl={null}
            />
            <ClubOne.Item
              borderRadius="50%"
              detail="President/Founder"
              name="John Doe"
              profileUrl={null}
            />
            <ClubOne.Item
              borderRadius="50%"
              detail="President/Founder"
              name="John Doe"
              profileUrl={null}
            />
            {/* Check if members are over 6 members to determine whether View All Button is visible */}
            <ClubOne.ViewAll>View All</ClubOne.ViewAll>
          </ClubOne.Members>
          <ClubOne.Partners>
            <ClubOne.Title>Partners</ClubOne.Title>
            <ClubOne.Item
              borderRadius="15px"
              detail="University of Washington"
              name="Physics Club"
              profileUrl={null}
            />
            <ClubOne.Item
              borderRadius="15px"
              detail="University of Washington"
              name="Physics Club"
              profileUrl={null}
            />
            <ClubOne.Item
              borderRadius="15px"
              detail="University of Washington"
              name="Physics Club"
              profileUrl={null}
            />
            <ClubOne.Item
              borderRadius="15px"
              detail="University of Washington"
              name="Physics Club"
              profileUrl={null}
            />
            {/* Check if members are over 6 members to determine whether View All Button is visible */}
            <ClubOne.ViewAll>View All</ClubOne.ViewAll>
          </ClubOne.Partners>
        </ClubOne.MembersAndPartners>
      </ClubOne.Content>
    </ClubOne>
  );
}
