import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  background: #f4faf4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 15%;
  margin-top: 2rem;
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
`;

export const ContainerMed = styled.div`
  display: flex;
  height: 100%;
`;

export const Logo = styled.div`
  height: 100%;
  margin-top: 6rem;
  margin-right: 2rem;

  img {
    margin-top: 0.3rem;
    height: 25px;
    cursor: pointer;
    width: auto;
  }
`;

export const Tabs = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 2.5rem;
  margin-top: 3rem;
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
  font-size: 30px;
  color: #284b63;
  margin-bottom: 2rem;
`;
