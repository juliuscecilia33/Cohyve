import styled from "styled-components/macro";

interface ActiveProps {
  width?: any;
  isAnnouncement?: boolean;
  buttonBackground?: any;
  background?: string;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  align-items: flex-start;

  a {
    width: 90%;
  }
`;

export const PhotosContainer = styled.div`
  width: 100%;
  height: 425px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 20px;
  box-shadow: -1px 10px 60px rgba(27, 27, 30, 0.1);

  a {
    width: 0%;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.4) 0%,
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
  top: 4%;
  right: 2%;
  background: linear-gradient(94.39deg, #4d566a 8.09%, #091f2e 93.12%);
  z-index: 100;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  opacity: 0.7;

  &:hover {
    box-shadow: -1px 6px 60px rgba(27, 27, 30, 0.2);
    transform: translateY(-2.5%);
    opacity: 1;
  }

  i {
    font-size: 16px;
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
  padding: 1rem 2rem;
  transform: ${({ width }) => (width === "85%" ? "translateY(-32.5%)" : null)};

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
    margin-bottom: 1rem;

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
        font-size: 60px;
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

export const ShowcasePostContainer = styled.div`
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

export const AboutPostContainer = styled.div`
  width: 100%;
  margin: 0.7rem 0;
  display: flex;
  flex-direction: column;

  .heading_and_text {
    margin: 0.7rem 0;
    display: flex;
    flex-direction: column;

    h2 {
      font-family: "Outfit";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      color: #284b63;
      margin-bottom: 0.5rem;
    }

    p {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 500;
      font-size: 13px;
      line-height: 20px;
      color: #9d9d9d;
      padding-left: 1rem;
      height: 80px;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }

  .contact {
    margin: 0.7rem 0;
    display: flex;
    flex-direction: column;

    h2 {
      font-family: "Outfit";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      color: #284b63;
      margin-bottom: 0.5rem;
    }

    .buttons {
      display: flex;
      align-items: center;
    }
  }
`;

export const ButtonContainer = styled.button<ActiveProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${({ buttonBackground }) => buttonBackground};
  box-shadow: -1px 10px 60px rgba(27, 27, 30, 0.1);
  cursor: pointer;
  outline: none;
  border: none;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    box-shadow: -1px 6px 60px rgba(27, 27, 30, 0.2);
    transform: translateY(-2.5%);
  }

  i {
    color: #f0f2ef;
    font-size: 18px;
  }
`;

export const TopPostLayer = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .club_and_user {
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;

    .club {
      display: flex;
      align-items: center;

      img {
        margin-right: 1rem;
        width: 58px;
        height: 58px;
        object-fit: cover;
        border-radius: 50%px;
      }

      .border {
        width: 1px;
        height: 100%;
        background: #c4c4c4;
        margin-right: 1rem;
      }
    }

    .user {
      display: flex;
      align-items: center;

      img {
        margin-right: 0.3rem;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        object-fit: cover;
      }

      .user_data {
        display: flex;
        flex-direction: column;

        h3 {
          font-family: "Outfit";
          font-style: normal;
          font-weight: 700;
          font-size: 18px;
          margin-bottom: 0.3rem;
          color: #284b63;
        }

        p {
          font-family: "Poppins";
          font-style: normal;
          font-weight: 500;
          font-size: 10px;
          color: #c4c4c4;
        }
      }
    }
  }

  .partners_and_button {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 50%;

    a {
      width: 100%;
    }

    .partners {
      display: flex;
      align-items: center;
    }
  }
`;

export const Partner = styled.div<ActiveProps>`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
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

export const SupportPostContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  .sponsor_actions {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      font-family: "Outfit";
      font-style: normal;
      font-weight: 600;
      font-size: 11px;
      margin-bottom: 0.5rem;
      color: #afafaf;
    }

    .links_buttons {
      display: flex;
      flex-direction: column;
      align-items: center;

      button {
        margin-bottom: 0.8rem;
        height: 32px;
        padding: 0.8rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(
          87.85deg,
          #7f7fd5 1.81%,
          #86a8e7 50.62%,
          #9be0dc 98.19%
        );
        box-shadow: -1px 10px 60px rgba(27, 27, 30, 0.1);
        border-radius: 40px;
        font-family: "Outfit";
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        color: #fafcfa;
        transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

        &:hover {
          transform: translateY(-2.5%);
        }
      }
    }
  }
`;
