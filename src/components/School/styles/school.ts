import styled from "styled-components/macro";

interface ActiveProps {
  background?: string;
  selected?: boolean;
  src?: any;
}

export const Container = styled.div<ActiveProps>`
  width: 460px;
  height: 275px;
  border-radius: 15px;
  cursor: pointer;
  // background: black;
  position: relative;
  box-shadow: -1px 10px 60px rgba(27, 27, 30, 0.05);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    box-shadow: -1px 6px 60px rgba(27, 27, 30, 0.25);
    transform: translateY(-1%);
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    border-radius: 15px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
    // opacity: 0.5;
  }
`;

export const Information = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 5%;
  left: 4%;
  z-index: 5;

  h2 {
    font-family: Outfit;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    color: #fafcfa;
    line-height: 30px;
    width: 80%;
    margin-bottom: 0.8rem;
    text-align: left;
  }
`;

export const ButtonContainer = styled.div``;
