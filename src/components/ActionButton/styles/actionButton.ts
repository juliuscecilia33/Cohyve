import styled from "styled-components/macro";

interface ActiveProps {
  background?: string;
  color?: string;
  hoverColor?: string;
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

  i {
    font-size: 14px;
    margin-right: 0.3rem;
    color: ${({ color }) => color};
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
  background: ${({ background }) => background};
  border-radius: 100px;
  cursor: pointer;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: ${({ color }) => color};
  // box-shadow: -1px 10px 60px rgba(27, 27, 30, 0.1);
  // margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  // margin: 0.5rem;
  padding: 0.5rem 1.8rem;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    box-shadow: -1px 6px 60px rgba(27, 27, 30, 0.2);
    transform: translateY(-2.5%);
  }

  i {
    font-size: 14px;
    margin-right: 0.3rem;
    color: ${({ color }) => color};
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

  i {
    font-size: 14px;
    margin-right: 0.3rem;
    color: ${({ color }) => color};
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

export const Circle = styled.button<ActiveProps>`
  // padding: 0.7rem 0.7rem;
  width: 30px;
  height: 30px;
  background: ${({ background }) => background};
  border-radius: 50%;
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

  i {
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    color: ${({ color }) => color};
  }

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    background: linear-gradient(94.39deg, #f5abab 8.09%, #c55a67 93.12%);
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

export const Text = styled.button<ActiveProps>`
  padding: 0.5rem 1.5rem;
  background: none;
  cursor: pointer;
  font-family: Poppins;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  color: ${({ color }) => color};
  // box-shadow: -1px 10px 60px rgba(27, 27, 30, 0.1);
  // margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  // margin: 0.5rem;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    color: ${({ hoverColor }) => hoverColor};
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
