import styled from "styled-components/macro";

interface ActiveProps {
  background?: string;
  selected?: boolean;
}

export const Container = styled.div`
  width: 460px;
  height: 275px;
  position: relative;
  border-radius: 15px;
  cursor: pointer;

  &:after {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    opacity: 1;
    transition: all 0.5s;
    z-index: 3;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
  }
`;

export const Information = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 0;
  left: 0;

  h3 {
    font-family: Outfit;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    color: #fafcfa;
    line-height: 30px;
    width: 40%;
    margin-bottom: 0.8rem;
  }
`;
