import styled from "styled-components/macro";

interface ActiveProps {
  background?: string;
}

export const Container = styled.button<ActiveProps>`
  padding: 1.3vh 2.1vw;
  background: ${({ background }) => background}
  border-radius: 100px;
  cursor: pointer;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  color: #f0f2ef;
  // margin-top: 1rem;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
