import styled from "styled-components/macro";

interface ActiveProps {
  background?: any;
  selected?: boolean;
  shadow?: string;
  primary?: string;
  secondary?: string;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #fafcfa;
`;

export const Section = styled.div<ActiveProps>`
  width: 100%;
  padding: 3rem 15%;
  background: ${({ background }) => background};
  display: flex;
  flex-direction: column;
`;

export const Options = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export const HeroOption = styled.button<ActiveProps>`
  width: 600px;
  height: 526px;
  box-shadow: ${({ selected }) =>
    selected
      ? `-1px 10px 60px rgba(175, 213, 170, 0.35)`
      : `-1px 10px 60px rgba(27, 27, 30, 0.1)`};
  border-radius: 30px;
  border: ${({ selected }) => (selected ? `6px solid #afd5aa` : `none`)};
  cursor: pointer;
  outline: none;

  img {
    width: 100%;
    height: 100%;
    border-radius: 30px;
  }
`;

export const FeedOption = styled.button<ActiveProps>`
  width: 600px;
  height: 821px;
  box-shadow: ${({ selected }) =>
    selected
      ? `-1px 10px 60px rgba(175, 213, 170, 0.35)`
      : `-1px 10px 60px rgba(27, 27, 30, 0.1)`};
  border-radius: 30px;
  border: ${({ selected }) => (selected ? `6px solid #afd5aa` : `none`)};
  cursor: pointer;
  outline: none;

  img {
    width: 100%;
    height: 100%;
    border-radius: 30px;
  }
`;

export const ThemeOption = styled.button<ActiveProps>`
  width: 215px;
  height: 215px;
  border-radius: 20px;
  box-shadow: ${({ selected, shadow }) =>
    selected ? shadow : `-1px 10px 60px rgba(27, 27, 30, 0.1)`};
  background: ${({ primary }) => primary};
  position: relative;
  outline: none;
  cursor: pointer;

  p {
    position: absolute;
    bottom: 0;
    left: 0;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: ${({ color }) => color};
  }

  div {
    background: ${({ secondary }) => secondary};
    width: 55px;
    height: 55px;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 10px;
  }
`;

export const Heading = styled.h1`
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
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
