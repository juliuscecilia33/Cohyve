import React, { useState } from "react";
import { CreateClub, ActionButton } from "../components";

export function CreateClubContainer() {
  let states = [
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  const [showItems, setShowItems] = useState(false);
  const [state, setState] = useState(states[0]);

  return (
    <CreateClub>
      <CreateClub.Hero>
        <CreateClub.Heading>
          create<span>club</span>
        </CreateClub.Heading>
        <CreateClub.PreviewText />
        <CreateClub.ImageBanner imageUrl={null}>
          <CreateClub.InfoContainer>
            <CreateClub.Info>
              <CreateClub.BasicInfo>
                <CreateClub.ProfilePic profileImageUrl={null} />
                <CreateClub.InfoText>
                  <CreateClub.Name name="Club Name" year="Year" />
                  <CreateClub.Description>Description</CreateClub.Description>
                  <CreateClub.SchoolAndLocation
                    school="School"
                    location="Location"
                  />
                </CreateClub.InfoText>
              </CreateClub.BasicInfo>
              <CreateClub.ButtonsAndLinks>
                <CreateClub.Buttons>
                  <ActionButton background="linear-gradient(94.39deg, #58A4B0 8.09%, #AFD5AA 93.12%);">
                    Follow
                  </ActionButton>
                  <ActionButton background="linear-gradient(94.39deg, #F5E7AB 8.09%, #C5B05A 93.12%);">
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
          </CreateClub.InfoContainer>
        </CreateClub.ImageBanner>
      </CreateClub.Hero>
      <CreateClub.Section>
        <CreateClub.Inputs>
          <CreateClub.HalfInput
            name="clubName"
            title="Club Name"
            type="text"
            placeholder="Club Name"
            value=""
            onChange={null}
          />
          <CreateClub.HalfInput
            name="category"
            title="Category"
            type="text"
            placeholder="Category"
            value=""
            onChange={null}
          />
        </CreateClub.Inputs>
        <CreateClub.Inputs>
          <CreateClub.LargeInput
            name="description"
            title="Description"
            type="text"
            placeholder="Description"
            value=""
            onChange={null}
          />
        </CreateClub.Inputs>
        <CreateClub.Inputs>
          <CreateClub.HalfInput
            name="school"
            title="School"
            type="text"
            placeholder="School"
            value=""
            onChange={null}
          />
          <CreateClub.HalfInput
            name="established"
            title="Established"
            type="text"
            placeholder="Established"
            value=""
            onChange={null}
          />
        </CreateClub.Inputs>
        <CreateClub.Inputs>
          <CreateClub.DropdownContainer>
            <CreateClub.Dropdown
              onClick={() => {
                setShowItems(!showItems);
                console.log(showItems);
              }}
              title="State"
              value={state}
            ></CreateClub.Dropdown>
            <CreateClub.DropdownItems
              onBlur={() => {
                setShowItems(false);
              }}
              showItems={showItems}
            >
              {states.map((state) => (
                <CreateClub.DropdownItem
                  onClick={() => {
                    setShowItems(false);
                    setState(state);
                  }}
                  onBlur={() => {
                    setShowItems(false);
                  }}
                >
                  {state}
                </CreateClub.DropdownItem>
              ))}
            </CreateClub.DropdownItems>
          </CreateClub.DropdownContainer>
          <CreateClub.SmInputs>
            <CreateClub.QuarterInput
              name="uploadProfile"
              title="Upload Club Profile"
              type="text"
              placeholder="Profile"
              value=""
              onChange={null}
            />
            <CreateClub.QuarterInput
              name="uploadBanner"
              title="Upload Banner"
              type="text"
              placeholder="Upload Club Banner"
              value=""
              onChange={null}
            />
          </CreateClub.SmInputs>
        </CreateClub.Inputs>
        <CreateClub.Inputs>
          <CreateClub.HalfInput
            name="website"
            title="Website"
            type="text"
            placeholder="Website"
            value=""
            onChange={null}
          />
          <CreateClub.HalfInput
            name="twitter"
            title="Twitter"
            type="text"
            placeholder="Twitter"
            value=""
            onChange={null}
          />
        </CreateClub.Inputs>
        <CreateClub.Inputs>
          <CreateClub.HalfInput
            name="instagram"
            title="Instagram"
            type="text"
            placeholder="Instagram"
            value=""
            onChange={null}
          />
          <CreateClub.HalfInput
            name="facebook"
            title="Facebook"
            type="text"
            placeholder="Facebook"
            value=""
            onChange={null}
          />
        </CreateClub.Inputs>
        <CreateClub.Inputs>
          <CreateClub.HalfInput
            name="email"
            title="Email"
            type="text"
            placeholder="Email"
            value=""
            onChange={null}
          />
        </CreateClub.Inputs>
      </CreateClub.Section>
    </CreateClub>
  );
}
