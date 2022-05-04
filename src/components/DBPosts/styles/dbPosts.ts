import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  margin: 2rem 0;
  display: flex;
`;

export const Heading = styled.div`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  align-items: center;

  h3 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    color: #fafcfa;
    margin-right: 0.4rem;
  }

  i {
    font-style: normal;
    font-size: 20px;
    color: #fafcfa;
  }
`;

export const PostsContainer = styled.div`
  width: 100%;
  margin: 1.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const FiltersContainer = styled.div`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  align-items: center;
`;
