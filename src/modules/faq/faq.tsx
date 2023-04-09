import React from "react";
import styled from "styled-components";
import { SectionCard } from "../../components";

export function FaqSection() {
  return <StyledSectionCard>faq</StyledSectionCard>;
}

const StyledSectionCard = styled(SectionCard)`
  flex-grow: 5.8;
`;
