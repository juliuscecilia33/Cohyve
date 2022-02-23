import styled from "styled-components/macro";

interface ActiveProps {
  background?: string;
  selected?: boolean;
}

export const Container = styled.div<ActiveProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 4rem 15%;
`;

export const ButtonContainer = styled.button`
  background: linear-gradient(94.39deg, #4d566a 8.09%, #091f2e 93.12%);
  border-radius: 100px;
  cursor: pointer;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  color: #afd5aa;
  // box-shadow: -1px 10px 60px rgba(27, 27, 30, 0.1);
  // margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem 1.8rem;
  cursor: pointer;
  margin-left: auto;
  margin-top: 1.2rem;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  z-index: 100;

  &:hover {
    box-shadow: -1px 6px 60px rgba(27, 27, 30, 0.2);
    transform: translateY(-2.5%);
  }
`;

export const ProfileContainer = styled.div`
  position: absolute;
  bottom: -50%;
  left: 5%;
  width: 100%;
  display: flex;
  justify-content: space-between;

  span {
    display: flex;
    align-items: center;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  transform: translateY(50%);

  h3 {
    font-family: Outfit;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    color: #153243;
    margin-bottom: 0.7rem;
  }

  p {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    width: 85%;
    line-height: 23px;
    color: #c4c4c4;
  }
`;

export const ProfileSrc = styled.div`
  width: 232px;
  height: 232px;
  border-radius: 50%;
  position: relative;
  border: 10px solid #f4faf4;
  margin-right: 1rem;

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
  right: 4%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #afd5aa;
  border: 6px solid #f4faf4;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  i {
    color: #fafcfa;
    font-size: 15px;
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
