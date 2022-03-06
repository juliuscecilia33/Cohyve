import styled from "styled-components/macro";

export const Container = styled.div`
  position: fixed;
  z-index: 50;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  // overflow: hidden;
  overflow-y: hidden;
`;

export const Window = styled.div`
  width: 1000px;
  height: 250px;
  display: flex;
  flex-direction: column;
  border-radius: 40px;
  border: 5px solid #afd5aa;
  box-shadow: -1px 10px 60px rgba(175, 213, 170, 0.35);
`;

export const Top = styled.div`
  width: 100%;
  height: 55%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f4faf4;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  padding: 0 1rem;

  h2 {
    font-family: Outfit;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 50px;
    text-align: center;
    color: #284b63;

    span {
      color: #afd5aa;
      font-weight: 700;
    }
  }
`;

export const Bottom = styled.div`
  width: 100%;
  height: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fafcfa;
  border-bottom-left-radius: 35px;
  border-bottom-right-radius: 35px;
  padding: 0 1rem;
`;
