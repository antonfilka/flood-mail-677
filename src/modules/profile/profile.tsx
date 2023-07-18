import React, { useState } from "react";
import styled from "styled-components";
import { PriceTag, SectionCard, TransactionItem } from "../../components";
import { Button, HeaderText, Input, Text } from "../../common";
import { device } from "../../constants/devices";
import { makePaymentMutationFunc, UserData } from "../../api/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./validation.schema";
import { useMutation } from "@tanstack/react-query";
import { useStore } from "../../store";
import { queryClient } from "../../api";
import { redirect } from "react-router-dom";

const formOptions = {
  resolver: zodResolver(schema),
};
interface ProfileSectionProps {
  userData: UserData | undefined;
}

interface Inputs {
  price: number;
}

export function ProfileSection(props: ProfileSectionProps) {
  const { userData } = props;

  const access_token = useStore((state) => state.access_token);
  const email = useStore((state) => state.email);

  const onPaymentSubmit: SubmitHandler<Inputs> = (data) => {
    makePayment.mutate({
      payload: {
        name: email,
        description: `Payment for ${email}`,
        local_price: {
          amount: `${data.price}`,
          currency: "usd",
        },
        redirect_url: "https://flood-mail.web.app/home",
        cancel_url: "https://flood-mail.web.app/home",
      },
      access_token,
    });
  };

  const makePayment = useMutation({
    mutationKey: ["userData"],
    mutationFn: makePaymentMutationFunc,
    onSuccess: (data) => {
      reset();
      queryClient.invalidateQueries({ queryKey: ["userData"] });
      console.log("Make payment successful");
      window.open(data.data.hosted_url, "_blank", "noreferrer");
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>(formOptions);

  return (
    <StyledSectionCard>
      <StyledNameRow>
        <StyledUsername>{userData?.user.name || ""}</StyledUsername>
        <PriceTag price={userData?.user.balance || 0} />
      </StyledNameRow>
      <form onSubmit={handleSubmit(onPaymentSubmit)}>
        <StyledPriceInputRow>
          <HeaderText>Enter value</HeaderText>
          <Input
            $border
            placeholder="$"
            type="number"
            {...register("price", { required: true })}
          />
        </StyledPriceInputRow>
        {errors.price && (
          <StyledErrorText>{errors.price.message}</StyledErrorText>
        )}
        <StyledPayButton type="submit">
          <Text.h4 color="white">Pay with &nbsp;</Text.h4>
          <Text.h4 color="white" weight={600}>
            coinbase
          </Text.h4>
        </StyledPayButton>
      </form>
      <HeaderText>Transactions history</HeaderText>
      <StyledTransactionsList>
        {userData?.payments &&
          userData?.payments
            .sort((a, b) => b.ID - a.ID)
            .map((payment) => (
              <TransactionItem
                key={payment.ID}
                status={payment.State}
                date={payment.data.timeline}
                price={payment.data.pricing.local.amount}
              />
            ))}
        {/* <TransactionItem date="21.04.03" price={10} />
        <TransactionItem date="21.04.03" price={21} orderNumber={5179} />
        <TransactionItem date="21.04.03" price={7} />
        <TransactionItem date="21.04.03" price={21} orderNumber={5179} />
        <TransactionItem date="21.04.03" price={7} />
        <TransactionItem date="21.04.03" price={21} orderNumber={5179} />
        <TransactionItem date="21.04.03" price={7} />
        <TransactionItem date="21.04.03" price={21} orderNumber={5179} /> */}
      </StyledTransactionsList>
    </StyledSectionCard>
  );
}

const StyledSectionCard = styled(SectionCard)`
  flex-grow: 1;
  flex-shrink: 1.5;

  @media ${device.laptop} {
    min-height: 70vh;
  }
`;

const StyledNameRow = styled.section`
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const StyledPriceInputRow = styled.section`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 15px;
`;

const StyledTransactionsList = styled.section`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  overflow-y: scroll;
`;

const StyledPayButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
`;

const StyledUsername = styled(Text.h2)`
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledErrorText = styled.p`
  float: center;
  color: ${(props) => props.theme.colors.red};
`;
