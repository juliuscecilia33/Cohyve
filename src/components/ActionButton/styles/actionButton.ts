import styled from "styled-components/macro";

interface ActiveProps {
  background?: string;
  color?: string;
}

export const Container = styled.button<ActiveProps>`
  padding: 0.7rem 2.1rem;
  background: ${({ background }) => background}
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

  img {
    height: 25px;
    width: auto;
    margin-right: .2rem;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
