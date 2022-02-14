import styled from "styled-components/macro";

interface ActiveProps {
  background?: string;
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
  color: #FAFCFA;
  // box-shadow: -1px 10px 60px rgba(27, 27, 30, 0.1);
  // margin-top: 1rem;
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
