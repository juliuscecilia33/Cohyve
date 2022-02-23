import React from "react";
import { School, ActionButton } from "../components";
import UW from "../components/Images/UW.jpg";

interface DataProps {
  clubCount?: number;
  src?: string;
  name?: string;
}

export function SchoolContainer({ clubCount, src, name }: DataProps) {
  return (
    <School name={name} src={src}>
      <School.Information name={name}>
        <School.ButtonContainer>
          <ActionButton.Medium
            color="#FAFCFA;"
            background="linear-gradient(94.39deg, rgba(88, 164, 176, 0.8) 8.09%, rgba(175, 213, 170, 0.8) 93.12%);"
            onClick={null}
          >
            {clubCount} {clubCount === 1 ? "Club" : "Clubs"}
          </ActionButton.Medium>
        </School.ButtonContainer>
      </School.Information>
    </School>
  );
}
