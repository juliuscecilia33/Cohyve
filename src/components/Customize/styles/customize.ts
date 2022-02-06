import styled from "styled-components/macro";

interface ActiveProps {
  background?: any;
  selected?: boolean;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #fafcfa;
`;

export const Section = styled.div<ActiveProps>`
  width: 100%;
  padding: 3rem 15%;
  background: ${({ background }) => background};
  display: flex;
  flex-direction: column;
`;

export const Options = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export const HeroOption = styled.div<ActiveProps>`
  width: 600px;
  height: 526px;
  box-shadow: ${({ selected }) =>
    selected
      ? `-1px 10px 60px rgba(175, 213, 170, 0.35)`
      : `-1px 10px 60px rgba(27, 27, 30, 0.1)`};
  border-radius: 30px;
  border: ${({ selected }) => (selected ? `6px solid #afd5aa` : `none`)};
`;

export const FeedOption = styled.div<ActiveProps>`
  width: 600px;
  height: 821px;
  box-shadow: ${({ selected }) =>
    selected
      ? `-1px 10px 60px rgba(175, 213, 170, 0.35)`
      : `-1px 10px 60px rgba(27, 27, 30, 0.1)`};
  border-radius: 30px;
  border: ${({ selected }) => (selected ? `6px solid #afd5aa` : `none`)};
`;
