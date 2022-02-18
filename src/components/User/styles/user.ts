import styled from "styled-components/macro";

interface ActiveProps {
  background?: string;
}

export const Container = styled.div<ActiveProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ProfileData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-family: Outfit;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    color: #153243;
  }

  p {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: #c4c4c4;
  }
`;

export const ProfileSrc = styled.div`
  width: 252px;
  height: 252px;
  border-radius: 50%;
  position: relative;
  border: 10px solid #f4faf4;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const ProfilePlaceholder = styled.div`
  width: 252px;
  height: 252px;
  margin-right: 1rem;
  background: linear-gradient(94.39deg, #afd5aa 8.09%, #58a4b0 93.12%);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  border: 10px solid #f4faf4;
  position: relative;
`;

export const EditProfile = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 59px;
  height: 59px;
  border-radius: 50%;
  background: #afd5aa;
  border: 4px solid #f4faf4;
  display: flex;
  justify-content: center;
  align-items: center;

  i {
    color: #fafcfa;
    font-size: 25px;
  }
`;
