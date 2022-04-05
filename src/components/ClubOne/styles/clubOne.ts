import styled from "styled-components/macro";

interface ActiveProps {
  borderRadius?: any;
  profileBackground?: string;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  padding: 1rem 20%;
  display: flex;
  justify-content: space-between;
`;

export const MembersAndPartners = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Members = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.3rem;
  background: #f4faf4;
  margin-bottom: 2rem;
  border-radius: 25px;
`;

export const Partners = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.3rem;
  background: #f4faf9;
  border-radius: 25px;
`;

export const Item = styled.div<ActiveProps>`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 1.1rem;

  .ProfileImage {
    width: 48px;
    height: 48px;
    border-radius: ${({ borderRadius }) => borderRadius};
    margin-right: 0.5rem;
    background: ${({ profileBackground }) => profileBackground};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: ${({ borderRadius }) => borderRadius};
    }
  }

  .Text {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;

    h3 {
      font-family: Outfit;
      font-style: normal;
      font-weight: 700;
      font-size: 17px;
      color: #153243;
      margin-bottom: 0.3rem;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }

    p {
      width: 95%;
      font-family: Poppins;
      font-style: normal;
      font-weight: 500;
      font-size: 13px;
      color: #c4c4c4;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
`;

export const Title = styled.h2`
  font-family: Outfit;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: #284b63;
  margin-bottom: 0.9rem;
`;

export const ViewAll = styled.h3`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #b4b8ab;
  text-align: center;
  margin: 0.5rem 0;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const Posts = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
