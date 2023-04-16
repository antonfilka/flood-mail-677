import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { Text } from "../../common";

interface TransactionItemProps {
  date: string;
  username: string;
  price: number;
  isPending?: boolean;
}

export function AdminTransactionItem(props: TransactionItemProps) {
  const { date, username, price, isPending } = props;
  return (
    <StyledTransactionItemWrapper>
      <StyledOrderBlock>
        <StyledDateText>{date}</StyledDateText>
        <Text.h3>{username} &nbsp;</Text.h3>
        <StyledPrice>{price}$</StyledPrice>
      </StyledOrderBlock>
      {isPending && <StyledIconButton icon={faCircleCheck} size="lg" />}
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

const StyledPrice = styled(Text.h3)`
  color: ${(props) => props.theme.colors.green};
`;

const StyledIconButton = styled(FontAwesomeIcon)`
  margin-right: 5px;

  :hover {
    cursor: pointer;
  }
`;
