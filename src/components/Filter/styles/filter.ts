import styled from "styled-components/macro";

interface ActiveProps {
  horizontal?: boolean;
}

export const Container = styled.div<ActiveProps>`
  width: 20%;
  display: flex;
  flex-direction: ${({ horizontal }) => (horizontal ? "row" : "column")};
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  h3 {
    margin-left: 0.5rem;
    font-family: Work Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    color: #cdcdcd;
    margin-bottom: 1.5rem;
  }
`;

export const Button = styled.button`
  width: 100%;
  position: relative;
  height: 40px;
  background: none;
  border: 1.5px solid #dedede;
  border-radius: 15px;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  font-family: Work Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  color: #284b63;

  i {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 10px;
    color: #153243;
  }
`;
