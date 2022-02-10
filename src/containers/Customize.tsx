import React, { useState, useEffect } from "react";
import { Customize, ActionButton, Hero } from "../components";
import HeroSelectionOne from "../images/HeroSelection1.png";
import HeroSelectionTwo from "../images/HeroSelection2.png";
import HeroSelectionThree from "../images/HeroSelection3.png";
import FeedSelectionOne from "../images/FeedSelection1.png";
import FeedSelectionTwo from "../images/FeedSelection2.png";
import { useLocation } from "react-router-dom";

export function CustomizeContainer() {
  const [heroSelected, setHeroSelected] = useState(1);
  const [heroOneSelected, setHeroOneSelected] = useState(true);
  const [heroTwoSelected, setHeroTwoSelected] = useState(false);
  const [heroThreeSelected, setHeroThreeSelected] = useState(false);

  const [feedSelected, setFeedSelected] = useState(1);
  const [feedOneSelected, setFeedOneSelected] = useState(true);
  const [feedTwoSelected, setFeedTwoSelected] = useState(false);

  const [themeSelected, setThemeSelected] = useState("Default");
  const [themeOneSelected, setThemeOneSelected] = useState(true);
  const [themeTwoSelected, setThemeTwoSelected] = useState(false);
  const [themeThreeSelected, setThemeThreeSelected] = useState(false);
  const [themeFourSelected, setThemeFourSelected] = useState(false);
  const [themeFiveSelected, setThemeFiveSelected] = useState(false);

  const [appBody, setAppBody] = useState(null);

  console.log("theme: ", themeSelected);
  console.log("hero: ", heroSelected);
  console.log("feed: ", feedSelected);

  const location = useLocation();

  const handleSubmit = async () => {
    const customizeBody = {
      ...appBody.appBody,
      hero: heroSelected,
      feed: feedSelected,
      theme: themeSelected,
    };

    console.log(customizeBody);
  };

  console.log("state: ", location.state);

  useEffect(() => {
    if (location.state) {
      setAppBody(location.state);
      console.log("appBody: ", appBody);
    }
  }, [appBody, location.state]);

  return (
    <>
      <Customize>
        <Hero>
          <Hero.Heading>
            customize<span>club</span>
          </Hero.Heading>
        </Hero>
        <Customize.Section background="#FAFCFA">
          <Customize.Heading>
            select<span>hero</span>
          </Customize.Heading>
          <Customize.Options>
            <Customize.HeroOption
              src={HeroSelectionOne}
              alt={1}
              onClick={(e: any) => {
                setHeroSelected(Number(e.target.alt));
                setHeroOneSelected(true);
                setHeroTwoSelected(false);
                setHeroThreeSelected(false);
              }}
              selected={heroOneSelected}
            />
            <Customize.HeroOption
              src={HeroSelectionTwo}
              alt={2}
              onClick={(e: any) => {
                setHeroSelected(Number(e.target.alt));
                setHeroOneSelected(false);
                setHeroTwoSelected(true);
                setHeroThreeSelected(false);
              }}
              selected={heroTwoSelected}
            />
            <Customize.HeroOption
              src={HeroSelectionThree}
              alt={3}
              onClick={(e: any) => {
                setHeroSelected(Number(e.target.alt));
                setHeroOneSelected(false);
                setHeroTwoSelected(false);
                setHeroThreeSelected(true);
              }}
              selected={heroThreeSelected}
            />
          </Customize.Options>
        </Customize.Section>
        <Customize.Section background="#F4FAF4">
          <Customize.Heading>
            select<span>feed</span>
          </Customize.Heading>
          <Customize.Options>
            <Customize.FeedOption
              src={FeedSelectionOne}
              alt={1}
              onClick={(e: any) => {
                setFeedSelected(Number(e.target.alt));
                setFeedOneSelected(true);
                setFeedTwoSelected(false);
              }}
              selected={feedOneSelected}
            />
            <Customize.FeedOption
              src={FeedSelectionTwo}
              alt={2}
              onClick={(e: any) => {
                setFeedSelected(Number(e.target.alt));
                setFeedOneSelected(false);
                setFeedTwoSelected(true);
              }}
              selected={feedTwoSelected}
            />
          </Customize.Options>
        </Customize.Section>
        <Customize.Section background="#FAFCFA">
          <Customize.Heading>
            select<span>theme</span>
          </Customize.Heading>
          <Customize.Options>
            <Customize.ThemeOption
              primary="#F4FAF4"
              secondary="#DEECDE"
              shadow="-1px 10px 60px rgba(175, 213, 170, 0.6)"
              border="5px solid #AFD5AA"
              color="#284B63"
              key={1}
              selected={themeOneSelected}
              onClick={(e: any) => {
                setThemeSelected(e.target.children[0].innerText);
                setThemeOneSelected(true);
                setThemeTwoSelected(false);
                setThemeThreeSelected(false);
                setThemeFourSelected(false);
                setThemeFiveSelected(false);
              }}
              theme="Default"
              alt={1}
            />
            <Customize.ThemeOption
              primary="#FAF4F4"
              secondary="#ECDEDE"
              shadow="-1px 10px 60px rgba(213, 170, 175, 0.6)"
              border="5px solid #D5AAAF"
              color="#632828"
              key={2}
              selected={themeTwoSelected}
              onClick={(e: any) => {
                setThemeSelected(e.target.children[0].innerText);
                setThemeOneSelected(false);
                setThemeTwoSelected(true);
                setThemeThreeSelected(false);
                setThemeFourSelected(false);
                setThemeFiveSelected(false);
              }}
              theme="Rosy"
              alt={2}
            />
            <Customize.ThemeOption
              primary="#F4F7FA"
              secondary="#DEE5EC"
              shadow="-1px 10px 60px rgba(170, 198, 213, 0.6)"
              border="5px solid #AAC6D5"
              color="#284A63"
              key={3}
              selected={themeThreeSelected}
              onClick={(e: any) => {
                setThemeSelected(e.target.children[0].innerText);
                setThemeOneSelected(false);
                setThemeTwoSelected(false);
                setThemeThreeSelected(true);
                setThemeFourSelected(false);
                setThemeFiveSelected(false);
              }}
              theme="Lapis"
              alt={3}
            />
            <Customize.ThemeOption
              primary="#FAF9F4"
              secondary="#ECEBDE"
              shadow="-1px 10px 60px rgba(213, 204, 170, 0.6)"
              border="5px solid #D5CCAA"
              color="#626328"
              key={4}
              selected={themeFourSelected}
              onClick={(e: any) => {
                setThemeSelected(e.target.children[0].innerText);
                setThemeOneSelected(false);
                setThemeTwoSelected(false);
                setThemeThreeSelected(false);
                setThemeFourSelected(true);
                setThemeFiveSelected(false);
              }}
              theme="Amber"
              alt={4}
            />
            <Customize.ThemeOption
              primary="#F7F4FA"
              secondary="#E5DEEC"
              shadow="-1px 10px 60px rgba(184, 170, 213, 0.6)"
              border="5px solid #B8AAD5"
              color="#502863"
              key={5}
              selected={themeFiveSelected}
              onClick={(e: any) => {
                setThemeSelected(e.target.children[0].innerText);
                setThemeOneSelected(false);
                setThemeTwoSelected(false);
                setThemeThreeSelected(false);
                setThemeFourSelected(false);
                setThemeFiveSelected(true);
              }}
              theme="Lavender"
              alt={5}
            />
          </Customize.Options>
        </Customize.Section>
        <Customize.ButtonContainer>
          <ActionButton
            onClick={() => handleSubmit()}
            disabled={false}
            background="linear-gradient(94.39deg, #58a4b0 8.09%, #afd5aa 93.12%), #284b63;"
          >
            Finish
          </ActionButton>
        </Customize.ButtonContainer>
      </Customize>
    </>
  );
}
