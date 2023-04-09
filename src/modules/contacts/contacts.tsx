import React from "react";
import styled from "styled-components";
import { SectionCard } from "../../components";
import { device } from "../../constants/devices";

export function ContactsSection() {
  return <StyledSectionCard>contacts</StyledSectionCard>;
}

const StyledSectionCard = styled(SectionCard)`
  flex-grow: 2;

  @media ${device.tablet} {
    width: 100%;
    flex-grow: 1;
  }
`;
