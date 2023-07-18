import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import styled from "styled-components";
import { queryClient } from "../../api";
import { putPaymentByIdQueryFunc } from "../../api/auth";
import { Text } from "../../common";
import { useStore } from "../../store";

interface TransactionItemProps {
  date?: string;
  price: string;
  userId: number;
  paymentId: number;
  isPending?: boolean;
}

export function AdminTransactionItem(props: TransactionItemProps) {
  const { date, userId, price, isPending, paymentId } = props;

  const access_token = useStore((state) => state.access_token);

  const onConfirmClick = () => {
    putPayment.mutate({ access_token, userId: `${userId}`, paymentId });
  };

  const putPayment = useMutation({
    mutationKey: ["payments"],
    mutationFn: putPaymentByIdQueryFunc,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["payments"] });
      console.log("Make payment put successful");
    },
  });

  return (
    <StyledTransactionItemWrapper>
      <StyledOrderBlock>
        {/* <StyledDateText>{date}</StyledDateText> */}
        <Text.h3>User id: {userId} &nbsp;</Text.h3>
        <StyledPrice>{price}$</StyledPrice>
      </StyledOrderBlock>
      {isPending && (
        <StyledIconButton
          icon={faCircleCheck}
          size="lg"
          title="Confirm"
          onClick={onConfirmClick}
        />
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

const StyledPrice = styled(Text.h3)`
  color: ${(props) => props.theme.colors.green};
`;

const StyledIconButton = styled(FontAwesomeIcon)`
  margin-right: 5px;

  :hover {
    cursor: pointer;
  }
`;
