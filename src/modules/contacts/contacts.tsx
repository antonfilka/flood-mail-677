import React from "react";
import styled from "styled-components";
import { SectionCard } from "../../components";

export function ContactsSection() {
  return <StyledSectionCard>contacts</StyledSectionCard>;
}

const StyledSectionCard = styled(SectionCard)`
  flex-grow: 2;
`;
