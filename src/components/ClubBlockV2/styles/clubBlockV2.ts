import styled from "styled-components/macro";

interface ActiveProps {
  backgroundColor?: string;
  background?: any;
}

export const Container = styled.div`
  width: 290px;
  height: 440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-conternt: center;
  border-radius: 20px;
  background: #f4faf4;
  cursor: pointer;
  margin: 0rem 0.1rem 3rem 0.1rem;
  box-shadow: -1px 10px 60px rgba(27, 27, 30, 0.05);
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    box-shadow: -1px 6px 60px rgba(27, 27, 30, 0.25);
  }
`;

export const TopBar = styled.div<ActiveProps>`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  padding: 0 1rem;

  span {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
    background: ${({ background }) => background};
    margin-right: 0.7rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
      margin: 0;
    }
  }
`;

export const Name = styled.div<ActiveProps>`
  display: flex;
  width: 75%;
  align-items: center;
  height: 100%;

  h3 {
    font-family: Outfit;
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    color: #153243;
    margin-right: 0.1rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    // display: flex;
    // align-items: center;
    transform: translateY(13%);
    height: 32%;
  }

  img {
    width: 35px;
    height: auto;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 55%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    width: 100%;
    max-height: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const RankLabel = styled.div<ActiveProps>`
  position: absolute;
  top: 8%;
  left: 5%;
  width: 46px;
  height: 46px;
  border-radius: 10px;
  background: ${({ background }) => background};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  h3 {
    font-family: Outfit;
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    color: #fafcfa;
  }
`;

export const InformationContainer = styled.div`
  width: 100%;
  height: 19%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1.3rem;
`;

export const Stats = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 0.8rem;

  div {
    margin-right: 0.7rem;
    display: flex;
    align-items: center;

    p {
      font-family: Outfit;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      color: #cdcdcd;
    }

    i {
      font-size: 16px;
      color: #cdcdcd;
      margin-right: 0.4rem;
    }
  }
`;

export const School = styled.div`
  width: 100%;

  p {
    font-family: Outfit;
    font-style: italic;
    font-weight: 600;
    font-size: 16px;
    color: #b4b8ab;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    text-align: left;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const MembersAndPartners = styled.div`
  width: 100%;
  height: 11%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.3rem;
  background: linear-gradient(94.39deg, #f4faf4 8.09%, #deecde 93.12%);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export const Members = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Partners = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const Item = styled.div<ActiveProps>`
  width: 23px;
  height: 23px;
  object-fit: cover;
  border-radius: 50%;
  background: ${({ background }) => background};
  margin-left: -0.3rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    margin: 0;
  }
`;
