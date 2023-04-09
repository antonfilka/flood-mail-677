import React from "react";
import styled from "styled-components";
import { SectionCard } from "../../components";

export function TasksSection() {
  return <StyledSectionCard>tasks</StyledSectionCard>;
}

const StyledSectionCard = styled(SectionCard)`
  max-width: 100%;
  flex-grow: 4;
`;
