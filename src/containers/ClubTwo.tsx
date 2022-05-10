import React, { useState } from "react";
import { ClubTwoHero, ActionButton } from "../components";
import { Link as ReactRouterLink } from "react-router-dom";
import { getTimeSince } from "../getTimeSince";

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

  console.log(getTimeSince("2022-03-29T03:54:38.304Z"));

  const samplePostData = [
    {
      post_id: 5,
      club_id: 36,
      title: "Test Announcement Post",
      description: "This is an announcement post",
      created_at: "2022-03-29T03:56:45.355Z",
      firebase_user_id: "FwJoujO3BISHxwiBlKhx0bH8DVh2",
      on_community: false,
      post_images: [
        "https://cloudfront-us-east-1.images.arcpublishing.com/advancelocal/M5QVGDYD2VC5VEWYBVCHJTIZDE.jpg",
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
      profileurl:
        "https://firebasestorage.googleapis.com/v0/b/cohyve.appspot.com/o/Placeholder.png?alt=media&token=83d8109a-c0ac-4cba-bd95-247ad79857da",
      username: "juliusceciliaFwJoujO3BISHxwiBlKhx0bH8DVh2",
      name: "Julius Cecilia",
      club_partner: 37,
      role: "Owner",
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
      profileurl:
        "https://firebasestorage.googleapis.com/v0/b/cohyve.appspot.com/o/Placeholder.png?alt=media&token=83d8109a-c0ac-4cba-bd95-247ad79857da",
      username: "juliusceciliaFwJoujO3BISHxwiBlKhx0bH8DVh2",
      name: "Julius Cecilia",
      club_partner: "",
      role: "Owner",
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
      profileurl:
        "https://firebasestorage.googleapis.com/v0/b/cohyve.appspot.com/o/Placeholder.png?alt=media&token=83d8109a-c0ac-4cba-bd95-247ad79857da",
      username: "juliusceciliaFwJoujO3BISHxwiBlKhx0bH8DVh2",
      name: "Julius Cecilia",
      club_partner: "",
      role: "Owner",
    },
    {
      post_id: 1,
      club_id: 36,
      title: "Test Partner Event Post",
      description: "This is a partner event",
      created_at: "2022-03-29T02:51:40.697Z",
      firebase_user_id: "FwJoujO3BISHxwiBlKhx0bH8DVh2",
      on_community: false,
      post_images: [
        "https://cloudfront-us-east-1.images.arcpublishing.com/advancelocal/M5QVGDYD2VC5VEWYBVCHJTIZDE.jpg",
        "thisisurl2",
      ],
      post_type: "Partner Event",
      post_location: "Paccar Hall",
      post_location_details: "Room 442",
      post_date: "03-01-2022",
      post_date_details: "03:00pm",
      post_text: "Please join us",
      post_whatwedo: "",
      post_purpose: "",
      post_contact: "",
      post_support_links: "",
      post_support_goal: "",
      club_name: "NBA Topshot Club",
      club_profileurl:
        "https://firebasestorage.googleapis.com/v0/b/cohyve.appspot.com/o/BannerPlaceholder.png?alt=media&token=c503d5fc-736a-42da-9504-5dfb95cd83ef",
      profileurl:
        "https://firebasestorage.googleapis.com/v0/b/cohyve.appspot.com/o/Placeholder.png?alt=media&token=83d8109a-c0ac-4cba-bd95-247ad79857da",
      username: "juliusceciliaFwJoujO3BISHxwiBlKhx0bH8DVh2",
      name: "Julius Cecilia",
      club_partner: "",
      role: "Owner",
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
      profileurl:
        "https://firebasestorage.googleapis.com/v0/b/cohyve.appspot.com/o/Placeholder.png?alt=media&token=83d8109a-c0ac-4cba-bd95-247ad79857da",
      username: "juliusceciliaFwJoujO3BISHxwiBlKhx0bH8DVh2",
      name: "Julius Cecilia",
      club_partner: "",
      role: "Owner",
    },
  ];

  return <ClubTwoHero></ClubTwoHero>;
}
