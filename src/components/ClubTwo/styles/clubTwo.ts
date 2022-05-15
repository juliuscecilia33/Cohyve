import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  padding: 0 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Pinned = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const Posts = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const Heading = styled.h2`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  color: #284b63;
  margin-bottom: 1rem;
  text-align: left;
  display: flex;
  align-items: center;

  i {
    font-size: 32px;
    color: #284b63;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const PostsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
