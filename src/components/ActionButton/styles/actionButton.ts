import styled from "styled-components/macro";

interface ActiveProps {
  background?: string;
  color?: string;
}

export const Container = styled.button<ActiveProps>`
  padding: 0.7rem 2.1rem;
  background: ${({ background }) => background};
  border-radius: 100px;
  cursor: pointer;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  color: ${({ color }) => color};
  // box-shadow: -1px 10px 60px rgba(27, 27, 30, 0.1);
  // margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    box-shadow: -1px 6px 60px rgba(27, 27, 30, 0.2);
    transform: translateY(-2.5%);
  }

  img {
    height: 25px;
    width: auto;
    margin-right: 0.8rem;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Medium = styled.button<ActiveProps>`
  padding: 0.4rem 1.8rem;
  background: ${({ background }) => background};
  border-radius: 100px;
  cursor: pointer;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  color: ${({ color }) => color};
  // box-shadow: -1px 10px 60px rgba(27, 27, 30, 0.1);
  // margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    box-shadow: -1px 6px 60px rgba(27, 27, 30, 0.2);
    transform: translateY(-2.5%);
  }

  img {
    height: 25px;
    width: auto;
    margin-right: 0.8rem;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Small = styled.button<ActiveProps>`
  padding: 0.5rem 1.5rem;
  background: ${({ background }) => background};
  border-radius: 40px;
  cursor: pointer;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  color: ${({ color }) => color};
  // box-shadow: -1px 10px 60px rgba(27, 27, 30, 0.1);
  // margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  // margin: 0.5rem;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    box-shadow: -1px 6px 60px rgba(27, 27, 30, 0.2);
    transform: translateY(-2.5%);
  }

  img {
    height: 25px;
    width: auto;
    margin-right: 0.8rem;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
