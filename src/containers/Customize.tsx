import React, { useState } from "react";
import { Customize, ActionButton, Hero } from "../components";
import HeroSelectionOne from "../images/HeroSelection1.png";
import HeroSelectionTwo from "../images/HeroSelection2.png";
import HeroSelectionThree from "../images/HeroSelection3.png";
import FeedSelectionOne from "../images/FeedSelection1.png";
import FeedSelectionTwo from "../images/FeedSelection2.png";

export function CustomizeContainer() {
  const [heroSelected, setHeroSelected] = useState(1);
  const [heroOneSelected, setHeroOneSelected] = useState(false);
  const [heroTwoSelected, setHeroTwoSelected] = useState(false);
  const [heroThreeSelected, setHeroThreeSelected] = useState(false);

  const [feedSelected, setFeedSelected] = useState(1);
  const [feedOneSelected, setFeedOneSelected] = useState(false);
  const [feedTwoSelected, setFeedTwoSelected] = useState(false);
  const [feedThreeSelected, setFeedThreeSelected] = useState(false);

  const [themeSelected, setThemeSelected] = useState(1);
  const [themeOneSelected, setThemeOneSelected] = useState(false);
  const [themeTwoSelected, setThemeTwoSelected] = useState(false);
  const [themeThreeSelected, setThemeThreeSelected] = useState(false);
  const [themeFourSelected, setThemeFourSelected] = useState(false);
  const [themeFiveSelected, setThemeFiveSelected] = useState(false);

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
              onClick={(e: any) => console.log(e)}
              selected={heroOneSelected}
            />
            <Customize.HeroOption
              src={HeroSelectionTwo}
              alt={2}
              onClick={(e: any) => console.log(e)}
              selected={heroTwoSelected}
            />
            <Customize.HeroOption
              src={HeroSelectionThree}
              alt={3}
              onClick={(e: any) => console.log(e)}
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
              onClick={(e: any) => console.log(e)}
              selected={feedOneSelected}
            />
            <Customize.FeedOption
              src={FeedSelectionTwo}
              alt={1}
              onClick={(e: any) => console.log(e)}
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
              primary="#AFD5AA"
              secondary="#DEECDE"
              shadow="-1px 10px 60px rgba(175, 213, 170, 0.35)"
              color="#284B63"
              key={1}
              selected={themeOneSelected}
              onClick={(e: any) => console.log(e)}
            />
          </Customize.Options>
        </Customize.Section>
      </Customize>
    </>
  );
}
