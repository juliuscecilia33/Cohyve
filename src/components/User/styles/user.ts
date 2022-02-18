import styled from "styled-components/macro";

interface ActiveProps {
  background?: string;
}

export const Container = styled.div<ActiveProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
