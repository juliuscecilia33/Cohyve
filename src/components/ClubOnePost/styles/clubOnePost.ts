import styled from "styled-components/macro";

interface ActiveProps {
  width?: any;
  isAnnouncement?: boolean;
}

export const Container = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PhotosContainer = styled.div`
  width: 100%;
  height: 405px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 20px;
  box-shadow: -1px 10px 60px rgba(27, 27, 30, 0.1);

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    border-radius: 20px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
`;

export const MoreImagesIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  background: linear-gradient(94.39deg, #4d566a 8.09%, #091f2e 93.12%);

  i {
    font-size: 22px;
    color: #f9faf9;
  }
`;

export const PostContainer = styled.div<ActiveProps>`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width};
  background: #fafcfa;
  box-shadow: -1px 10px 60px rgba(27, 27, 30, 0.1);
  box-shadow: ${({ isAnnouncement }) =>
    isAnnouncement
      ? `-1px 10px 60px rgba(27, 27, 30, 0.1)`
      : `-1px 10px 60px rgba(175, 213, 170, 0.35)`};
  border: ${({ isAnnouncement }) =>
    isAnnouncement ? `3px solid #AFD5AA;` : `none`};
  border-radius: 20px;
  padding: 1rem;

  .see_more {
    width: 100%;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 500;
      font-size: 10px;
      color: #c4c4c4;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const PartnerEventPostContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0.7rem 0;

  .text {
    width: 100%;
    margin: 0.7rem 0;

    p {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      color: #284b63;
    }
  }

  .date_and_location {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;

    .date_and_location_container {
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;

      i {
        font-size: 70px;
        color: #deecde;
        margin-right: 0.7rem;
      }

      .date_and_location_details {
        display: flex;
        flex-direction: column;

        p {
          font-family: "Outfit";
          font-style: normal;
          font-weight: 600;
          font-size: 11px;
          color: #d0e4d0;
          margin-bottom: 0.4rem;
        }

        h2 {
          font-family: "Poppins";
          font-style: normal;
          font-weight: 700;
          font-size: 18px;
          color: #153243;
          margin-bottom: 0.4rem;
        }

        h3 {
          font-family: "Poppins";
          font-style: normal;
          font-weight: 700;
          font-size: 13px;
          color: #afd5aa;
        }
      }
    }
  }
`;

export const AnnouncementPostContainer = styled.div`
  width: 100%;
  margin: 0.7rem 0;

  p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: #284b63;
  }
`;
