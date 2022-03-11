import React from "react";

import { Container, BannerPlaceholder, BannerSrc } from "./styles/clubHeroOne";

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

ClubHeroOne.BannerPlaceholder = function ClubHeroOneBannerPlaceholder({
  imageUrl,
  children,
  ...restProps
}: ImageProps) {
  if (imageUrl) {
    return (
      <ClubHeroOne.BannerSrc imageSource={imageUrl}>
        {children}
      </ClubHeroOne.BannerSrc>
    );
  } else {
    return <BannerPlaceholder {...restProps}>{children}</BannerPlaceholder>;
  }
};

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
