import React from "react";
import styled from "styled-components";
import { AccountWrapper } from "../../components";
import { ManageOrdersSection } from "../manageOrders";
import { ManageTransactionsSection } from "../manageTransactions";

export function AdminAccount() {
  return (
    <AccountWrapper>
      <StyledSectionsRow>
        <ManageTransactionsSection />
        <ManageOrdersSection />
      </StyledSectionsRow>
    </AccountWrapper>
  );
}

const StyledSectionsRow = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 20px;
`;
