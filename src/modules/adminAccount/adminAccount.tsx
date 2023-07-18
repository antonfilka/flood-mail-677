import React from "react";
import styled from "styled-components";
import { UserData } from "../../api/auth";
import { AccountWrapper } from "../../components";
import { device } from "../../constants/devices";
import { ManageOrdersSection } from "../manageOrders";
import { ManageTransactionsSection } from "../manageTransactions";

interface AdminAccountProps {
  userData: UserData | undefined;
}

export function AdminAccount(props: AdminAccountProps) {
  const { userData } = props;

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
  max-width: 100%;
  height: 100%;

  display: flex;
  gap: 20px;

  @media ${device.laptop} {
    flex-direction: column;
  }
`;
