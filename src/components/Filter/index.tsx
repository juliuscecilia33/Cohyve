import React from "react";
import { Checkbox } from "@mui/material";
import { pink } from "@mui/material/colors";

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
  itemText?: string;
  children?: React.ReactNode;
  active?: boolean;
  checked?: any;
  handleChange?: any;
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
  checked,
  handleChange,
  active,
  onClick,
  itemText,
  children,
  ...restProps
}: ItemProps) {
  return (
    <DropdownItem active={active} onClick={onClick} {...restProps}>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "controlled" }}
        sx={{
          "&.Mui-checked": {
            color: "#AFD5AA",
          },
          "& .MuiSvgIcon-root": { fontSize: 20 },
        }}
      />
      <h3>{itemText}</h3>
    </DropdownItem>
  );
};
