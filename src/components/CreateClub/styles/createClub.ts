import styled from "styled-components/macro";

interface ActiveProps {
  imageUrl?: string;
  profileImageUrl?: string;
  showItems?: boolean;
  passiveBg?: string;
  activeBg?: string;
  uploaded?: boolean;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #f4faf4;
`;

export const PreviewText = styled.p`
  font-family: Outfit;

  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #c4c4c4;
  margin-bottom: 1rem;
  text-align: center;
`;

export const BannerPlaceholder = styled.div<ActiveProps>`
  background: linear-gradient(94.39deg, #afd5aa 8.09%, #58a4b0 93.12%);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 40px;
  position: relative;
  width: 100%;
  height: 275px;
`;

export const BannerSrc = styled.div`
  border-radius: 40px;
  position: relative;
  width: 100%;
  height: 275px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 40px;
  }
`;

export const InfoContainer = styled.div`
  width: 85%;
  position: absolute;
  bottom: -55%;
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

export const ProfilePlaceholder = styled.div<ActiveProps>`
  width: 10vw;
  height: 10vw;
  margin-right: 1rem;
  background: linear-gradient(94.39deg, #afd5aa 8.09%, #58a4b0 93.12%);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
`;

export const ProfileSrc = styled.div<ActiveProps>`
  width: 10vw;
  height: 10vw;
  margin-right: 1rem;
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

export const Name = styled.div`
  display: flex;
  margin-bottom: 0.3rem;

  h1 {
    font-family: Outfit;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    color: #f0f2ef;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
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
  font-size: 14px;
  line-height: 20px;
  color: #79a1bc;
  margin: 0.4rem 0 0.5rem 0;
  overflow: none;
`;

export const SchoolLocationCategory = styled.div`
  display: flex;
  align-items: center;

  p {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    color: #f0f2ef;
    line-height: 22px;
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
  justify-content: right;
  align-items: center;
  width: 65%;
  margin-left: auto;
  margin-bottom: 0.7rem;
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
  width: 55%;
  display: flex;
  justify-content: center;
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
  width: 55%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  margin-right: 2rem;
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
  background-color: #fafcfa;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem 15% 2rem 15%;
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
  position: relative;

  div {
    position: absolute;
    right: 7%;
    top: 60%;
    bottom: -50%;
    p {
      font-size: 10px;
      color: #cdcdcd;
    }
  }

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
    font-family: Poppins;
    font-style: normal;

    &::placeholder {
      font-family: Poppins;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      color: #cdcdcd;
    }

    &:invalid {
      border-color: #dd2c00;
    }

    &:focus,
    &:hover {
      background: rgba(255, 255, 255, 0.35);
    }
  }
`;

export const SearchContainer = styled.div`
  width: 45%;
  position: relative;
`;

export const SearchInput = styled.div`
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
    font-family: Poppins;
    font-style: normal;

    &::placeholder {
      font-family: Poppins;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
    }

    &:invalid {
      border-color: #dd2c00;
    }

    &:focus,
    &:hover {
      background: rgba(255, 255, 255, 0.35);
    }
  }
`;

export const SearchItems = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 1.5rem;
  position: absolute;
  top: 115%;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  background-color: #f4f9e9;
  border-radius: 20px;
  z-index: 1000;
  overflow-y: scroll;
  height: 40vh;

  &::-webkit-scrollbar {
    width: 10px;
    background-color: #f4f9e9;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(94.39deg, #58a4b0 8.09%, #afd5aa 93.12%),
      #284b63;
    border-radius: 20px;
  }
`;

export const SearchItem = styled.div`
  background: #fafcfa;
  width: 100%;
  display: flex;
  align-items: center;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  padding: 0.5rem 1.5rem;
  transition: 0.5 ease all;
  cursor: pointer;
  border-radius: 60px;
  border: 1px solid #afd5aa;
  margin-bottom: 1rem;

  &:hover {
    transition: 0.2s ease all;
    background: #afd5aa;
    color: #fafcfa;
  }
`;

export const DropdownContainer = styled.div`
  width: 45%;
  position: relative;
`;

export const Dropdown = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  p {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: #373f51;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
  }

  button {
    display: flex;
    padding: 1rem;
    align-items: center;
    width: 100%;

    height: 56px;
    background: linear-gradient(
      90deg,
      rgba(211, 211, 211, 0.3) 0%,
      rgba(204, 204, 204, 0.3) 89.47%
    );
    border: 1px solid #ffffff;
    border-radius: 100px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    cursor: pointer;
    color: #373f51;
    padding-left: 1.7rem;

    &:hover {
      background: rgba(255, 255, 255, 0.35);
    }
  }
`;

export const DropdownItems = styled.div<ActiveProps>`
  display: ${({ showItems }) => (showItems ? "flex" : "none")};
  flex-direction: column;
  text-align: left;
  padding: 1.5rem;
  position: absolute;
  top: 115%;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  background-color: #f4f9e9;
  // border: #cdcdcd 1px solid;
  border-radius: 20px;
  z-index: 1000;
  overflow-y: scroll;
  height: 40vh;

  &::-webkit-scrollbar {
    width: 10px;
    background-color: #f4f9e9;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(94.39deg, #58a4b0 8.09%, #afd5aa 93.12%),
      #284b63;
    border-radius: 20px;
  }
`;

export const DropdownItem = styled.button`
  background: #fafcfa;
  width: 100%;
  display: flex;
  align-items: center;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  padding: 0.5rem 1.5rem;
  transition: 0.5 ease all;
  cursor: pointer;
  border-radius: 60px;
  border: 1px solid #afd5aa;
  margin-bottom: 1rem;

  &:hover {
    transition: 0.2s ease all;
    background: #afd5aa;
    color: #fafcfa;
  }
`;

export const LargeInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  overflow-y: hidden;

  p {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: #373f51;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
  }

  div {
    position: absolute;
    right: 3%;
    top: 60%;
    bottom: -50%;
    p {
      font-size: 10px;
      color: #cdcdcd;
    }
  }

  input {
    background: linear-gradient(
      90deg,
      rgba(211, 211, 211, 0.3) 0%,
      rgba(204, 204, 204, 0.3) 89.47%
    );
    border: 1px solid #ffffff;
    border-radius: 40px;
    width: 100%;
    height: 60px;
    padding: 1.2rem 1.7rem;
    outline: none;
    resize: none;
    transition: 0.5s ease all;
    font-family: Poppins;
    font-style: normal;
    overflow-y: hidden;

    &::placeholder {
      font-family: Poppins;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      // margin-top: 0.5rem;
    }

    &:focus,
    &:hover {
      background: rgba(255, 255, 255, 0.35);
    }
  }
`;

export const ImageUpload = styled.div`
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
`;

export const ImageInputs = styled.div<ActiveProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  input {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }

  input + label {
    width: 100%;
    height: 56px;
    font-size: 1rem;
    /* 20px */
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    outline: none;
    padding: 0.625rem 1.25rem;
    /* 10px 20px */
    color: #fafcfa;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background: ${({ uploaded, activeBg, passiveBg }) =>
      uploaded ? activeBg : passiveBg};
    border-radius: 40px;

    &:hover {
      // box-shadow: -1px 6px 60px rgba(27, 27, 30, 0.2);
      transform: translateY(-2.5%);
    }
  }

  p {
    font-size: 0.9rem;
    /* 20px */
    font-family: Poppins;
    font-weight: 700;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: #fafcfa;
    margin: 0;
    margin-left: 0.15rem;
    max-width: 60%;
  }

  .no-js input + label {
    display: none;
  }

  input:focus + label,
  input.has-focus + label {
    outline: 1px dotted #000;
    outline: -webkit-focus-ring-color auto 5px;
    background: ${({ activeBg }) => activeBg};
  }

  input:focus + label,
  input.has-focus + label,
  input + label:hover {
    background: ${({ activeBg }) => activeBg};
  }

  input + label svg {
    width: 1.25vw;
    height: auto;
    vertical-align: middle;
    fill: currentColor;
    /* 4px */
    margin-right: 0.5rem;
    /* 4px */
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  // width: 25%;
`;
