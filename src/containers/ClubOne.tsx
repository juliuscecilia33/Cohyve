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
  const [clubProfileImageUrl, setClubProfileImageUrl] = useState("");
  const [clubBannerImageUrl, setClubBannerImageUrl] = useState("");
  const [clubName, setClubName] = useState("");
  const [established, setEstablished] = useState(null);
  const [description, setDescription] = useState("");
  const [school, setSchool] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [followers, setFollowers] = useState(0);
  const [members, setMembers] = useState(0);
  const [clubPosts, setClubPosts] = useState(null);

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
          {clubPosts &&
            clubPosts.map((post: any, key: any) => {
              return (
                <ClubOnePost key={key}>
                  {post.post_images ? (
                    <>
                      <ReactRouterLink to={linkTo}>
                        <ClubOnePost.PhotosContainer
                          linkTo={linkTo}
                          postImages={post.post_images}
                        />
                      </ReactRouterLink>
                      <ReactRouterLink to={linkTo}>
                        <ClubOnePost.PostContainer
                          userProfile={post.profileurl}
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
                      userProfile={post.user_profile}
                      clubProfile={clubProfileImageUrl}
                      onCommunity={post.on_community}
                      width="100%"
                      postType={post.post_type}
                      linkTo={linkTo}
                    >
                      {post.post_type === "Partner Event" ? (
                        <ClubOnePost.PartnerEventPostContainer
                          linkTo={linkTo}
                          text={text}
                          date={date}
                          location={location}
                        />
                      ) : post.post_type === "Event" ? (
                        <ClubOnePost.PartnerEventPostContainer
                          linkTo={linkTo}
                          text={text}
                          date={date}
                          location={location}
                        />
                      ) : post.post_type === "Announcement" ? (
                        <ClubOnePost.AnnouncementPostContainer
                          linkTo={linkTo}
                          text={text}
                        />
                      ) : post.post_type === "Showcase" ? (
                        <ClubOnePost.ShowcasePostContainer
                          linkTo={linkTo}
                          text={text}
                        />
                      ) : post.post_type === "About" ? (
                        <ClubOnePost.AboutPostContainer
                          linkTo={linkTo}
                          whatwedo={whatwedo}
                          purpose={purpose}
                          contact={contact}
                        />
                      ) : post.post_type === "Support" ? (
                        <ClubOnePost.SponsorPostContainer
                          linkTo={linkTo}
                          links={post.post_support_links}
                          goal={post.post_support_goal}
                          text={post.post_text}
                        />
                      ) : null}
                    </ClubOnePost.PostContainer>
                  )}
                </ClubOnePost>
              );
            })}
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
