import React, { useState } from "react";
import { Hero, User, CreateClub } from "../components";
import { Link as ReactRouterLink } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import SchoolData from "../colleges.json";

export function RegisterFinishrContainer() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [school, setSchool] = useState("");
  const [previewProfile, setPreviewProfile] = useState(null);
  const [previewBanner, setPreviewBanner] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [profileUploaded, setProfileUploaded] = useState(false);
  const [bannerUploaded, setBannerUploaded] = useState(false);
  const [profile, setProfile] = useState(null);
  const [banner, setBanner] = useState(null);
  const [profileProgress, setProfileProgress] = useState(0);
  const [bannerProgress, setBannerProgress] = useState(0);

  const setSchoolValue = (school: string) => {
    setFilteredData([]);
    setWordEntered(school);
    setSchool(school);
  };

  const handleProfileChange = (e: any) => {
    console.log("Profile");
    console.log(e.target.files[0]);
    let profileFile = e.target.files[0];
    let profileReader = new FileReader();

    profileReader.readAsDataURL(profileFile);

    profileReader.onload = function (e) {
      setPreviewProfile(e.target.result);
    };

    setProfile(e.target.files[0]);
    setProfileUploaded(true);
  };

  const handleBannerChange = (e: any) => {
    console.log("Banner");
    console.log(e.target.files[0]);
    let bannerFile = e.target.files[0];
    let bannerReader = new FileReader();

    bannerReader.readAsDataURL(bannerFile);

    bannerReader.onload = function (e) {
      setPreviewBanner(e.target.result);
    };

    setBanner(e.target.files[0]);
    setBannerUploaded(true);
  };

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

  return (
    <>
      <Hero.CreateClub>
        <Hero.Heading>
          register<span>user</span>
        </Hero.Heading>
        <CreateClub.PreviewText />
        <User.BannerSrc src={previewBanner}>
          <User.ProfileContainer>
            <User.ProfileSrc profileImageUrl={previewProfile} />
            <User.ProfileInfo
              name={name}
              description={description}
              school={school}
            />
          </User.ProfileContainer>
        </User.BannerSrc>
      </Hero.CreateClub>
      <CreateClub.Section>
        <CreateClub.Inputs>
          <CreateClub.HalfInput
            name="name"
            title="Name*"
            type="text"
            placeholder="Club Name"
            value={name}
            onChange={(e: any) => setName(e.target.value)}
            required={true}
            maxLength={30}
            showMax={true}
          />
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
                      onClick={() => {
                        setSchoolValue(value.name);
                        console.log(value.id);
                      }}
                      key={key}
                    >
                      {value.name}
                    </CreateClub.SearchItem>
                  );
                })}
              </CreateClub.SearchItems>
            )}
          </CreateClub.SearchContainer>
        </CreateClub.Inputs>
        <CreateClub.Inputs>
          <CreateClub.LargeInput
            name="description"
            title="Description"
            type="text"
            placeholder="Write a short description about your club"
            value={description}
            onChange={(e: any) => setDescription(e.target.value)}
            maxLength={50}
          />
        </CreateClub.Inputs>
        <CreateClub.Inputs>
          <CreateClub.SmInputs>
            <CreateClub.ImageUpload
              title="Club Profile"
              handleChange={handleProfileChange}
              passiveBg="linear-gradient(94.39deg, rgba(88, 164, 176, 0.5) 8.09%, rgba(175, 213, 170, 0.5) 93.12%);"
              activeBg="linear-gradient(94.39deg, #58a4b0 8.09%, #afd5aa 93.12%);"
              uploaded={profileUploaded}
              file={profile}
              fileName="file-1[]"
              fileId="file-1"
            />
            <CreateClub.ImageUpload
              title="Club Banner"
              handleChange={handleBannerChange}
              passiveBg="linear-gradient(94.39deg, rgba(245, 231, 171, 0.5) 8.09%, rgba(197, 176, 90, 0.5) 93.12%);"
              activeBg="linear-gradient(94.39deg, #F5E7AB 8.09%, #C5B05A 93.12%);"
              uploaded={bannerUploaded}
              file={banner}
              fileName="file-2[]"
              fileId="file-2"
            />
          </CreateClub.SmInputs>
        </CreateClub.Inputs>
      </CreateClub.Section>
    </>
  );
}
