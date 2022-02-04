import React from "react";

import {
  Container,
  Section,
  HeroOption,
  Options,
  Heading,
  FeedOption,
  ThemeOption,
} from "./styles/customize";

type Props = {
  children?: React.ReactNode;
  selected?: boolean;
  background?: string;
  color?: string;
  primary?: string;
  shadow?: string;
  secondary?: string;
};

export default function Customize({ children, ...restProps }: Props) {
  return <Container {...restProps}>{children}</Container>;
}

Customize.Section = function CustomizeSection({
  background,
  children,
  ...restProps
}: Props) {
  return (
    <Section background={background} {...restProps}>
      {children}
    </Section>
  );
};

Customize.Heading = function CustomizeHeading({
  children,
  ...restProps
}: Props) {
  return <Heading {...restProps}>{children}</Heading>;
};

Customize.Options = function CustomizeOptions({
  children,
  ...restProps
}: Props) {
  return <Options {...restProps}>{children}</Options>;
};

Customize.HeroOption = function CustomizeHeroOption({
  selected,
  children,
  ...restProps
}: Props) {
  return (
    <HeroOption selected={selected} {...restProps}>
      {children}
    </HeroOption>
  );
};

Customize.FeedOption = function CustomizeFeedOption({
  selected,
  children,
  ...restProps
}: Props) {
  return (
    <FeedOption selected={selected} {...restProps}>
      {children}
    </FeedOption>
  );
};

Customize.ThemeOption = function CustomizeThemeOption({
  shadow,
  primary,
  secondary,
  color,
  selected,
  children,
  ...restProps
}: Props) {
  return (
    <ThemeOption
      primary={primary}
      secondary={secondary}
      shadow={shadow}
      selected={selected}
      {...restProps}
    >
      <p>{color}</p>
      <div></div>
    </ThemeOption>
  );
};
