import styled from "styled-components/macro";

export const Container = styled.div`
  width: 60%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 1rem 0.5rem;
  background: #1d1e22;
`;

export const Heading = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  h3 {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    color: #afd5aa;
  }

  i {
    font-size: 32px;
    color: #afd5aa;
  }
`;
