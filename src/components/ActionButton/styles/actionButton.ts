import styled from "styled-components/macro";

interface ActiveProps {
  background?: string;
}

export const Container = styled.button<ActiveProps>`
  padding: 0.7rem 2.5rem;
  background: ${({ background }) => background}
  border-radius: 100px;
  cursor: pointer;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #f0f2ef;
  margin-top: 1rem;
`;
