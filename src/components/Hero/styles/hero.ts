import styled from "styled-components/macro";

interface ActiveProps {
  padding?: string;
}

export const Container = styled.div<ActiveProps>`
  padding: ${({ padding }) => padding};
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  // margin-bottom: 5rem;
  background: #f4faf4;
  // padding: 0 15%;
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
