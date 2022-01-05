import styled from "styled-components/macro";

interface ActiveProps {
  background?: string;
}

export const Container = styled.div<ActiveProps>`
  width: 100%;
  height: 10vh;
  background: ${({ background }) => background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15%;
  // padding-bottom: 2rem;
  // margin-bottom: 2rem;
`;

export const ContainerMed = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

export const Logo = styled.img`
  height: 25px;
  cursor: pointer;
  width: auto;
`;

export const Border = styled.div`
  border-left: 1.5px solid #dadada;
  height: 60%;
  margin: auto 2rem;
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-right: auto;
`;

export const Tab = styled.h2`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  color: #284b63;
  margin-right: 4rem;
  transition: 0.3s ease all;
  cursor: pointer;

  &:hover {
    color: #afd5aa;
  }
`;
