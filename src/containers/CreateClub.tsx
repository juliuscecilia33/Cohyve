import React, { useState } from "react";
import { CreateClub, ActionButton, Hero } from "../components";
import SchoolData from "../colleges.json";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";

import {
  storage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "../firebase";

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

  let history = useHistory();

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
  const [website, setWebsite] = useState("");
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");
  const [facebook, setFacebook] = useState("");
  const [email, setEmail] = useState("");
  const [submitError, setSubmitError] = useState(false);
  const [profileUploaded, setProfileUploaded] = useState(false);
  const [bannerUploaded, setBannerUploaded] = useState(false);
  const [profile, setProfile] = useState(null);
  const [banner, setBanner] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [profileProgress, setProfileProgress] = useState(0);
  const [bannerProgress, setBannerProgress] = useState(0);
  const [previewProfile, setPreviewProfile] = useState(null);
  const [previewBanner, setPreviewBanner] = useState(null);

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

  const sendToBackend = (appBody: any) => {
    auth.currentUser
      .getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        // Send token to your backend via HTTPS
        console.log("idToken: ", idToken);
        // ...
        axios
          .post("http://localhost:5000/clubs/", appBody, {
            headers: {
              firebase_token: idToken,
            },
          })
          .then((response: any) => {
            console.log(response);
            console.log("Successfully created club");

            console.log(response.data.club_id);
            // Direct to clubs page
            history.push({
              pathname:
                "/" +
                clubName.replace(/\s+/g, "-").toLowerCase() +
                "/" +
                response.data.club_id +
                "/customize",
              state: {
                clubData: response.data,
                clubId: response.data.club_id,
              },
            });
            // Direct to clubs page
          })
          .catch((error) => {
            setSubmitError(error.message);
            console.error("There was an error!", error);
          });
      })
      .catch(function (error) {
        // Handle error
        console.log(error);
      });
  };

  const handleSubmit = async () => {
    if (clubName === "" || school === "") {
      setSubmitError(true);
      return;
    }

    if (established === "< 2000") {
      setEstablished(1000);
    }

    if (profile && banner) {
      const storageRef = ref(
        storage,
        `clubs/${clubName.trim()}-${school.trim()}-${established}/clubProfile/${
          profile.name
        }`
      );

      const uploadProfile = uploadBytesResumable(storageRef, profile);

      uploadProfile.on(
        "state_changed",
        (snapshot) => {
          // progress function ...
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          console.log(progress);
          setProfileProgress(progress);
        },
        (error) => {
          // Error function...
          alert(error.message);
        },
        () => {
          getDownloadURL(uploadProfile.snapshot.ref).then((profileURL) => {
            console.log("Profile Image URL available at", profileURL);

            const storageRef = ref(
              storage,
              `clubs/${clubName.trim()}-${school.trim()}-${established}/clubBanner/${
                banner.name
              }`
            );

            const uploadBanner = uploadBytesResumable(storageRef, banner);

            uploadBanner.on(
              "state_changed",
              (snapshot) => {
                // progress function ...
                const progress = Math.round(
                  (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                console.log(progress);
                setBannerProgress(progress);
              },
              (error) => {
                // Error function...
                alert(error.message);
              },
              () => {
                getDownloadURL(uploadBanner.snapshot.ref).then((bannerURL) => {
                  console.log("File available at", bannerURL);

                  const appBody = {
                    name: clubName,
                    description: description,
                    school: school,
                    category: category,
                    established_in: established,
                    state: state,
                    website: website,
                    instagram: instagram,
                    facebook: facebook,
                    twitter: twitter,
                    email: email,
                    profileURL: profileURL,
                    bannerURL: bannerURL,
                  };

                  sendToBackend(appBody);
                });
              }
            );
          });
        }
      );
    } else if (profile) {
      const storageRef = ref(
        storage,
        `clubs/${clubName.trim()}-${school.trim()}-${established}/clubProfile/${
          profile.name
        }`
      );

      const uploadProfile = uploadBytesResumable(storageRef, profile);

      uploadProfile.on(
        "state_changed",
        (snapshot) => {
          // progress function ...
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          console.log(progress);
          setProfileProgress(progress);
        },
        (error) => {
          // Error function...
          alert(error.message);
        },
        () => {
          getDownloadURL(uploadProfile.snapshot.ref).then((profileURL) => {
            console.log("Profile Image URL available at", profileURL);

            const profileUrl = profileURL;

            const appBody = {
              name: clubName,
              description: description,
              school: school,
              category: category,
              established_in: established,
              state: state,
              website: website,
              instagram: instagram,
              facebook: facebook,
              twitter: twitter,
              email: email,
              profileURL: profileURL,
              bannerURl: "",
            };

            sendToBackend(appBody);
          });
        }
      );
    } else if (banner) {
      const storageRef = ref(
        storage,
        `clubs/${clubName.trim()}-${school.trim()}-${established}/clubBanner/${
          banner.name
        }`
      );

      const uploadBanner = uploadBytesResumable(storageRef, banner);

      uploadBanner.on(
        "state_changed",
        (snapshot) => {
          // progress function ...
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          console.log(progress);
          setBannerProgress(progress);
        },
        (error) => {
          // Error function...
          alert(error.message);
        },
        () => {
          getDownloadURL(uploadBanner.snapshot.ref).then((bannerURL) => {
            console.log("File available at", bannerURL);
            const bannerUrl = bannerURL;

            const appBody = {
              name: clubName,
              description: description,
              school: school,
              category: category,
              established_in: established,
              state: state,
              website: website,
              instagram: instagram,
              facebook: facebook,
              twitter: twitter,
              email: email,
              profileURL: "",
              bannerURL: bannerURL,
            };

            sendToBackend(appBody);
          });
        }
      );
    } else {
      const appBody = {
        name: clubName,
        description: description,
        school: school,
        category: category,
        established_in: established,
        state: state,
        website: website,
        instagram: instagram,
        facebook: facebook,
        twitter: twitter,
        email: email,
        profileURL: "",
        bannerURL: "",
      };

      sendToBackend(appBody);
    }
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

  return (
    <CreateClub>
      <Hero.CreateClub>
        <Hero.Heading>
          create<span>club</span>
        </Hero.Heading>
        <CreateClub.PreviewText />
        <CreateClub.BannerPlaceholder imageUrl={previewBanner}>
          <CreateClub.InfoContainer>
            <CreateClub.Info>
              <CreateClub.BasicInfo>
                <CreateClub.ProfilePlaceholder
                  profileImageUrl={previewProfile}
                />
                <CreateClub.InfoText>
                  <CreateClub.Name name={clubName} year={established} />
                  <CreateClub.Description>{description}</CreateClub.Description>
                  <CreateClub.SchoolLocationCategory
                    school={school}
                    location={state}
                    category={category}
                  />
                </CreateClub.InfoText>
              </CreateClub.BasicInfo>
              <CreateClub.ButtonsAndLinks>
                <CreateClub.Buttons>
                  <ActionButton
                    color="#FAFCFA"
                    background="linear-gradient(94.39deg, #58A4B0 8.09%, #AFD5AA 93.12%);"
                    onClick={() => console.log("Follow")}
                  >
                    Follow
                  </ActionButton>
                  <ActionButton
                    color="#FAFCFA"
                    background="linear-gradient(94.39deg, #F5E7AB 8.09%, #C5B05A 93.12%);"
                    onClick={() => console.log("Partner")}
                  >
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
        </CreateClub.BannerPlaceholder>
      </Hero.CreateClub>
      <CreateClub.Section>
        <CreateClub.Inputs>
          <CreateClub.HalfInput
            name="clubName"
            title="Club Name*"
            type="text"
            placeholder="Club Name"
            value={clubName}
            onChange={(e: any) => setClubName(e.target.value)}
            required={true}
            maxLength={30}
            showMax={true}
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
              {categories.map((category, key) => (
                <CreateClub.DropdownItem
                  onClick={() => {
                    setShowCategories(false);
                    setCategory(category);
                  }}
                  onBlur={() => {
                    setShowCategories(false);
                  }}
                  key={key}
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
            placeholder="Write a short description about your club"
            value={description}
            onChange={(e: any) => setDescription(e.target.value)}
            maxLength={50}
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
              {years.map((year: any, key) => (
                <CreateClub.DropdownItem
                  onClick={() => {
                    setShowYears(false);
                    setEstablished(year);
                  }}
                  onBlur={() => {
                    setShowYears(false);
                  }}
                  key={key}
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
              {states.map((state, key) => (
                <CreateClub.DropdownItem
                  onClick={() => {
                    setShowStates(false);
                    setState(state);
                  }}
                  onBlur={() => {
                    setShowStates(false);
                  }}
                  key={key}
                >
                  {state}
                </CreateClub.DropdownItem>
              ))}
            </CreateClub.DropdownItems>
          </CreateClub.DropdownContainer>
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
        <CreateClub.Inputs>
          <CreateClub.HalfInput
            name="website"
            title="Website"
            type="url"
            placeholder="https://example.com"
            pattern="https://.*"
            value={website}
            onChange={(e: any) => setWebsite(e.target.value)}
            required={false}
            showMax={false}
          />
          <CreateClub.HalfInput
            name="twitter"
            title="Twitter"
            type="text"
            placeholder="https://twitter.com"
            pattern="https://.*"
            value={twitter}
            onChange={(e: any) => setTwitter(e.target.value)}
            required={false}
            showMax={false}
          />
        </CreateClub.Inputs>
        <CreateClub.Inputs>
          <CreateClub.HalfInput
            name="instagram"
            title="Instagram"
            type="text"
            placeholder="https://instagram.com"
            pattern="https://.*"
            value={instagram}
            onChange={(e: any) => setInstagram(e.target.value)}
            required={false}
            showMax={false}
          />
          <CreateClub.HalfInput
            name="facebook"
            title="Facebook"
            type="text"
            placeholder="https://facebook.com"
            pattern="https://.*"
            value={facebook}
            onChange={(e: any) => setFacebook(e.target.value)}
            required={false}
            showMax={false}
          />
        </CreateClub.Inputs>
        <CreateClub.Inputs>
          <CreateClub.HalfInput
            name="email"
            title="Email"
            type="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            placeholder="Email"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
            required={false}
            showMax={false}
          />
        </CreateClub.Inputs>
        <CreateClub.ButtonContainer>
          <ActionButton
            color="#FAFCFA"
            onClick={() => handleSubmit()}
            background="linear-gradient(94.39deg, #58a4b0 8.09%, #afd5aa 93.12%), #284b63;"
            disabled={false}
          >
            Create Club
          </ActionButton>
        </CreateClub.ButtonContainer>
      </CreateClub.Section>
    </CreateClub>
  );
}
