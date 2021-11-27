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
  padding: 1rem 0 10rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-bottom: 5rem;
`;

export const Heading = styled.h1`
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 10vh;
  color: #afd5aa;
  margin-bottom: 5rem;

  span {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 42px;
    color: #284b63;
    margin-left: 1rem;
  }
`;

export const PreviewText = styled.p`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #c4c4c4;
  margin-bottom: 1rem;
  text-align: center;
`;

export const ImageBanner = styled.div<ActiveProps>`
  background: ${({ imageUrl }) => {
    if (imageUrl) {
      return `url(imageUrl)`;
    } else {
      return `linear-gradient(94.39deg, #afd5aa 8.09%, #58a4b0 93.12%)`;
    }
  }};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 40px;
  position: relative;
  width: 100%;
  height: 30vh;
`;

export const InfoContainer = styled.div`
  width: 85%;
  position: absolute;
  bottom: -45%;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
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
  padding: 1.5rem;
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
  width: 10vw;
  height: 10vw;
  margin-right: 1rem;
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
  border-radius: 50%;
`;

export const InfoText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.div`
  display: flex;
  margin-bottom: 0.3rem;

  h1 {
    font-family: Work Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    color: #f0f2ef;
  }

  p {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    color: #b4b8ab;
    margin-top: auto;
    margin-bottom: 0.25rem;
    margin-left: 0.3rem;
  }
`;

export const Description = styled.h3`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  color: #79a1bc;
  margin-bottom: 1rem;
`;

export const SchoolAndLocation = styled.div`
  display: flex;
  align-items: center;

  p {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    color: #f0f2ef;
  }
`;

export const ButtonsAndLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 50%;
  padding: 1rem 0;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 65%;
  margin-left: auto;
  margin-bottom: 1.5rem;
`;

export const Links = styled.div`
  width: 65%;
  height: 32px;
  background: rgba(244, 249, 233, 0.14);
  box-shadow: -1px 10px 60px rgba(27, 27, 30, 0.1);
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  padding: 0 0.5rem;
`;

export const Icon = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  i {
    color: #f0f2ef;
    box-shadow: -1px 10px 60px rgba(27, 27, 30, 0.1);
    font-size: 18px;
    cursor: pointer;
  }
`;

export const Stats = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: -10%;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  z-index: 101;
`;

export const FollowersAndMembers = styled.div`
  background: #eef0eb;
  box-shadow: -1px 10px 60px rgba(27, 27, 30, 0.1);
  border-radius: 40px;
  width: 58%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;

export const FollowersAndMembersText = styled.h3`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #284b63;

  span {
    color: #58a4b0;
  }
`;

export const Partners = styled.div`
  background: #f4f9e9;
  box-shadow: -1px 10px 60px rgba(27, 27, 30, 0.1);
  border-radius: 40px;
  width: 38%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 2rem;

  h3 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: #284b63;
  }
`;

export const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
`;

export const Inputs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 2.2rem 0;
`;

export const SmInputs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 45%;
`;

export const HalfInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;

  p {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: #373f51;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
  }

  input {
    background: linear-gradient(
      90deg,
      rgba(211, 211, 211, 0.3) 0%,
      rgba(204, 204, 204, 0.3) 89.47%
    );
    border: 1px solid #ffffff;
    border-radius: 100px;
    width: 100%;
    height: 56px;
    padding: 1.5rem 1.7rem;
    outline: none;
    transition: 0.5s ease all;

    &::placeholder {
      font-family: Poppins;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
    }

    &:focus,
    &:hover {
      background: rgba(255, 255, 255, 0.35);
    }
  }
`;

export const LargeInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  p {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: #373f51;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
  }

  textarea {
    background: linear-gradient(
      90deg,
      rgba(211, 211, 211, 0.3) 0%,
      rgba(204, 204, 204, 0.3) 89.47%
    );
    border: 1px solid #ffffff;
    border-radius: 15px;
    width: 100%;
    height: 245px;
    padding: 1rem 1.7rem;
    outline: none;
    resize: none;
    transition: 0.5s ease all;

    &::placeholder {
      font-family: Poppins;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
    }

    &:focus,
    &:hover {
      background: rgba(255, 255, 255, 0.35);
    }
  }
`;

export const QuarterInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;

  p {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: #373f51;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
  }

  input {
    background: linear-gradient(
      90deg,
      rgba(211, 211, 211, 0.3) 0%,
      rgba(204, 204, 204, 0.3) 89.47%
    );
    border: 1px solid #ffffff;
    border-radius: 100px;
    width: 100%;
    height: 56px;
    outline: none;
    padding: 1.5rem 1.7rem;
    transition: 0.5s ease all;

    &::placeholder {
      font-family: Poppins;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
    }

    &:focus,
    &:hover {
      background: rgba(255, 255, 255, 0.35);
    }
  }
`;
