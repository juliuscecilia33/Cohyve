import React from "react";

import { Link as ReactRouterLink } from "react-router-dom";
import { ActionButton } from "../../components";
import { getRandomColor } from "../../getRandomColor";

import {
  Container,
  PostContainer,
  PhotosContainer,
  MoreImagesIcon,
  TopPostLayer,
  PartnerEventPostContainer,
  SupportPostContainer,
  AnnouncementPostContainer,
  AboutPostContainer,
  ShowcasePostContainer,
  Partner,
  ButtonContainer,
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
  twitterLink?: string;
  emailLink?: string;
  instagramLink?: string;
  facebookLink?: string;
  otherLink?: string;
  links?: any;
  goal?: number;
  isAnnouncement?: boolean;
  buttonBackground?: string;
};

type ButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  buttonBackground?: string;
  children?: React.ReactNode;
};

function copyEmail(emailLink: string) {
  console.log(emailLink);
}

export default function ClubOnePost({ children, ...restProps }: Props) {
  return <Container {...restProps}>{children}</Container>;
}

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

ClubOnePost.PostContainer = function ClubOnePostPostContainer({
  isAnnouncement,
  partners,
  text,
  linkTo,
  userProfile,
  clubProfile,
  onCommunity,
  width,
  postType,
  position,
  children,
  posted,
  username,
  ...restProps
}: Props) {
  return (
    <PostContainer
      isAnnouncement={postType === "Announcement"}
      width={width}
      {...restProps}
    >
      <ClubOnePost.TopPostLayer
        linkTo={linkTo}
        userProfile={userProfile}
        clubProfile={clubProfile}
        onCommunity={onCommunity}
        postType={postType}
        partners={partners}
        position={position}
        posted={posted}
        username={username}
      />
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
          <div className="date_and_location_container">
            <i className="fa-solid fa-calendar-day"></i>
            <div className="date_and_location_details">
              <p>Meetup Time</p>
              <h2>{date}</h2>
              <h3>{time}</h3>
            </div>
          </div>
          <div className="date_and_location_container">
            <i className="fa-solid fa-compass"></i>
            <div className="date_and_location_details">
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
        <p>{text}</p>
      </AnnouncementPostContainer>
    );
  };

ClubOnePost.ShowcasePostContainer = function ClubOnePostShowcasePostContainer({
  text,
  children,
  ...restProps
}: Props) {
  return (
    <ShowcasePostContainer {...restProps}>
      <p>{text}</p>
    </ShowcasePostContainer>
  );
};

ClubOnePost.AboutPostContainer = function ClubOnePostAboutPostContainer({
  twitterLink,
  emailLink,
  instagramLink,
  facebookLink,
  otherLink,
  whatwedo,
  purpose,
  contact,
  children,
  ...restProps
}: Props) {
  return (
    <AboutPostContainer {...restProps}>
      <div className="heading_and_text">
        <h2>What we do</h2>
        <p>{whatwedo}</p>
      </div>
      <div className="heading_and_text">
        <h2>Purpose</h2>
        <p>{purpose}</p>
      </div>
      <div className="contact">
        <h2>Contact</h2>
        <div className="buttons">
          {emailLink && (
            <ClubOnePost.ButtonContainer
              onClick={() => copyEmail(emailLink)}
              buttonBackground="linear-gradient(94.39deg, #58A4B0 8.09%, #AFD5AA 93.12%);"
            >
              <i className="fa-solid fa-envelope-open-text"></i>
            </ClubOnePost.ButtonContainer>
          )}
          {twitterLink && (
            <ReactRouterLink to={twitterLink}>
              <ClubOnePost.ButtonContainer
                onClick={() => null}
                buttonBackground="linear-gradient(87.85deg, #7F7FD5 1.81%, #86A8E7 50.62%, #9BE0DC 98.19%);"
              >
                <i className="fa-brands fa-twitter"></i>
              </ClubOnePost.ButtonContainer>
            </ReactRouterLink>
          )}
          {instagramLink && (
            <ReactRouterLink to={instagramLink}>
              <ClubOnePost.ButtonContainer
                onClick={() => null}
                buttonBackground="linear-gradient(87.85deg, #FEAC5E 1.81%, #C779D0 51%, #4BC0C8 98.19%);"
              >
                <i className="fa-brands fa-twitter"></i>
              </ClubOnePost.ButtonContainer>
            </ReactRouterLink>
          )}
          {facebookLink && (
            <ReactRouterLink to={facebookLink}>
              <ClubOnePost.ButtonContainer
                onClick={() => null}
                buttonBackground="linear-gradient(87.85deg, #A770EF 1.81%, #CF8BF3 51%, #FDB99B 98.19%);"
              >
                <i className="fa-brands fa-facebook"></i>
              </ClubOnePost.ButtonContainer>
            </ReactRouterLink>
          )}
          {otherLink && (
            <ReactRouterLink to={otherLink}>
              <ClubOnePost.ButtonContainer
                onClick={() => null}
                buttonBackground="linear-gradient(87.85deg, #12C2E9 1.81%, #C471ED 51%, #F64F59 98.19%);"
              >
                <i className="fa-solid fa-globe"></i>
              </ClubOnePost.ButtonContainer>
            </ReactRouterLink>
          )}
        </div>
      </div>
    </AboutPostContainer>
  );
};

ClubOnePost.ButtonContainer = function ClubOnePostButtonContainer({
  onClick,
  buttonBackground,
  children,
  ...restProps
}: ButtonProps) {
  return (
    <ButtonContainer
      onClick={onClick}
      buttonBackground={buttonBackground}
      {...restProps}
    >
      {children}
    </ButtonContainer>
  );
};

ClubOnePost.SupportPostContainer = function ClubOnePostSupportPostContainer({
  linkTo,
  links,
  goal,
  text,
  children,
  ...restProps
}: Props) {
  return (
    <SupportPostContainer {...restProps}>
      <div className="sponsor_actions">
        <p>Goal: ${goal}</p>
        <div className="links_buttons">
          {links &&
            links.map((link: any, key: any) => {
              return (
                <ReactRouterLink to={link.url}>
                  <button>{link.title}</button>
                </ReactRouterLink>
              );
            })}
        </div>
      </div>
      <div className="border"></div>
      <div className="sponsor_details">{text}</div>
    </SupportPostContainer>
  );
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
    <TopPostLayer {...restProps}>
      <div className="club_and_user">
        {onCommunity && (
          <div className="club">
            <img src={clubProfile} alt="Club Profile" />
            <div className="border"></div>
          </div>
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

        {partners && (
          <div className="partners">
            {partners.map((partner: any, key: any) => {
              return (
                <ReactRouterLink to={partner}>
                  <ClubOnePost.Partner
                    key={key}
                    profilePic={partner.profilePic}
                    user={partner.user.name}
                    background={getRandomColor()}
                  />
                </ReactRouterLink>
              );
            })}
          </div>
        )}

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
              : postType === "Support"
              ? "linear-gradient(87.85deg, #7F7FD5 1.81%, #86A8E7 50.62%, #9BE0DC 98.19%);"
              : postType === "Post"
              ? "linear-gradient(94.39deg, #4D566A 8.09%, #091F2E 93.12%);"
              : null
          }
        >
          <ReactRouterLink to={linkTo}>{postType}</ReactRouterLink>
        </ActionButton>
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
