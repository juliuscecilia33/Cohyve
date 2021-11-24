import { url } from "inspector";
import styled from "styled-components/macro";

interface ActiveProps {
  imageUrl?: string;
  profileImageUrl?: string;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 15%;
`;

export const Hero = styled.div`
  padding: 10rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const Heading = styled.h1`
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 96px;
  color: #afd5aa;
  margin-bottom: 3rem;

  span {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 42px;
    color: #284b63;
  }
`;

export const PreviewText = styled.p`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  color: #c4c4c4;
  margin-bottom: 1rem;
`;

export const Banner = styled.div`
  background: linear-gradient(94.39deg, #afd5aa 8.09%, #58a4b0 93.12%);
  border-radius: 40px;
  position: relative;
  width: 100%;
  height: 15vh;
`;

export const ImageBanner = styled.div<ActiveProps>`
  background: ${({ imageUrl }) => {
    if (imageUrl) {
      return `url(imageUrl)`;
    } else {
      return `linear-gradient(94.39deg, #afd5aa 8.09%, #58a4b0 93.12%)`;
    }
  }}
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 40px;
  position: relative;
  width: 100%;
  height: 15vh;
`;

export const InfoContainer = styled.div`
  width: 75%;
  height: 10vh;
  position: absolute;
  bottom: 0;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Info = styled.div`
  background: linear-gradient(
    90deg,
    rgba(57, 94, 119, 0.9) 0.43%,
    rgba(21, 50, 67, 0.9) 97.11%
  );
  box-shadow: -1px 10px 60px rgba(27, 27, 30, 0.1);
  border-radius: 40px;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BasicInfo = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  padding: 1rem 0;
  height: 100%;
`;

export const ProfilePic = styled.div<ActiveProps>`
  width: 150px;
  height: 150px;

  background: ${({ profileImageUrl }) => {
    if (profileImageUrl) {
      return `url(imageUrl)`;
    } else {
      return `linear-gradient(94.39deg, #afd5aa 8.09%, #58a4b0 93.12%)`;
    }
  }};

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 100%;
`;
