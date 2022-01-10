import React, { useState } from "react";
import { CreateClub, ActionButton } from "../components";
import SchoolData from "../schools.json";

export function CreateClubContainer() {
  const states = [
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
  const categories = [
    "Academic",
    "Business",
    "Cultural/International",
    "Engineering",
    "Environmental",
    "Fraternities & Sororities",
    "Gaming/Esports",
    "Graduate/Professional",
    "Health Sciences",
    "Honorary",
    "Law",
    "Medical/Dental/Nursing",
    "Performing",
    "Political",
    "Social Action",
    "Recreation",
    "Religious/Spiritual",
    "Sciences",
    "Special Interest",
    "Sports",
    "Student Government",
  ];
  const years = [
    2022,
    2021,
    2020,
    2019,
    2018,
    2017,
    2016,
    2015,
    2014,
    2013,
    2012,
    2011,
    2010,
    2009,
    2008,
    2007,
    2006,
    2005,
    2004,
    2003,
    2002,
    2001,
    2000,
    "< 2000",
  ];

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const [showStates, setShowStates] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [showYears, setShowYears] = useState(false);
  const [state, setState] = useState(states[0]);
  const [category, setCategory] = useState(categories[0]);
  const [school, setSchool] = useState("");
  const [clubName, setClubName] = useState("");
  const [description, setDescription] = useState("");
  const [established, setEstablished] = useState(years[0]);

  const handleFilter = (event: any) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = SchoolData.filter((value: any) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const setSchoolValue = (school: string) => {
    setFilteredData([]);
    setWordEntered(school);
    setSchool(school);
  };

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
            title="Club Name*"
            type="text"
            placeholder="Club Name"
            value={clubName}
            onChange={(e: any) => setClubName(e.target.value)}
          />
          <CreateClub.DropdownContainer>
            <CreateClub.Dropdown
              onClick={() => {
                setShowCategories(!showCategories);
              }}
              title="Category*"
              value={category}
            ></CreateClub.Dropdown>
            <CreateClub.DropdownItems
              onBlur={() => {
                setShowCategories(false);
              }}
              showItems={showCategories}
            >
              {categories.map((category) => (
                <CreateClub.DropdownItem
                  onClick={() => {
                    setShowCategories(false);
                    setCategory(category);
                  }}
                  onBlur={() => {
                    setShowCategories(false);
                  }}
                >
                  {category}
                </CreateClub.DropdownItem>
              ))}
            </CreateClub.DropdownItems>
          </CreateClub.DropdownContainer>
        </CreateClub.Inputs>
        <CreateClub.Inputs>
          <CreateClub.LargeInput
            name="description"
            title="Description"
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e: any) => setDescription(e.target.value)}
          />
        </CreateClub.Inputs>
        <CreateClub.Inputs>
          <CreateClub.SearchContainer>
            <CreateClub.SearchInput
              name="school"
              title="School*"
              type="text"
              placeholder="School"
              value={wordEntered}
              onChange={handleFilter}
            />
            {filteredData.length !== 0 && (
              <CreateClub.SearchItems>
                {filteredData.slice(0, 15).map((value, key) => {
                  return (
                    <CreateClub.SearchItem
                      onClick={() => setSchoolValue(value.name)}
                    >
                      {value.name}
                    </CreateClub.SearchItem>
                  );
                })}
              </CreateClub.SearchItems>
            )}
          </CreateClub.SearchContainer>

          <CreateClub.DropdownContainer>
            <CreateClub.Dropdown
              onClick={() => {
                setShowYears(!showYears);
              }}
              title="Year Established*"
              value={established}
            ></CreateClub.Dropdown>
            <CreateClub.DropdownItems
              onBlur={() => {
                setShowYears(false);
              }}
              showItems={showYears}
            >
              {years.map((year: any) => (
                <CreateClub.DropdownItem
                  onClick={() => {
                    setShowYears(false);
                    setEstablished(year);
                  }}
                  onBlur={() => {
                    setShowYears(false);
                  }}
                >
                  {year}
                </CreateClub.DropdownItem>
              ))}
            </CreateClub.DropdownItems>
          </CreateClub.DropdownContainer>
        </CreateClub.Inputs>
        <CreateClub.Inputs>
          <CreateClub.DropdownContainer>
            <CreateClub.Dropdown
              onClick={() => {
                setShowStates(!showStates);
                console.log(showStates);
              }}
              title="State*"
              value={state}
            ></CreateClub.Dropdown>
            <CreateClub.DropdownItems
              onBlur={() => {
                setShowStates(false);
              }}
              showItems={showStates}
            >
              {states.map((state) => (
                <CreateClub.DropdownItem
                  onClick={() => {
                    setShowStates(false);
                    setState(state);
                  }}
                  onBlur={() => {
                    setShowStates(false);
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
