import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #fafcfa;
  padding-bottom: 15rem;
  margin-bottom: 2rem;
`;

export const BannerSrc = styled.div`
  position: relative;
  width: 100%;
  height: 400px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const InfoContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: -36%;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;
