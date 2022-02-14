import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 15%;
  margin: 5vh 0 10vh 0;
`;

export const Promo = styled.div`
  width: 90%;
  padding: 3rem 2rem;
  background: #f4f9e9;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 80vh;
`;

export const PromoHeader = styled.h1`
  font-family: Outfit;

  font-style: normal;
  font-weight: bold;
  font-size: 38px;
  text-align: center;
  color: ${({ color }) => color};
  width: 75%;
  line-height: 46px;

  span {
    color: #afd5aa;
  }
`;

export const PromoImage = styled.img`
  height: 65%;
  width: auto;
  border-radius: 20px;
  margin: 1.5rem 0;
  box-shadow: -1px 10px 60px rgba(27, 27, 30, 0.1);
`;

export const PromoText = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  color: #afb3a7;
`;

export const ContainerMed = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`;

export const Heading = styled.h1`
  font-family: Outfit;

  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  color: #284b63;
  margin-bottom: 3rem;
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
  margin-bottom: 4rem;
  transition: 0.5s ease all;

  p {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #373f51;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
  }

  input {
    height: 60px;
    padding: 0 2rem;
    width: 100%;
    background: linear-gradient(
      90deg,
      rgba(211, 211, 211, 0.3) 0%,
      rgba(204, 204, 204, 0.3) 89.47%
    );
    border: 1px solid #ffffff;
    border-radius: 100px;
    outline: none;
    transition: 0.5s ease all;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;

    &::placeholder {
      font-family: Poppins;
      font-style: normal;
      font-weight: 500;
      font-size: 15px;
    }

    &:focus,
    &:hover {
      background: rgba(255, 255, 255, 0.35);
    }
  }
`;

export const Message = styled.div`
  display: flex;
  padding: 0;

  p {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #c4c4c4;
    margin-top: 2rem;
    transition: 0.5s ease all;
    display: flex;

    span {
      color: #afd5aa;
      cursor: pointer;
      margin-left: 0.2rem;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
