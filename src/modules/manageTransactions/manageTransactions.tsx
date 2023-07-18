import React from "react";
import styled from "styled-components";
import { AdminTransactionItem, SectionCard } from "../../components";
import { HeaderText } from "../../common";
import { device } from "../../constants/devices";
import { useQuery } from "@tanstack/react-query";
import { getPaymentsQueryFunc } from "../../api/auth";
import { useStore } from "../../store";

export function ManageTransactionsSection() {
  const access_token = useStore((state) => state.access_token);

  const payments = useQuery({
    queryKey: ["payments"],
    queryFn: () => getPaymentsQueryFunc(access_token),
  });

  return (
    <StyledSectionCard>
      <HeaderText>Manage Transactions</HeaderText>
      <StyledTransactionsList>
        {payments.data?.orders &&
          payments.data.orders
            .sort((a, b) => b.ID - a.ID)
            .map((order) => (
              <AdminTransactionItem
                key={order.ID + order.UserId}
                price={order.data.pricing.local.amount}
                userId={order.UserId}
                paymentId={order.ID}
                isPending={order.State === "submitted"}
              />
            ))}
        {/* <AdminTransactionItem
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
        /> */}
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
