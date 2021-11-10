import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  height: 20vh;
  background: #f4f9e9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15%;
  margin-top: 2rem;
`;

export const ContainerMed = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Logo = styled.img`
  height: 25px;
  cursor: pointer;
  width: auto;
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Tab = styled.h2`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  color: #284b63;
  margin-bottom: 1.5rem;
  transition: 0.3s ease all;
  cursor: pointer;

  &:hover {
    color: #afd5aa;
  }
`;

export const TabHeading = styled.h1`
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  color: #284b63;
  margin-bottom: 2rem;
`;
