import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  padding: 3rem 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f7faf7;
  position: relative;

  input {
    width: 65%;
    background: red;

    &::placeholder {
      font-family: Poppins;
      font-style: normal;
      font-weight: bold;
      font-size: 36px;
      color: #cdcdcd;
    }
  }
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85px;
  height: 85px;
  border-radius: 50%;
  background: #f1f7ed;

  i {
    width: 75%;
    height: auto;
    color: #284b63;
  }
`;

export const DropdownItems = styled.div`
  position: absolute;
  width: 100%;
  padding: 1rem;
  background: #fafcfa;
  box-shadow: -1px 10px 60px rgba(27, 27, 30, 0.1);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DropdownClubItem = styled.button`
  width: 100%;
  height: 85px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border-radius: 10px;
  transition: 0.5s ease all;

  &:hover {
    background: #f6f6f6;

    .enter {
      display: flex;
    }
  }

  .club {
    display: flex;
    align-items: center;

    img {
      width: 55px;
      height: 55px;
      object-fit: cover;
      margin-right: 0.5rem;
    }

    h3 {
      font-family: Work Sans;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      color: #153243;
      margin-right: 0.3rem;
    }

    p {
      font-family: Work Sans;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      color: #cdcdcd;
    }
  }

  .enter {
    display: none;
    align-items: center;

    p {
      font-family: Work Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      color: #cdcdcd;
    }

    img {
      display: none;
      width: 30px;
      height: auto;
      opacity: 0.25;
    }
  }
`;

export const DropdownSchoolItem = styled.button`
  width: 100%;
  height: 85px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border-radius: 10px;
  transition: 0.5s ease all;

  h3 {
    font-family: Work Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    color: #153243;
    margin-right: 0.3rem;
  }

  &:hover {
    background: #f6f6f6;

    .enter {
      display: flex;
    }
  }

  .enter {
    display: none;
    align-items: center;

    p {
      font-family: Work Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      color: #cdcdcd;
    }

    img {
      display: none;
      width: 30px;
      height: auto;
      opacity: 0.25;
    }
  }
`;
