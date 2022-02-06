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
  src?: any;
  alt?: any;
  theme?: string;
  border?: string;
  onClick?: any;
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
  src,
  alt,
  selected,
  children,
  onClick,
  ...restProps
}: Props) {
  return (
    <HeroOption selected={selected} onClick={onClick} {...restProps}>
      <img src={src} alt={alt} />
    </HeroOption>
  );
};

Customize.FeedOption = function CustomizeFeedOption({
  src,
  alt,
  selected,
  onClick,
  children,
  ...restProps
}: Props) {
  return (
    <FeedOption selected={selected} onClick={onClick} {...restProps}>
      <img src={src} alt={alt} />
    </FeedOption>
  );
};

Customize.ThemeOption = function CustomizeThemeOption({
  border,
  onClick,
  shadow,
  primary,
  secondary,
  color,
  theme,
  selected,
  children,
  ...restProps
}: Props) {
  return (
    <ThemeOption
      primary={primary}
      border={border}
      secondary={secondary}
      shadow={shadow}
      selected={selected}
      onClick={onClick}
      color={color}
      {...restProps}
    >
      <p>{theme}</p>
      <div></div>
    </ThemeOption>
  );
};
