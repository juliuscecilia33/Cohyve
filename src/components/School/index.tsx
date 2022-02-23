import React from "react";

import { Container, Information, ButtonContainer } from "./styles/school";

type Props = {
  name?: string;
  src?: any;
  children?: React.ReactNode;
};

export default function School({ name, src, children, ...restProps }: Props) {
  return (
    <Container {...restProps}>
      <img src={src} alt={name} />
      {children}
    </Container>
  );
}

School.Information = function SchoolInformation({
  name,
  children,
  ...restProps
}: Props) {
  return (
    <Information {...restProps}>
      <h2>{name}</h2>
      {children}
    </Information>
  );
};

School.ButtonContainer = function SchoolInformation({
  children,
  ...restProps
}: Props) {
  return <ButtonContainer {...restProps}>{children}</ButtonContainer>;
};
