import React from "react";
import styled from "styled-components";
import { Text } from "../../common";

interface TransactionItemProps {
  date: string;
  orderNumber?: number;
  status?: string;
  price: number;
}

export function TransactionItem(props: TransactionItemProps) {
  const { date, orderNumber, status, price } = props;
  return (
    <StyledTransactionItemWrapper>
      <StyledOrderBlock>
        <StyledDateText>{date}</StyledDateText>
        {orderNumber ? (
          <StyledOrderText>Order {orderNumber}</StyledOrderText>
        ) : (
          <StyledDepositText>Deposit</StyledDepositText>
        )}
      </StyledOrderBlock>
      {orderNumber && <StyledOrderText>- {price}$</StyledOrderText>}
      {status === "completed" && (
        <StyledDepositText>+ {price}$</StyledDepositText>
      )}
      {status === "submitted" && (
        <StyledPendingText>pending {price}$</StyledPendingText>
      )}
    </StyledTransactionItemWrapper>
  );
}

const StyledTransactionItemWrapper = styled.section`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.lightGray};
  border-radius: ${(props) => props.theme.borderRadius.default};
`;

const StyledOrderBlock = styled.section`
  display: flex;
  align-items: center;
`;

const StyledDateText = styled(Text.h3)`
  margin-right: 20px;
`;

const StyledOrderText = styled(Text.h3)`
  color: ${(props) => props.theme.colors.red};
`;

const StyledDepositText = styled(Text.h3)`
  color: ${(props) => props.theme.colors.green};
`;

const StyledPendingText = styled(Text.h3)`
  color: ${(props) => props.theme.colors.darkGray};
`;
