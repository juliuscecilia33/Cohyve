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
