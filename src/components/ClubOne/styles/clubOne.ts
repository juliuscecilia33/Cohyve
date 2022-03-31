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
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Members = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  padding: 0.8rem 0.4rem;
  background: #f4faf4;
  margin-bottom: 2rem;
`;

export const Partners = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  padding: 0.8rem 0.4rem;
  background: #f4faf9;
`;

export const Item = styled.div<ActiveProps>`
  width: 100%;
  display: flex;
  align-items: center;
  height: 65px;

  .ProfileImage {
    width: 58px;
    height: 58px;
    border-radius: ${({ borderRadius }) => borderRadius};
    margin-right: 0.5rem;
    background: ${({ profileBackground }) => profileBackground};
    display: flex;
    justify-content: center;
    align-items: center;

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
    width: 80%;
    justify-content: center;

    h3 {
      width: 95%;
      font-family: Outfit;
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      color: #153243;
      margin-bottom: 0.2rem;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    p {
      width: 95%;
      font-family: Poppins;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
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
  margin-bottom: 0.7rem;
`;

export const ViewAll = styled.h3`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #b4b8ab;
`;

export const Posts = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
