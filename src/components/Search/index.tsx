import React from "react";

import {
  Container,
  Dropdown,
  Icon,
  DropdownItems,
  DropdownClubItem,
  DropdownSchoolItem,
} from "./styles/search";

import EnterIcon from "../../../public/images/EnterIcon.png";

type Props = {
  name?: string;
  type?: string;
  placeholder?: string;
  onChange?: any;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  value?: any;
  showItems?: boolean;
  clubProfileImage?: any;
  clubName?: string;
  clubSchool?: string;
  clubState?: string;
  children?: React.ReactNode;
  schoolName?: string;
};

export default function Search({
  name,
  onChange,
  placeholder,
  value,
  type,
  children,
  ...restProps
}: Props) {
  return (
    <Container {...restProps}>
      <input
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
      <Search.Icon />
    </Container>
  );
}

Search.Icon = function SearchIcon({ children, ...restProps }: Props) {
  return (
    <Icon {...restProps}>
      <i className="fas fa-search"></i>
    </Icon>
  );
};

Search.Dropdown = function SearchDropdown({ children, ...restProps }: Props) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

Search.DropdownItems = function SearchDropdownItems({
  showItems,
  children,
  ...restProps
}: Props) {
  return (
    <DropdownItems showItems={showItems} {...restProps}>
      {children}
    </DropdownItems>
  );
};

Search.DropdownClubItem = function SearchDropdownClubItem({
  clubProfileImage,
  clubName,
  clubSchool,
  clubState,
  onClick,
  children,
  ...restProps
}: Props) {
  return (
    <DropdownClubItem onClick={onClick} {...restProps}>
      <img src={clubProfileImage} alt={clubName} />
      <h3>{clubName}</h3>
      <p>
        - {clubSchool}, {clubState}
      </p>
      <div>
        <p>Enter</p>
        <img src={EnterIcon} alt="Enter" />
      </div>
    </DropdownClubItem>
  );
};

Search.DropdownSchoolItem = function SearchDropdownSchoolItem({
  schoolName,
  onClick,
  children,
  ...restProps
}: Props) {
  return (
    <DropdownSchoolItem onClick={onClick} {...restProps}>
      <h3>{schoolName}</h3>
      <div>
        <p>Enter</p>
        <img src={EnterIcon} alt="Enter" />
      </div>
    </DropdownSchoolItem>
  );
};
