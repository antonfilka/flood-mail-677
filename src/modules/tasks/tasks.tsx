import React from "react";
import styled from "styled-components";
import { SectionCard } from "../../components";
import { device } from "../../constants/devices";

export function TasksSection() {
  return <StyledSectionCard>tasks</StyledSectionCard>;
}

const StyledSectionCard = styled(SectionCard)`
  max-width: 100%;
  flex-grow: 4;

  @media ${device.tablet} {
    width: 100%;
    flex-grow: 1;
  }
`;
