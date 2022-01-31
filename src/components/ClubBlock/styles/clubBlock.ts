import styled from "styled-components/macro";

interface ActiveProps {
  backgroundColor?: string;
  background?: any;
}

export const Container = styled.div`
  width: 220px;
  height: 245px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-conternt: center;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: -1px 10px 60px rgba(27, 27, 30, 0.1);
  margin-bottom: 3rem;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 60%;
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
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  i {
    position: absolute;
    top: 10%;
    right: 7%;
    color: #f4f9e9;
    font-size: 18px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const RankLabel = styled.div<ActiveProps>`
  position: absolute;
  top: 8%;
  left: 5%;
  width: 46px;
  height: 46px;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background: ${({ background }) => background};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  h3 {
    font-family: Work Sans;
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    color: #fafcfa;
  }
`;

export const InformationContainer = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1.3rem;
`;

export const Name = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 0.2rem;

  p {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    color: #153243;
    margin-right: 0.1rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    padding: 0.3rem 0;
  }

  img {
    width: 23px;
    height: auto;
  }
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
      font-family: Work Sans;
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      color: #cdcdcd;
      margin-right: 0.2rem;
    }

    i {
      font-size: 12px;
      color: #cdcdcd;
    }
  }
`;

export const SchoolAndMembers = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  p {
    font-family: Work Sans;
    font-style: italic;
    font-weight: 600;
    font-size: 12px;
    color: #b4b8ab;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;

export const Members = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  padding-left: auto;
`;

export const Member = styled.div<ActiveProps>`
  img {
    width: 19px;
    height: 19px;
    object-fit: cover;
    border-radius: 50%;
    background-color: ${({ backgroundColor }) => backgroundColor};
    margin: 0;
  }
`;
