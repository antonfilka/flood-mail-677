import React, { useState } from "react";
import styled from "styled-components";
import { PriceListItem, SectionCard } from "../../components";
import { device } from "../../constants/devices";
import { Button, HeaderText, Input, Text } from "../../common";
import { useMutation } from "@tanstack/react-query";
import { startFloodMutationFunc } from "../../api/auth";
import { useStore } from "../../store";
import { queryClient } from "../../api";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./validation.schema";

export interface PriceListItem {
  id: number;
  time: number;
  price: number;
}

const PriceListItems = [
  {
    id: 1,
    time: 1,
    price: 1,
  },
  {
    id: 2,
    time: 5,
    price: 5,
  },
  {
    id: 3,
    time: 100,
    price: 10,
  },
  {
    id: 4,
    time: 200,
    price: 20,
  },
];

const formOptions = {
  resolver: zodResolver(schema),
};

interface Inputs {
  email: string;
}

export function OrdersSection() {
  const [selectedPriceId, setSelectedPriceId] = useState<number | null>(null);
  const [isSelectError, setIsSelectError] = useState(false);
  const [lowBalance, setLowBalance] = useState(false);
  const access_token = useStore((state) => state.access_token);

  const createTaskButtonClickHandler: SubmitHandler<Inputs> = (data) => {
    if (!selectedPriceId) {
      setIsSelectError(true);
      return;
    }
    const option = PriceListItems.find((item) => item.id === selectedPriceId);
    flood.mutate({
      payload: {
        Email: data.email.trim(),
        Time: option?.time || 1,
        price: option?.price || 1,
      },
      access_token,
    });
  };

  const flood = useMutation({
    mutationKey: ["userData"],
    mutationFn: startFloodMutationFunc,
    onSuccess: () => {
      setSelectedPriceId(null);
      setIsSelectError(false);
      setLowBalance(false);
      reset();
      queryClient.invalidateQueries({ queryKey: ["userData", "tasks"] });
      console.log("Flood start successful");
    },
    onError: (error: any) => {
      if (error?.response.data.error === "low balance") setLowBalance(true);
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
      <HeaderText>Make order</HeaderText>

      <StyledPriceList onSubmit={handleSubmit(createTaskButtonClickHandler)}>
        <StyledEmailInput
          $border
          placeholder="Enter email"
          type="email"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <StyledErrorText>{errors.email.message}</StyledErrorText>
        )}

        <HeaderText>Price List</HeaderText>
        {PriceListItems.map((item) => (
          <PriceListItem
            key={item.id}
            id={item.id}
            price={item.price}
            amount={item.time}
            isSelected={selectedPriceId === item.id}
            setSelectedPriceId={setSelectedPriceId}
          />
        ))}
        {isSelectError && (
          <StyledErrorText>Choose flood option</StyledErrorText>
        )}
        {lowBalance && (
          <StyledErrorText>
            Balance is low. Top up your balance to choose this option
          </StyledErrorText>
        )}
        <StyledSubmitButton type="submit">Create task</StyledSubmitButton>
      </StyledPriceList>
    </StyledSectionCard>
  );
}

const StyledSectionCard = styled(SectionCard)`
  flex-grow: 1;
  flex-shrink: 1.5;

  @media ${device.laptop} {
    min-height: 65vh;
  }
`;

const StyledEmailInput = styled(Input)`
  margin-bottom: 10px;
`;

const StyledSubmitButton = styled(Button)`
  margin-top: auto;
`;

const StyledPriceList = styled.form`
  width: 100%;
  height: 100%;
  padding: 2px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  overflow-y: auto;
  margin-bottom: 15px;
`;

const StyledErrorText = styled.p`
  float: center;
  color: ${(props) => props.theme.colors.red};
`;
