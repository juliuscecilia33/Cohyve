import styled from "styled-components/macro";

export const Container = styled.div`
  width: 40%;
  height: 100vh;
  display: flex;
  justify-content: right;
  background: #1d1e22;
`;

export const Content = styled.div`
  width: 45%;
  height: 100%;
  padding: 1.2rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Logo = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 5rem;
`;

export const Tabs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Tab = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1.3rem;

  p,
  i {
    font-size: 20px;
    color: #fafcfa;
    transition: 0.5s ease all;

    &:hover {
      color: #afd5aa;
    }
  }

  i {
    margin-right: 0.5rem;
  }
`;

export const Button = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
