import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fafcfa;
`;

export const Banner = styled.div`
  width: 100%;
  height: 15vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    width: 100%;
    max-height: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProfileAndButtons = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20%;

  .profilePic {
    width: 194px;
    height: 194px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 8px solid #fafcfa;

    img {
      max-width: 100%;
      width: 100%;
      max-height: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
  }
`;

export const Links = styled.div`
  width: 365px;
  height: 42px;
  border-radius: 100px;
  background: linear-gradient(
    90deg,
    rgba(57, 94, 119, 0.8) 0.43%,
    rgba(21, 50, 67, 0.8) 97.11%
  );
  box-shadow: -1px 10px 60px rgba(27, 27, 30, 0.1);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 0.5rem;

  i {
    font-size: 20px;
    color: #f0f2ef;
    box-shadow: -1px 10px 60px rgba(27, 27, 30, 0.1);
  }
`;

export const ClubDetails = styled.div`
  width: 920px;
  background: #f4faf4;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

export const ClubDetailsRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Information = styled.div`
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ClubName = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  color: #153243;
`;

export const ClubDescription = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #79a1bc;
`;

export const FollowersAndMembers = styled.div`
  height: 68px;
  background: #eef0eb;
  border-radius: 40px;
  padding: 0.5rem 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    color: #284b63;

    span {
      color: #58a4b0;
    }
  }
`;

export const ClubDetailsItem = styled.div`
  display: flex;
  align-items: center;

  i {
    font-size: 61px;
    color: #deecde;
  }

  .item_details {
    display: flex;
    flex-direction: column;
    text-align: left;

    p {
      font-family: "Work Sans";
      font-style: normal;
      font-weight: 600;
      font-size: 11px;
      color: #d0e4d0;
      margin-bottom: 0.5rem;
    }

    h2 {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      color: #284b63;
    }
  }
`;
