import styled from "styled-components/macro";

interface ActiveProps {
  horizontal?: boolean;
  active?: boolean;
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

export const Dropdown = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #fafcfa;
  box-shadow: -1px 10px 60px rgba(27, 27, 30, 0.1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

export const DropdownItem = styled.button<ActiveProps>`
  width: 100%;
  padding: 0.3rem 0.8rem;
  background: ${({ active }) =>
    active ? "rgba(175, 213, 170, 0.24)" : "none"};
  cursor: pointer;
  transition: 0.5s ease all;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: rgba(175, 213, 170, 0.24);
  }

  h3 {
    font-family: Work Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 11px;
    color: #153243;
    margin-left: 0.3rem;
  }
`;
