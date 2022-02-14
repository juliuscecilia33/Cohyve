import React, { useState } from "react";
import { Hero, Search, Filter, Clubs, ActionButton } from "../components";
import { ClubBlockContainer, FilterListContainer } from "../containers";
import Banner from "../images/BannerTest.jpeg";
import Profile from "../images/Profile.jpeg";
import { Link as ReactRouterLink } from "react-router-dom";

export function ClubsContainer() {
  const members = [
    {
      profilePic: Profile,
      user: "JarredKelenic",
    },
    {
      profilePic: "",
      user: "JulioRodriguez",
    },
    {
      profilePic: Profile,
      user: "JuanSoto",
    },
    {
      profilePic: Profile,
      user: "MikeTrout",
    },
    {
      profilePic: Profile,
      user: "FernandoTatis",
    },
    {
      profilePic: Profile,
      user: "RafaelDevers",
    },
    {
      profilePic: Profile,
      user: "LuisRobert",
    },
  ];

  const [searchedData, setSearchedData] = useState([]);
  const [clubSearched, setClubSearched] = useState("");
  const [filterSelected, setFilterSelected] = useState(null);
  const [clubFilters, setClubFilters] = useState(null);
  const [yearFilters, setYearFilters] = useState(null);
  const [schoolFilters, setSchoolFilters] = useState(null);
  const [categoryFilters, setCategoryFilters] = useState(null);
  const [stateFilters, setStateFilters] = useState(null);

  console.log("club filters: ", clubFilters);
  console.log("year filters: ", yearFilters);
  console.log("school filters: ", schoolFilters);
  console.log("category filters: ", categoryFilters);
  console.log("state filters: ", stateFilters);

  const handleFilter = (event: any) => {
    const searchClub = event.target.value;
    setClubSearched(searchClub);

    // const newFilter = SchoolData.filter((value: any) => {
    //   return value.name.toLowerCase().includes(searchWord.toLowerCase());
    // });

    // if (searchWord === "") {
    //   setFilteredData([]);
    // } else {
    //   setFilteredData(newFilter);
    // }
  };

  const filterClickHandler = (param: string) => {
    if (filterSelected === param) {
      setFilterSelected(null);
    } else {
      setFilterSelected(param);
    }
  };

  const clubsOptions = ["All Clubs", "Most Popular", "Recently Added"];
  const schoolOptions = ["All Schools", "Colleges", "High Schools"];
  const yearOptions = [
    "2022",
    "2021",
    "2020",
    "2019",
    "2018",
    "2017",
    "2016",
    "2015",
    "2014",
    "2013",
    "2012",
    "2011",
    "2010",
    "2009",
    "2008",
    "2007",
    "2006",
    "2005",
    "2004",
    "2003",
    "2002",
    "2001",
    "2000",
    "< 2000",
  ];
  const categoryOptions = [
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
  const stateOptions = [
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

  return (
    <>
      <Clubs>
        <Hero>
          <Hero.Heading>
            popular<span>clubs</span>
          </Hero.Heading>
          <Clubs.ClubsRow>
            <ClubBlockContainer
              rankCount={1}
              ranked={true}
              clubName="Music Club"
              src={Banner}
              verified={true}
              followers={50}
              memberCount={12}
              members={members.slice(0, 4)}
              school="University of Washington"
            />
            <ClubBlockContainer
              rankCount={2}
              ranked={true}
              clubName="Chemistry Club"
              src={Banner}
              verified={true}
              followers={50}
              memberCount={12}
              members={members.slice(0, 4)}
              school="University of California, Irvine"
            />
            <ClubBlockContainer
              rankCount={3}
              ranked={true}
              clubName="Baseball Club"
              src={Banner}
              verified={true}
              followers={50}
              memberCount={12}
              members={members.slice(0, 4)}
              school="University of California, Riverside"
            />
            <ClubBlockContainer
              rankCount={4}
              ranked={true}
              clubName="Basketball Club"
              src={Banner}
              verified={true}
              followers={50}
              memberCount={12}
              members={members.slice(0, 4)}
              school="Duke University"
            />
          </Clubs.ClubsRow>
        </Hero>
        <Search
          name="clubs"
          type="text"
          placeholder="Search for a club"
          value={clubSearched}
          onChange={handleFilter}
        />
        {searchedData.length !== 0 && (
          <Search.DropdownItems>
            {searchedData.slice(0, 8).map((value, key) => {
              return (
                <Search.DropdownClubItem onClick={null}>
                  {value.name}
                </Search.DropdownClubItem>
              );
            })}
          </Search.DropdownItems>
        )}
        <Clubs.CreateButtonContainer>
          <ReactRouterLink to={null}>
            <ActionButton background="linear-gradient(94.39deg, #58a4b0 8.09%, #afd5aa 93.12%), #284b63;">
              Create Club
            </ActionButton>
          </ReactRouterLink>
        </Clubs.CreateButtonContainer>
        <Clubs.SectionContainer>
          <Filter horizontal={false}>
            <Filter.Block title="Clubs">
              <FilterListContainer
                options={clubsOptions}
                placeholder="Filter Clubs"
                setState={setClubFilters}
              />
            </Filter.Block>
            <Filter.Block title="Schools">
              <FilterListContainer
                options={schoolOptions}
                placeholder="Filter By School"
                setState={setSchoolFilters}
              />
            </Filter.Block>
            <Filter.Block title="Established">
              <FilterListContainer
                options={yearOptions}
                placeholder="Filter By Year"
                setState={setYearFilters}
              />
            </Filter.Block>
            <Filter.Block title="Category">
              <FilterListContainer
                options={categoryOptions}
                placeholder="Filter By Category"
                setState={setCategoryFilters}
              />
            </Filter.Block>
            <Filter.Block title="State">
              <FilterListContainer
                options={stateOptions}
                placeholder="Filter By State"
                setState={setStateFilters}
              />
            </Filter.Block>
            <ReactRouterLink to={null}>
              <ActionButton background="linear-gradient(94.39deg, #58a4b0 8.09%, #afd5aa 93.12%), #284b63;">
                Create Club
              </ActionButton>
            </ReactRouterLink>
          </Filter>
          <Clubs.ClubsContainer>
            <ClubBlockContainer
              rankCount={null}
              ranked={false}
              clubName="Ping Pong Club"
              src={Banner}
              verified={false}
              followers={50}
              memberCount={12}
              members={members.slice(0, 4)}
              school="University of Washington"
            />
            <ClubBlockContainer
              rankCount={null}
              ranked={false}
              clubName="Ping Pong Club"
              src={Banner}
              verified={false}
              followers={50}
              memberCount={12}
              members={members.slice(0, 4)}
              school="University of Washington"
            />
            <ClubBlockContainer
              rankCount={null}
              ranked={false}
              clubName="Ping Pong Club"
              src={Banner}
              verified={false}
              followers={50}
              memberCount={12}
              members={members.slice(0, 4)}
              school="University of Washington"
            />
            <ClubBlockContainer
              rankCount={null}
              ranked={false}
              clubName="Ping Pong Club"
              src={Banner}
              verified={false}
              followers={50}
              memberCount={12}
              members={members.slice(0, 4)}
              school="University of Washington"
            />
            <ClubBlockContainer
              rankCount={null}
              ranked={false}
              clubName="Ping Pong Club"
              src={Banner}
              verified={false}
              followers={50}
              memberCount={12}
              members={members.slice(0, 4)}
              school="University of Washington"
            />
            <ClubBlockContainer
              rankCount={null}
              ranked={false}
              clubName="Ping Pong Club"
              src={Banner}
              verified={false}
              followers={50}
              memberCount={12}
              members={members.slice(0, 4)}
              school="University of Washington"
            />
            <ClubBlockContainer
              rankCount={null}
              ranked={false}
              clubName="Ping Pong Club"
              src={Banner}
              verified={true}
              followers={50}
              memberCount={12}
              members={members.slice(0, 4)}
              school="University of Washington"
            />
            <ClubBlockContainer
              rankCount={null}
              ranked={false}
              clubName="Ping Pong Club"
              src={Banner}
              verified={true}
              followers={50}
              memberCount={12}
              members={members.slice(0, 4)}
              school="University of Washington"
            />
          </Clubs.ClubsContainer>
        </Clubs.SectionContainer>
      </Clubs>
    </>
  );
}
