import React from "react";

import { Container, BannerSrc, InfoContainer } from "./styles/clubHeroOne";

type Props = {
  children?: React.ReactNode;
};

type ImageProps = {
  src?: any;
  alt?: any;
  imageUrl?: any;
  imageSource?: any;
  children?: React.ReactNode;
};

export default function ClubHeroOne({ children, ...restProps }: Props) {
  return <Container {...restProps}>{children}</Container>;
}

ClubHeroOne.BannerSrc = function ClubHeroOneBannerSrc({
  imageSource,
  children,
  ...restProps
}: ImageProps) {
  return (
    <BannerSrc {...restProps}>
      <img src={imageSource} alt="Banner" />
      {children}
    </BannerSrc>
  );
};

ClubHeroOne.InfoContainer = function ClubHeroOneInfoContainer({
  children,
  ...restProps
}: Props) {
  return <InfoContainer {...restProps}>{children}</InfoContainer>;
};
