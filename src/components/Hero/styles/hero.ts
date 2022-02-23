import styled from "styled-components/macro";

export const Container = styled.div`
  padding: 3rem 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background: #f4faf4;
`;

export const Heading = styled.h1`
  font-family: Outfit;

  font-style: normal;
  font-weight: bold;
  font-size: 4rem;
  color: #afd5aa;
  margin-bottom: 5rem;

  span {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    color: #284b63;
    margin-left: 1rem;
  }
`;

export const CreateClub = styled.div`
  padding: 3rem 15% 15rem 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background: #f4faf4;
`;

export const User = styled.div`
  padding: 3rem 15% 8.5rem 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background: #f4faf4;
`;

export const Description = styled.p`
  margin-top: 0.7rem;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: #cdcdcd;
`;
