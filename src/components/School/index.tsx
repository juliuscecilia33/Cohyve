import React from "react";

import { Container, Information, Name } from "./styles/school";

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
  children,
  ...restProps
}: Props) {
  return <Information {...restProps}>{children}</Information>;
};

School.Name = function SchoolName({ children, ...restProps }: Props) {
  return <Name {...restProps}>{children}</Name>;
};
