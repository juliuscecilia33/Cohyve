import React from "react";

import {
  Container,
  Block,
  Input,
  Dropdown,
  DropdownItem,
} from "./styles/filter";

type Props = {
  children?: React.ReactNode;
  horizontal?: boolean;
  title?: string;
};

type InputProps = {
  onChange?: React.FormEventHandler<HTMLDivElement>;
  name?: string;
  type?: string;
  placeholder?: string;
  value?: any;
  children?: React.ReactNode;
};

type ItemProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  schoolName?: string;
  children?: React.ReactNode;
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

Filter.Input = function FilterInput({
  name,
  type,
  onChange,
  value,
  placeholder,
  children,
  ...restProps
}: InputProps) {
  return (
    <Input {...restProps}>
      <input
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
      <i className="fas fa-chevron-down"></i>
    </Input>
  );
};

Filter.Dropdown = function FilterDropdown({ children, ...restProps }: Props) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

Filter.DropdownItem = function FilterDropdownItem({
  onClick,
  schoolName,
  children,
  ...restProps
}: ItemProps) {
  return (
    <DropdownItem onClick={onClick} {...restProps}>
      {children} <h3>{schoolName}</h3>
    </DropdownItem>
  );
};
