import React from "react";
import styled from "styled-components";
import { SectionCard } from "../../components";

export function OrdersSection() {
  return <StyledSectionCard>orders</StyledSectionCard>;
}

const StyledSectionCard = styled(SectionCard)`
  flex-grow: 2;
`;
