import React from "react";
import styled from "styled-components";
import { SectionCard } from "../../components";

export function ManageTransactionsSection() {
  return <StyledSectionCard>manageTransactions</StyledSectionCard>;
}

const StyledSectionCard = styled(SectionCard)`
  flex-grow: 1;
`;
