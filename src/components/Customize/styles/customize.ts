import styled from "styled-components/macro";

interface ActiveProps {
  background?: any;
  selected?: boolean;
  shadow?: string;
  primary?: string;
  secondary?: string;
  border?: string;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #fafcfa;
`;

export const Section = styled.div<ActiveProps>`
  width: 100%;
  padding: 6rem 15%;
  background: ${({ background }) => background};
  display: flex;
  flex-direction: column;
`;

export const Options = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const HeroOption = styled.button<ActiveProps>`
  width: 505px;
  height: 443px;
  box-shadow: ${({ selected }) =>
    selected
      ? `-1px 10px 60px rgba(175, 213, 170, 0.4)`
      : `-1px 10px 60px rgba(27, 27, 30, 0.1)`};
  border-radius: 30px;
  border: ${({ selected }) => (selected ? `6px solid #afd5aa` : `none`)};
  cursor: pointer;
  outline: none;
  margin: 2rem 0;
  transition: all 100ms cubic-bezier(0.17, 0.67, 0.83, 0.67);

  &:hover {
    box-shadow: -1px 10px 60px rgba(175, 213, 170, 0.4);
    border: 6px solid #afd5aa;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 30px;
  }
`;

export const FeedOption = styled.button<ActiveProps>`
  width: 505px;
  height: 691px;
  box-shadow: ${({ selected }) =>
    selected
      ? `-1px 10px 60px rgba(175, 213, 170, 0.4)`
      : `-1px 10px 60px rgba(27, 27, 30, 0.1)`};
  border-radius: 30px;
  border: ${({ selected }) => (selected ? `6px solid #afd5aa` : `none`)};
  cursor: pointer;
  outline: none;
  margin: 2rem 0;
  transition: all 100ms cubic-bezier(0.17, 0.67, 0.83, 0.67);

  &:hover {
    box-shadow: -1px 10px 60px rgba(175, 213, 170, 0.4);
    border: 6px solid #afd5aa;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 30px;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem 0;
`;

export const ThemeOption = styled.button<ActiveProps>`
  width: 200px;
  height: 200px;
  border-radius: 20px;
  box-shadow: ${({ selected, shadow }) =>
    selected ? shadow : `-1px 10px 60px rgba(27, 27, 30, 0.1)`};
  background: ${({ primary }) => primary};
  border: ${({ border, selected }) => (selected ? border : null)};
  position: relative;
  outline: none;
  cursor: pointer;
  transition: all 100ms cubic-bezier(0.17, 0.67, 0.83, 0.67);
  margin-top: 2rem;

  &:hover {
    border: ${({ border }) => border};
    box-shadow: ${({ shadow }) => shadow};
  }

  p {
    position: absolute;
    bottom: 5%;
    left: 9%;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    color: ${({ color }) => color};
    pointer-events: none;
  }

  div {
    background: ${({ secondary }) => secondary};
    width: 52px;
    height: 52px;
    position: absolute;
    top: 5%;
    right: 5%;
    border-radius: 10px;
    pointer-events: none;
  }
`;

export const Heading = styled.h1`
  font-family: Outfit;

  font-style: normal;
  font-weight: bold;
  font-size: 3.6rem;
  color: #afd5aa;
  margin-bottom: 1rem;

  span {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    color: #284b63;
    margin-left: 1rem;
  }
`;
