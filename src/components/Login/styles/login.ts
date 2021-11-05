import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 15%;
`;

export const Promo = styled.div`
  width: 45%;
  padding: 2rem;
  background: #f4f9e9;
  border-radius: 20px;
`;

export const PromoHeader = styled.h1`
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  text-align: center;
  color: #284b63;

  span {
    color: #afd5aa;
  }
`;

export const PromoImage = styled.img`
  height: 615px;
  width: auto;
  margin: 1.5rem 0;
`;

export const PromoText = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #afb3a7;
`;

export const ContainerMed = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 45%;
`;

export const Heading = styled.h1`
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  color: #284b63;
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #373f51;
    margin-bottom: 0.5rem;
  }

  input {
    height: 65px;
    padding: 0 1rem;
    width: 100%;
    background: linear-gradient(
      90deg,
      rgba(211, 211, 211, 0.3) 0%,
      rgba(204, 204, 204, 0.3) 89.47%
    );
    border: 1px solid #ffffff;
    border-radius: 100px;
    transition: 0.3s ease all;

    &:focus,
    &:hover {
      background: rgba(255, 255, 255, 0.35);
      &::placeholder {
        color: #ffffff;
      }
    }
  }
`;
