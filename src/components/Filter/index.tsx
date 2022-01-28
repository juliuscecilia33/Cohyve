import React from "react";

import {
  Container,
  Block,
  Button,
  Dropdown,
  DropdownItem,
} from "./styles/filter";

type Props = {
  children?: React.ReactNode;
  horizontal?: boolean;
  title?: string;
};

type ButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  title?: string;
  children?: React.ReactNode;
  text?: string;
  dropdownOpen?: boolean;
};

type ItemProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  schoolName?: string;
  children?: React.ReactNode;
  active?: boolean;
};

export default function Filter({ horizontal, children, ...restProps }: Props) {
  return (
    <Container horizontal={horizontal} {...restProps}>
      {children}
    </Container>
  );
}

Filter.Block = function FilterBlock({ title, children, ...restProps }: Props) {
  return (
    <Block {...restProps}>
      <h3>{title}</h3>
      {children}
    </Block>
  );
};

Filter.Button = function FilterButton({
  dropdownOpen,
  onClick,
  text,
  children,
  ...restProps
}: ButtonProps) {
  return (
    <Button onClick={onClick} {...restProps}>
      {text}
      {dropdownOpen ? (
        <i className="fas fa-chevron-up"></i>
      ) : (
        <i className="fas fa-chevron-down"></i>
      )}
    </Button>
  );
};

Filter.Dropdown = function FilterDropdown({ children, ...restProps }: Props) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

Filter.DropdownItem = function FilterDropdownItem({
  active,
  onClick,
  schoolName,
  children,
  ...restProps
}: ItemProps) {
  return (
    <DropdownItem active={active} onClick={onClick} {...restProps}>
      {children} <h3>{schoolName}</h3>
    </DropdownItem>
  );
};
