import React from "react";

import { Link as ReactRouterLink } from "react-router-dom";
import { ActionButton } from "../../components";
import { getRandomColor } from "../../getRandomColor";

import {
  Container,
  PhotosPostContainer,
  NoPhotosPostContainer,
  PostContainer,
  PhotosContainer,
  MoreImagesIcon,
  TopPostLayer,
  PartnerEventPostContainer,
  SponsorPostContainer,
  AnnouncementPostContainer,
  AboutPostContainer,
  ShowcasePostContainer,
  Partner,
} from "./styles/clubOnePost";

type Props = {
  children?: React.ReactNode;
  postImages?: any;
  postType?: string;
  linkTo?: string;
  width?: string;
  onCommunity?: boolean;
  clubProfile?: any;
  userProfile?: any;
  text?: string;
  date?: string;
  location?: string;
  locationDetails?: string;
  time?: string;
  partners?: any;
  position?: string;
  posted?: string;
  username?: string;
  profilePic?: string;
  user?: string;
  background?: string;
  whatwedo?: string;
  purpose?: string;
  contact?: string;
};

function copyEmail(emailLink: string) {
  console.log(emailLink);
}

export default function ClubOnePost({ children, ...restProps }: Props) {
  return (
    <Container {...restProps}>
      {children}
      {/* {postImages ? (
        <PhotosPostContainer
          linkTo={linkTo}
          postImages={postImages}
          postType={postType}
          onCommunity={onCommunity}
          clubProfile={clubProfile}
          userProfile={userProfile}
        />
      ) : (
        <NoPhotosPostContainer
          linkTo={linkTo}
          postType={postType}
          onCommunity={onCommunity}
          clubProfile={clubProfile}
          userProfile={userProfile}
        />
      )} */}
    </Container>
  );
}

ClubOnePost.PhotosPostContainer = function ClubOnePostPhotosPostContainer({
  children,
  ...restProps
}: Props) {
  return (
    <PhotosPostContainer {...restProps}>
      <>
        {/* <ReactRouterLink to={linkTo}>
          <PhotosContainer linkTo={linkTo} postImages={postImages} />
        </ReactRouterLink>
        <ReactRouterLink to={linkTo}>
          <PostContainer
            userProfile={userProfile}
            clubProfile={clubProfile}
            onCommunity={onCommunity}
            width="80%"
            postType={postType}
            linkTo={linkTo}
          />
        </ReactRouterLink> */}
        {children}
      </>
    </PhotosPostContainer>
  );
};

ClubOnePost.PhotosContainer = function ClubOnePostPhotosContainer({
  linkTo,
  postImages,
  children,
  ...restProps
}: Props) {
  return (
    <PhotosContainer {...restProps}>
      <img src={postImages[0]} alt="Profile" />
      {postImages.length > 1 && <ClubOnePost.MoreImagesIcon linkTo={linkTo} />}
    </PhotosContainer>
  );
};

ClubOnePost.MoreImagesIcon = function ClubOnePostMoreImagesIcon({
  linkTo,
  children,
  ...restProps
}: Props) {
  return (
    <ReactRouterLink to={linkTo}>
      <MoreImagesIcon {...restProps}>
        <i className="fa-solid fa-images"></i>
      </MoreImagesIcon>
    </ReactRouterLink>
  );
};

ClubOnePost.NoPhotosPostContainer = function ClubOnePostNoPhotosPostContainer({
  children,
  ...restProps
}: Props) {
  return (
    <NoPhotosPostContainer {...restProps}>
      {children}
      {/* <PostContainer width="100%" /> */}
    </NoPhotosPostContainer>
  );
};

ClubOnePost.PostContainer = function ClubOnePostPostContainer({
  partners,
  text,
  linkTo,
  userProfile,
  clubProfile,
  onCommunity,
  width,
  postType,
  children,
  ...restProps
}: Props) {
  return (
    <PostContainer width={width} {...restProps}>
      <ClubOnePost.TopPostLayer
        linkTo={linkTo}
        userProfile={userProfile}
        clubProfile={clubProfile}
        onCommunity={onCommunity}
        postType={postType}
        partners={partners}
      />
      {/* {postType === "Partner Event" ? (
        <ClubOnePost.PartnerEventPostContainer linkTo={linkTo} text={text} date={date} location={location} />
      ) : postType === "Event" ? (
        <ClubOnePost.PartnerEventPostContainer linkTo={linkTo} text={text} date={date} location={location} />
      ) : postType === "Announcement" ? (
        <ClubOnePost.AnnouncementPostContainer linkTo={linkTo} text={text} />
      ) : postType === "Showcase" ? (
        <ClubOnePost.ShowcasePostContainer linkTo={linkTo} text={text} />
      ) : postType === "About" ? (
        <ClubOnePost.AboutPostContainer linkTo={linkTo} whatwedo={whatwedo} purpose={purpose} contact={contact} />
      ) : postType === "Sponsor" ? (
        <ClubOnePost.SponsorPostContainer linkTo={linkTo} links={links} goal={goal} text={text} />
      ) : null} */}
      {children}
      <div className="see_more">
        <ReactRouterLink to={linkTo}>
          <p>See More</p>
        </ReactRouterLink>
      </div>
    </PostContainer>
  );
};

ClubOnePost.PartnerEventPostContainer =
  function ClubOnePostPartnerEventPostContainer({
    linkTo,
    time,
    date,
    location,
    locationDetails,
    text,
    children,
    ...restProps
  }: Props) {
    return (
      <PartnerEventPostContainer {...restProps}>
        <div className="text">
          <p>{text}</p>
        </div>
        <div className="date_and_location">
          <div className="date">
            <i className="fa-solid fa-calendar-day"></i>
            <div className="date_details">
              <p>Meetup Time</p>
              <h2>{date}</h2>
              <h3>{time}</h3>
            </div>
          </div>
          <div className="location">
            <i className="fa-solid fa-compass"></i>
            <div className="location_details">
              <p>Meetup Location</p>
              <h2>{location}</h2>
              <h3>{locationDetails}</h3>
            </div>
          </div>
        </div>
      </PartnerEventPostContainer>
    );
  };

ClubOnePost.AnnouncementPostContainer =
  function ClubOnePostAnnouncementPostContainer({
    text,
    children,
    ...restProps
  }: Props) {
    return (
      <AnnouncementPostContainer {...restProps}>
        {text}
      </AnnouncementPostContainer>
    );
  };

ClubOnePost.ShowcasePostContainer = function ClubOnePostShowcasePostContainer({
  text,
  children,
  ...restProps
}: Props) {
  return <ShowcasePostContainer {...restProps}>{text}</ShowcasePostContainer>;
};

ClubOnePost.AboutPostContainer = function ClubOnePostAboutPostContainer({
  twitterLink,
  emailLink,
  whatwedo,
  purpose,
  contact,
  children,
  ...restProps
}: Props) {
  return (
    <AboutPostContainer {...restProps}>
      <div className="what_we_do">
        <h2>What we do</h2>
        <p>{whatwedo}</p>
      </div>
      <div className="purpose">
        <h2>Purpose</h2>
        <p>{purpose}</p>
      </div>
      <div className="contact">
        <h2>Contact</h2>
        {emailLink && (
          <button onClick={() => copyEmail(emailLink)}>
            <i className="fa-solid fa-envelope-open-text"></i>
          </button>
        )}
        {twitterLink && (
          <ReactRouterLink to={twitterLink}>
            <button>
              <i className="fa-solid fa-envelope-open-text"></i>
            </button>
          </ReactRouterLink>
        )}
      </div>
    </AboutPostContainer>
  );
};

ClubOnePost.SponsorPostContainer = function ClubOnePostSponsorPostContainer({
  children,
  ...restProps
}: Props) {
  return <SponsorPostContainer {...restProps}>{children}</SponsorPostContainer>;
};

ClubOnePost.TopPostLayer = function ClubOnePostTopPostLayerContainer({
  position,
  posted,
  username,
  partners,
  linkTo,
  userProfile,
  clubProfile,
  onCommunity,
  postType,
  children,
  ...restProps
}: Props) {
  return (
    <TopPostLayer postType={postType} {...restProps}>
      <div className="club_and_user">
        {onCommunity && (
          <>
            <img src={clubProfile} alt="Club Profile" />
            <div className="border"></div>
          </>
        )}
        <div className="user">
          <img src={userProfile} alt="User Profile" />
          <div className="user_data">
            <h3>{username}</h3>
            <div className="user_data_details">
              <p>
                {position} • {posted}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="partners_and_button">
        {/* Partners store jsonB as partners in postgresl */}
        {partners &&
          partners.map((partner: any, key: any) => {
            return (
              <ClubOnePost.Partner
                key={key}
                profilePic={partner.profilePic}
                user={partner.user.name}
                background={getRandomColor()}
              />
            );
          })}
        <ReactRouterLink to={linkTo}>
          <ActionButton
            color="#FAFCFA"
            onClick={() => null}
            background={
              postType === "Partner Event"
                ? "linear-gradient(87.85deg, #F64F59 1.81%, #C471ED 51%, #12C2E9 98.19%);"
                : postType === "Event"
                ? "linear-gradient(87.85deg, #12C2E9 1.81%, #C471ED 51%, #F64F59 98.19%);"
                : postType === "Announcement"
                ? "linear-gradient(87.85deg, #FEAC5E 1.81%, #C779D0 51%, #4BC0C8 98.19%);"
                : postType === "Showcase"
                ? "linear-gradient(87.85deg, #A770EF 1.81%, #CF8BF3 51%, #FDB99B 98.19%);"
                : postType === "About"
                ? "linear-gradient(94.39deg, #58A4B0 8.09%, #AFD5AA 93.12%);"
                : postType === "Sponsor"
                ? "linear-gradient(87.85deg, #7F7FD5 1.81%, #86A8E7 50.62%, #9BE0DC 98.19%);"
                : null
            }
          >
            {postType}
          </ActionButton>
        </ReactRouterLink>
      </div>
    </TopPostLayer>
  );
};

ClubOnePost.Partner = function ClubOnePostPartner({
  background,
  profilePic,
  user,
  children,
  ...restProps
}: Props) {
  return (
    <Partner background={background} {...restProps}>
      {profilePic !== "" && <img src={profilePic} alt={user} />}
    </Partner>
  );
};
