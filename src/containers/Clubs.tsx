import React, { useState } from "react";
import { Hero, Search, Filter, Clubs, ActionButton } from "../components";
import { ClubBlockContainer } from "../containers";
import Banner from "../images/BannerTest.jpeg";
import Profile from "../images/Profile.jpeg";
import { Link as ReactRouterLink } from "react-router-dom";
import * as ROUTES from "../constants/routes";

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

  return (
    <>
      <Clubs>
        <Hero padding="3rem 15%">
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
              Add Club
            </ActionButton>
          </ReactRouterLink>
        </Clubs.CreateButtonContainer>
        <Clubs.SectionContainer>
          <Filter horizontal={false}>
            <Filter.Block title="Clubs">
              <Filter.Button
                dropdownOpen={filterSelected === "Clubs" ? true : false}
                onClick={() => filterClickHandler("Clubs")}
                text="All Clubs"
              />
              <Filter.Dropdown></Filter.Dropdown>
            </Filter.Block>
            <Filter.Block title="Schools">
              <Filter.Button
                dropdownOpen={filterSelected === "Schools" ? true : false}
                onClick={() => filterClickHandler("Schools")}
                text="All Schools"
              />
              <Filter.Dropdown></Filter.Dropdown>
            </Filter.Block>
            <Filter.Block title="Established">
              <Filter.Button
                dropdownOpen={filterSelected === "Established" ? true : false}
                onClick={() => filterClickHandler("Established")}
                text="Year"
              />
              <Filter.Dropdown></Filter.Dropdown>
            </Filter.Block>
            <Filter.Block title="Category">
              <Filter.Button
                dropdownOpen={filterSelected === "Category" ? true : false}
                onClick={() => filterClickHandler("Category")}
                text="Category"
              />
              <Filter.Dropdown></Filter.Dropdown>
            </Filter.Block>
            <Filter.Block title="State">
              <Filter.Button
                dropdownOpen={filterSelected === "State" ? true : false}
                onClick={() => filterClickHandler("State")}
                text="State"
              />
              <Filter.Dropdown></Filter.Dropdown>
            </Filter.Block>
            <ReactRouterLink to={null}>
              <ActionButton background="linear-gradient(94.39deg, #58a4b0 8.09%, #afd5aa 93.12%), #284b63;">
                Add Club
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
