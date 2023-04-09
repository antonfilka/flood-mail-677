import React from "react";
import styled from "styled-components";

interface TransactionItemProps {
  date: string;
  orderNumber: number;
  price: number;
  isDeposit: boolean;
}

export function TransactionItem(props: TransactionItemProps) {
  const { date, orderNumber, price, isDeposit } = props;
  return (
    <StyledTransactionItemWrapper>transactionItem</StyledTransactionItemWrapper>
  );
}

const StyledTransactionItemWrapper = styled.section``;
