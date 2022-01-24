import React from "react";

import { Container, Dropdown, Icon } from "./styles/search";

type Props = {
  name?: string;
  type?: string;
  placeholder?: string;
  onChange?: any;
  value?: any;
  children?: React.ReactNode;
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
        required
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
