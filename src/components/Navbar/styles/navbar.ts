import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  height: 10vh;
  background: #fafcfa;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15%;
`;

export const ContainerMed = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  height: 45px;
  width: auto;
`;

export const Border = styled.div`
  border-left: 1px solid red;
  height: 100%;
  margin: 0 1rem;
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
  font-size: 26px;
  color: #284b63;
`;
