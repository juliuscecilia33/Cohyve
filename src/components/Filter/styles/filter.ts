import styled from "styled-components/macro";

interface ActiveProps {
  horizontal?: boolean;
  active?: boolean;
}

export const Container = styled.div<ActiveProps>`
  width: 20%;
  display: flex;
  flex-direction: ${({ horizontal }) => (horizontal ? "row" : "column")};
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  margin-bottom: 2rem;

  .css-1k430x0-MuiButtonBase-root-MuiChip-root {
    background-color: rgba(175, 213, 170, 0.24);
  }

  fieldset {
    border: 1.5px solid #dedede !important;
    outline: none !important;
  }

  .css-1k430x0-MuiButtonBase-root-MuiChip-root {
    font-family: Outfit;

    font-style: normal;
    font-weight: 600;
    font-size: 11px;
    color: #153243;
  }

  .css-1k430x0-MuiButtonBase-root-MuiChip-root .MuiChip-deleteIcon {
    transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    &:hover {
      color: #e75353;
    }
  }

  .MuiAutocomplete-hasPopupIcon.css-16awh2u-MuiAutocomplete-root
    .MuiOutlinedInput-root,
  .MuiAutocomplete-hasClearIcon.css-16awh2u-MuiAutocomplete-root
    .MuiOutlinedInput-root {
    border-radius: 17px;
    padding-left: 1rem;
  }

  .css-16awh2u-MuiAutocomplete-root
    .MuiOutlinedInput-root
    .MuiAutocomplete-input {
    font-family: Outfit;

    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    color: #153243;
    cursor: pointer;
    height: 10px;
    border-radius: 25px;

    &::placeholder {
      color: #153243;
    }
  }

  h3 {
    margin-left: 0.5rem;
    font-family: Outfit;

    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    color: #cdcdcd;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  background: none;
  border: 1.5px solid #dedede;
  border-radius: 15px;
  display: flex;
  align-items: center;
  padding: 0 1.2rem;
  font-family: Outfit;

  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  color: #284b63;
  position: relative;
  cursor: pointer;

  i {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 6%;
    font-size: 10px;
    color: #153243;
    cursor: pointer;
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #fafcfa;
  box-shadow: -1px 10px 60px rgba(27, 27, 30, 0.1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

export const DropdownItem = styled.button<ActiveProps>`
  width: 100%;
  padding: 0.3rem 0.8rem;
  background: ${({ active }) =>
    active ? "rgba(175, 213, 170, 0.24)" : "none"};
  cursor: pointer;
  transition: 0.5s ease all;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: rgba(175, 213, 170, 0.24);
  }

  h3 {
    font-family: Outfit;

    font-style: normal;
    font-weight: 600;
    font-size: 11px;
    color: #153243;
    margin-left: 0.3rem;
  }
`;
