import React, { useState } from "react";
import { Hero, Search, Filter, Clubs, ActionButton } from "../components";
import { ClubBlockContainer } from "../containers";
import Banner from "../images/BannerTest.jpeg";
import Profile from "../images/Profile.jpeg";
import { Link as ReactRouterLink } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { makeStyles } from "@material-ui/core/styles";
import { ListItem } from "@mui/material";

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

  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;

  const [searchedData, setSearchedData] = useState([]);
  const [clubSearched, setClubSearched] = useState("");
  const [filterSelected, setFilterSelected] = useState(null);

  const useStyles = makeStyles({
    option: {
      "&:hover": {
        backgroundColor: "rgba(175, 213, 170, 0.24) !important",
        transition: "0.3s",
        fontWeight: 600,
      },
      "&$selected": {
        backgroundColor: "red",
        color: "white",
        "& .MuiListItemIcon-root": {
          color: "white",
        },
      },
      "&$selected:hover": {
        backgroundColor: "purple",
        color: "white",
        "& .MuiListItemIcon-root": {
          color: "white",
        },
      },
      fontFamily: "Work Sans",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "14px",
      color: "#153243",
    },
    selected: {
      backgroundColor: "rgba(175, 213, 170, 0.24) !important",
      transition: "0.3s",
      fontWeight: 600,
    },
  });

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

  const styles = useStyles();

  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: "Pulp Fiction", year: 1994 },
    {
      title: "The Lord of the Rings: The Return of the King",
      year: 2003,
    },
    { title: "The Good, the Bad and the Ugly", year: 1966 },
    { title: "Fight Club", year: 1999 },
    {
      title: "The Lord of the Rings: The Fellowship of the Ring",
      year: 2001,
    },
    {
      title: "Star Wars: Episode V - The Empire Strikes Back",
      year: 1980,
    },
    { title: "Forrest Gump", year: 1994 },
    { title: "Inception", year: 2010 },
    {
      title: "The Lord of the Rings: The Two Towers",
      year: 2002,
    },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: "Goodfellas", year: 1990 },
    { title: "The Matrix", year: 1999 },
    { title: "Seven Samurai", year: 1954 },
    {
      title: "Star Wars: Episode IV - A New Hope",
      year: 1977,
    },
    { title: "City of God", year: 2002 },
    { title: "Se7en", year: 1995 },
    { title: "The Silence of the Lambs", year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: "Life Is Beautiful", year: 1997 },
    { title: "The Usual Suspects", year: 1995 },
    { title: "Léon: The Professional", year: 1994 },
    { title: "Spirited Away", year: 2001 },
    { title: "Saving Private Ryan", year: 1998 },
    { title: "Once Upon a Time in the West", year: 1968 },
    { title: "American History X", year: 1998 },
    { title: "Interstellar", year: 2014 },
  ];

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
              <Autocomplete
                multiple
                id="checkboxes-tags"
                options={top100Films}
                disableCloseOnSelect
                classes={{
                  option: styles.option,
                }}
                getOptionLabel={(option: any) => option.title}
                renderOption={(props: any, option: any, { selected }: any) => (
                  <ListItem classes={{ selected: styles.selected }} {...props}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      sx={{
                        color: "#AFD5AA",
                        "&.Mui-checked": {
                          color: "#AFD5AA",
                        },
                      }}
                      checked={selected}
                    />
                    {option.title}
                  </ListItem>
                )}
                style={{ width: "100%" }}
                onChange={(event, value) => console.log(value)}
                renderInput={(params: any) => (
                  <TextField
                    {...params}
                    id="Text_Field_Input"
                    placeholder="Select Clubs"
                  />
                )}
              />
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
