import styled from "styled-components/macro";

export const Container = styled.div`
  width: 47%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  position: relative;
  width: 100%;
  max-width: 100%;
  height: 400px;
  max-height: 400px;
  object-fit: contain;
  filter: drop-shadow(-1px 10px 60px rgba(27, 27, 30, 0.1));
  border-radius: 20px;
`;

export const MoreImagesIcon = styled.div`
  width: 39px;
  height: 39px;
  border-radius: 50%;
  background: #153243;
  display: flex;
  justify-content: center;
  align-items: center;

  i {
    color: #f9faf9;
    font-size: 19px;
  }
`;

export const PartnersProfile = styled.div`
  width: 51px;
  height: 51px;
  object-fit: cover;
  border-radius: 50%;
  margin-left: -0.3rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    margin: 0;
  }
`;

export const Title = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: #373f51;
`;

export const Details = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserDetails = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;

export const PartnerEventPostContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 100px;

  .date_and_location_container {
    width: 50%;
    display: flex;
    align-items: center;

    i {
      color: #deecde;
      font-size: 65px;
      margin-right: 0.5rem;
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
        margin-bottom: 0.3rem;
      }

      h2 {
        font-family: "Poppins";
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        color: #153243;
        margin-bottom: 0.3rem;
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
`;

export const AboutPostContainer = styled.div`
  width: 100%;
  margin: 0.7rem 0;
  display: flex;
  flex-direction: column;
  padding: 1rem 0;

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
    width: 100%;

    h2 {
      font-family: "Outfit";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      color: #284b63;
      margin-bottom: 0.5rem;
    }

    .social_icons {
      display: flex;
      align-items: center;

      i {
        color: #153243;
        margin-right: 0.5rem;
      }
    }
  }
`;

export const SupportPostContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem 0;

  p {
    font-family: "Outfit";
    font-style: normal;
    font-weight: 600;
    font-size: 11px;
    margin-bottom: 0.9rem;
    color: #afafaf;
  }

  .links_buttons {
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
      margin: 0 0.8rem;
      height: 32px;
      padding: 1rem 0.8rem;
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
      transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      cursor: pointer;

      p {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        font-family: "Outfit";
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        color: #fafcfa;
        margin: 0;
        padding: 0;
      }

      &:hover {
        transform: translateY(-2.5%);
      }
    }
  }
`;

export const PostActions = styled.div`
  width: 50%;
  display: flex;
  align-items: center;

  .post_action {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 0.4rem;

    .action_icon {
      width: 36px;
      height: 36px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #deecde;
      border-radius: 50%;
      margin-bottom: 0.5rem;

      i {
        font-size: 20px;
        color: rgba(21, 50, 67, 0.31);
      }
    }

    p {
      font-family: "Work Sans";
      font-style: normal;
      font-weight: 600;
      font-size: 10px;
      color: #d0e4d0;
    }
  }
`;

export const ProfileImage = styled.img`
  width: 58px;
  height: 58px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  margin-right: 0.6rem;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-family: "Work Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    color: #284b63;
    margin-bottom: 0.3rem;
  }

  p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    color: #c4c4c4;
  }
`;
