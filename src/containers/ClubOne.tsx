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
  const [clubProfileImageUrl, setClubProfileImageUrl] = useState<string>("");
  const [clubBannerImageUrl, setClubBannerImageUrl] = useState<string>("");
  const [clubName, setClubName] = useState<string>("");
  const [established, setEstablished] = useState(null);
  const [description, setDescription] = useState<string>("");
  const [school, setSchool] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [followers, setFollowers] = useState<number>(0);
  const [members, setMembers] = useState<number>(0);
  const [clubPosts, setClubPosts] = useState(null);

  const samplePostData = [
    {
      post_id: 1,
      club_id: 36,
      title: "Test Partner Event Post",
      description: "This is a partner event",
      created_at: "2022-03-29T02:51:40.697Z",
      firebase_user_id: "FwJoujO3BISHxwiBlKhx0bH8DVh2",
      on_community: false,
      post_images: [
        "https://sodomojo.com/wp-content/uploads/getty-images/2017/07/1211682906.jpeg",
        "thisisurl2",
      ],
      post_type: "Partner Event",
      post_location: "Paccar Hall Room 442",
      post_date: "03-01-2022",
      post_text: "Please join us",
      post_whatwedo: "",
      post_purpose: "",
      post_contact: "",
      post_support_links: "",
      post_support_goal: "",
      club_name: "NBA Topshot Club",
      club_profileurl:
        "https://firebasestorage.googleapis.com/v0/b/cohyve.appspot.com/o/BannerPlaceholder.png?alt=media&token=c503d5fc-736a-42da-9504-5dfb95cd83ef",
      club_bannerurl: "",
      profileurl:
        "https://firebasestorage.googleapis.com/v0/b/cohyve.appspot.com/o/Placeholder.png?alt=media&token=83d8109a-c0ac-4cba-bd95-247ad79857da",
      bannerurl: "",
      username: "juliusceciliaFwJoujO3BISHxwiBlKhx0bH8DVh2",
      name: "Julius Cecilia",
      club_partner: null,
    },
    {
      post_id: 2,
      club_id: 36,
      title: "Test About Post",
      description: "This is an about post",
      created_at: "2022-03-29T03:37:02.354Z",
      firebase_user_id: "FwJoujO3BISHxwiBlKhx0bH8DVh2",
      on_community: false,
      post_images: [
        "https://cloudfront-us-east-1.images.arcpublishing.com/advancelocal/M5QVGDYD2VC5VEWYBVCHJTIZDE.jpg",
        "urltwo",
      ],
      post_type: "About",
      post_location: "",
      post_date: "",
      post_text: "",
      post_whatwedo: "This is what we do: ",
      post_purpose: "This is our purpose: ",
      post_contact: ["twitterurl", "instagramurl", "facebookurl"],
      post_support_links: "",
      post_support_goal: "",
      club_name: "NBA Topshot Club",
      club_profileurl:
        "https://firebasestorage.googleapis.com/v0/b/cohyve.appspot.com/o/BannerPlaceholder.png?alt=media&token=c503d5fc-736a-42da-9504-5dfb95cd83ef",
      club_bannerurl: "",
      profileurl:
        "https://firebasestorage.googleapis.com/v0/b/cohyve.appspot.com/o/Placeholder.png?alt=media&token=83d8109a-c0ac-4cba-bd95-247ad79857da",
      bannerurl: "",
      username: "juliusceciliaFwJoujO3BISHxwiBlKhx0bH8DVh2",
      name: "Julius Cecilia",
      club_partner: null,
    },
    {
      post_id: 3,
      club_id: 36,
      title: "Test Support Post",
      description: "This is a support post",
      created_at: "2022-03-29T03:54:38.304Z",
      firebase_user_id: "FwJoujO3BISHxwiBlKhx0bH8DVh2",
      on_community: true,
      post_images: [
        "https://cloudfront-us-east-1.images.arcpublishing.com/advancelocal/M5QVGDYD2VC5VEWYBVCHJTIZDE.jpg",
        "urldos",
      ],
      post_type: "Support",
      post_location: "",
      post_date: "",
      post_text: "",
      post_whatwedo: "",
      post_purpose: "",
      post_contact: "",
      post_support_links: ["supporturlone", "supporturltwo"],
      post_support_goal: 5000,
      club_name: "NBA Topshot Club",
      club_profileurl:
        "https://firebasestorage.googleapis.com/v0/b/cohyve.appspot.com/o/BannerPlaceholder.png?alt=media&token=c503d5fc-736a-42da-9504-5dfb95cd83ef",
      club_bannerurl: "",
      profileurl:
        "https://firebasestorage.googleapis.com/v0/b/cohyve.appspot.com/o/Placeholder.png?alt=media&token=83d8109a-c0ac-4cba-bd95-247ad79857da",
      bannerurl: "",
      username: "juliusceciliaFwJoujO3BISHxwiBlKhx0bH8DVh2",
      name: "Julius Cecilia",
      club_partner: null,
    },
    {
      post_id: 4,
      club_id: 36,
      title: "Test Showcase Post",
      description: "This is a showcase post",
      created_at: "2022-03-29T03:56:13.272Z",
      firebase_user_id: "FwJoujO3BISHxwiBlKhx0bH8DVh2",
      on_community: false,
      post_images: [
        "https://cloudfront-us-east-1.images.arcpublishing.com/advancelocal/M5QVGDYD2VC5VEWYBVCHJTIZDE.jpg",
        "urltwo",
      ],
      post_type: "Showcase",
      post_location: "",
      post_date: "",
      post_text: "",
      post_whatwedo: "",
      post_purpose: "",
      post_contact: "",
      post_support_links: "",
      post_support_goal: "",
      club_name: "NBA Topshot Club",
      club_profileurl:
        "https://firebasestorage.googleapis.com/v0/b/cohyve.appspot.com/o/BannerPlaceholder.png?alt=media&token=c503d5fc-736a-42da-9504-5dfb95cd83ef",
      club_bannerurl: "",
      profileurl:
        "https://firebasestorage.googleapis.com/v0/b/cohyve.appspot.com/o/Placeholder.png?alt=media&token=83d8109a-c0ac-4cba-bd95-247ad79857da",
      bannerurl: "",
      username: "juliusceciliaFwJoujO3BISHxwiBlKhx0bH8DVh2",
      name: "Julius Cecilia",
      club_partner: null,
    },
    {
      post_id: 5,
      club_id: 36,
      title: "Test Announcement Post",
      description: "This is an announcement post",
      created_at: "2022-03-29T03:56:45.355Z",
      firebase_user_id: "FwJoujO3BISHxwiBlKhx0bH8DVh2",
      on_community: false,
      post_images: [
        "https://sodomojo.com/wp-content/uploads/getty-images/2017/07/1211682906.jpeg",
        "urltwo",
      ],
      post_type: "Announcement",
      post_location: "",
      post_date: "",
      post_text: "",
      post_whatwedo: "",
      post_purpose: "",
      post_contact: "",
      post_support_links: "",
      post_support_goal: "",
      club_name: "NBA Topshot Club",
      club_profileurl:
        "https://firebasestorage.googleapis.com/v0/b/cohyve.appspot.com/o/BannerPlaceholder.png?alt=media&token=c503d5fc-736a-42da-9504-5dfb95cd83ef",
      club_bannerurl: "",
      profileurl:
        "https://firebasestorage.googleapis.com/v0/b/cohyve.appspot.com/o/Placeholder.png?alt=media&token=83d8109a-c0ac-4cba-bd95-247ad79857da",
      bannerurl: "",
      username: "juliusceciliaFwJoujO3BISHxwiBlKhx0bH8DVh2",
      name: "Julius Cecilia",
      club_partner: 37,
    },
  ];

  return (
    <ClubOne>
      <ClubHeroOne>
        <ClubHeroOne.BannerSrc>
          <ClubHeroOne.InfoContainer>
            <CreateClub.Info>
              <CreateClub.BasicInfo>
                <CreateClub.ProfilePlaceholder
                  profileImageUrl={clubProfileImageUrl}
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
          {samplePostData &&
            samplePostData.map((post: any, key: any) => {
              return (
                <ClubOnePost key={post.post_id}>
                  {post.post_images ? (
                    <>
                      <ReactRouterLink to={""}>
                        <ClubOnePost.PhotosContainer
                          linkTo={""}
                          postImages={post.post_images}
                        />
                      </ReactRouterLink>
                      <ReactRouterLink to={""}>
                        <ClubOnePost.PostContainer
                          userProfile={post.profileurl}
                          clubProfile={post.club_profileurl}
                          onCommunity={post.on_community}
                          width="100%"
                          postType={post.post_type}
                          linkTo={""}
                          partners={post.post_partners}
                          position={post.user_position}
                          posted={post.created_at}
                        >
                          {post.post_type === "Partner Event" ? (
                            <ClubOnePost.PartnerEventPostContainer
                              linkTo={""}
                              text={post.post_text}
                              date={post.post_date}
                              location={post.post_location}
                            />
                          ) : post.post_type === "Event" ? (
                            <ClubOnePost.PartnerEventPostContainer
                              linkTo={""}
                              text={post.post_text}
                              date={post.post_date}
                              location={post.post_location}
                            />
                          ) : post.post_type === "Announcement" ? (
                            <ClubOnePost.AnnouncementPostContainer
                              linkTo={""}
                              text={post.post_text}
                            />
                          ) : post.post_type === "Showcase" ? (
                            <ClubOnePost.ShowcasePostContainer
                              linkTo={""}
                              text={post.post_text}
                            />
                          ) : post.post_type === "About" ? (
                            <ClubOnePost.AboutPostContainer
                              linkTo={""}
                              whatwedo={post.post_whatwedo}
                              purpose={post.post_purpose}
                              contact={post.post_contact}
                            />
                          ) : post.post_type === "Support" ? (
                            <ClubOnePost.SupportPostContainer
                              linkTo={""}
                              links={post.post_support_links}
                              goal={post.post_support_goal}
                              text={post.post_text}
                            />
                          ) : post.post_type === "Post" ? (
                            <ClubOnePost.ShowcasePostContainer
                              linkTo={""}
                              text={post.post_text}
                            />
                          ) : null}
                        </ClubOnePost.PostContainer>
                      </ReactRouterLink>
                    </>
                  ) : (
                    <ClubOnePost.PostContainer
                      userProfile={post.user_profile}
                      clubProfile={clubProfileImageUrl}
                      onCommunity={post.on_community}
                      width="100%"
                      postType={post.post_type}
                      linkTo={""}
                    >
                      {post.post_type === "Partner Event" ? (
                        <ClubOnePost.PartnerEventPostContainer
                          linkTo={""}
                          text={post.post_text}
                          date={post.post_date}
                          location={post.post_location}
                        />
                      ) : post.post_type === "Event" ? (
                        <ClubOnePost.PartnerEventPostContainer
                          linkTo={""}
                          text={post.post_text}
                          date={post.post_date}
                          location={post.post_location}
                        />
                      ) : post.post_type === "Announcement" ? (
                        <ClubOnePost.AnnouncementPostContainer
                          linkTo={""}
                          text={post.post_text}
                        />
                      ) : post.post_type === "Showcase" ? (
                        <ClubOnePost.ShowcasePostContainer
                          linkTo={""}
                          text={post.post_text}
                        />
                      ) : post.post_type === "About" ? (
                        <ClubOnePost.AboutPostContainer
                          linkTo={""}
                          whatwedo={post.post_whatwedo}
                          purpose={post.post_purpose}
                          contact={post.post_contact}
                        />
                      ) : post.post_type === "Support" ? (
                        <ClubOnePost.SupportPostContainer
                          linkTo={""}
                          links={post.post_support_links}
                          goal={post.post_support_goal}
                          text={post.post_text}
                        />
                      ) : post.post_type === "Post" ? (
                        <ClubOnePost.ShowcasePostContainer
                          linkTo={""}
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
