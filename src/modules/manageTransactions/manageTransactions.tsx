import React from "react";
import styled from "styled-components";
import { AdminTransactionItem, SectionCard } from "../../components";
import { HeaderText } from "../../common";
import { device } from "../../constants/devices";

export function ManageTransactionsSection() {
  return (
    <StyledSectionCard>
      <HeaderText>Manage Transactions</HeaderText>
      <StyledTransactionsList>
        <AdminTransactionItem
          date="21.04.03"
          price={21}
          username={"username 1"}
          isPending
        />
        <AdminTransactionItem
          date="21.04.03"
          price={17}
          username={"username 2"}
          isPending
        />
        <AdminTransactionItem
          date="21.04.03"
          price={34}
          username={"username 3"}
        />
        <AdminTransactionItem
          date="21.04.03"
          price={40}
          username={"username 4"}
        />
      </StyledTransactionsList>
    </StyledSectionCard>
  );
}

const StyledSectionCard = styled(SectionCard)`
  @media ${device.laptop} {
    flex-grow: 1;
  }
`;

const StyledTransactionsList = styled.section`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  overflow-y: scroll;
`;
