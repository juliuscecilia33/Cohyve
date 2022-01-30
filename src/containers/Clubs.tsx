import React, { useState } from "react";
import { Hero, Search, Filter, Clubs } from "../components";
import { ClubBlockContainer } from "../containers";
import Banner from "../images/BannerTest.jpeg";
import Profile from "../images/Profile.jpeg";

export function ClubsContainer() {
  const members = [
    {
      profilePic: { Profile },
      user: "JarredKelenic",
    },
    {
      profilePic: "",
      user: "JulioRodriguez",
    },
    {
      profilePic: { Profile },
      user: "JuanSoto",
    },
    {
      profilePic: { Profile },
      user: "MikeTrout",
    },
    {
      profilePic: { Profile },
      user: "FernandoTatis",
    },
    {
      profilePic: { Profile },
      user: "RafaelDevers",
    },
    {
      profilePic: { Profile },
      user: "LuisRobert",
    },
  ];

  const [filteredData, setFilteredData] = useState([]);

  return (
    <>
      <Hero>
        <Hero.Heading>
          popular <span>Clubs</span>
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
            rankCount={1}
            ranked={true}
            clubName="Chemistry Club"
            src={Banner}
            verified={true}
            followers={50}
            memberCount={12}
            members={members.slice(0, 4)}
            school="University of Washington"
          />
          <ClubBlockContainer
            rankCount={1}
            ranked={true}
            clubName="Baseball Club"
            src={Banner}
            verified={true}
            followers={50}
            memberCount={12}
            members={members.slice(0, 4)}
            school="University of Washington"
          />
          <ClubBlockContainer
            rankCount={1}
            ranked={true}
            clubName="Basketball Club"
            src={Banner}
            verified={true}
            followers={50}
            memberCount={12}
            members={members.slice(0, 4)}
            school="University of Washington"
          />
        </Clubs.ClubsRow>
      </Hero>
      <Search
        name="school"
        type="text"
        placeholder="School"
        value={wordEntered}
        onChange={handleFilter}
      />
      {filteredData.length !== 0 && (
        <Search.DropdownItems>
          {filteredData.slice(0, 8).map((value, key) => {
            return (
              <Search.DropdownClubItem onClick={null}>
                {value.name}
              </Search.DropdownClubItem>
            );
          })}
        </Search.DropdownItems>
      )}
    </>
  );
}
