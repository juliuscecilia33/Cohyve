import styled from "styled-components/macro";

interface ActiveProps {
  background?: string;
  selected?: boolean;
}

export const Container = styled.div<ActiveProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 15%;
  padding-bottom: 4rem;
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

export const Tabs = styled.div`
  width: 100%;
  height: 8vh;
  display: flex;
  align-items: center;
`;

export const Tab = styled.button<ActiveProps>`
  padding: 0.5rem 1.7rem;
  background: ${({ selected }) => (selected ? "#f4f9e9" : "none")};
  font-family: Outfit;
  font-style: normal;
  font-weight: ${({ selected }) => (selected ? 700 : 500)};
  font-size: 18px;
  color: ${({ selected }) => (selected ? "#afd5aa" : "#D3D3D3")};
  border-radius: 30px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  margin-right: 1.5rem;
  cursor: pointer;

  &:hover {
    background: #f4f9e9;
    font-weight: 700;
    color: #afd5aa;
  }
`;

export const ContentSection = styled.div`
  width: 100%;
  padding: 3.5rem 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const Table = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Items = styled.div<ActiveProps>`
  width: 100%;
  height: 3.5rem;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  background: ${({ background }) => background};
  border-radius: 20px;
  margin-bottom: 0.7rem;
`;

export const Label = styled.h3`
  width: 25%;
  font-family: Outfit;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: #284b63;
`;

export const ClubName = styled.div`
  width: 25%;
  display: flex;
  align-items: center;

  h3 {
    font-family: Outfit;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: #153243;
    margin-right: 0.5rem;
  }

  img {
    width: 22px;
    height: auto;
  }
`;

export const ClubProfileSrc = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    margin: 0;
  }
`;

export const Category = styled.h3`
  width: 25%;
  font-family: Outfit;
  font-style: normal;
  font-size: 14px;
  font-weight: 600;
  color: #afd5aa;
`;

export const Followers = styled.h3`
  width: 25%;
  font-family: Outfit;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #153243;
`;

export const Role = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
`;
