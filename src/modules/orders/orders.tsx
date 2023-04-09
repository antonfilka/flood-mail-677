import React, { useState } from "react";
import styled from "styled-components";
import { PriceListItem, SectionCard } from "../../components";
import { device } from "../../constants/devices";
import { Button, Input, Text } from "../../common";

const PriceListItems = [
  {
    id: 1,
    amount: 100,
    price: 1,
  },
  {
    id: 2,
    amount: 500,
    price: 5,
  },
  {
    id: 3,
    amount: 1000,
    price: 10,
  },
  {
    id: 4,
    amount: 2000,
    price: 20,
  },
];

export function OrdersSection() {
  const [targetEmail, setTargetEmail] = useState<string>("");
  const [selectedPrice, setSelectedPrice] = useState<number | null>();

  const createTaskButtonClickHandler = () => {
    setTargetEmail("");
    setSelectedPrice(null);
  };

  return (
    <StyledSectionCard>
      <StyledHeaderText>Make order</StyledHeaderText>
      <StyledEmailInput
        $border
        placeholder="Enter email"
        type="email"
        value={targetEmail}
        onChange={(e) => setTargetEmail(e.target.value)}
      />
      <StyledHeaderText>Price List</StyledHeaderText>
      <StyledPriceList>
        {PriceListItems.map((item) => (
          <PriceListItem
            key={item.id}
            id={item.id}
            price={item.price}
            amount={item.amount}
            isSelected={selectedPrice === item.id}
            setSelectedPrice={setSelectedPrice}
          />
        ))}
      </StyledPriceList>

      <StyledCreateTaskButton onClick={createTaskButtonClickHandler}>
        Create task
      </StyledCreateTaskButton>
    </StyledSectionCard>
  );
}

const StyledSectionCard = styled(SectionCard)`
  max-width: 100%;
  flex-grow: 2;

  @media ${device.tablet} {
    width: 100%;
    flex-grow: 1;
  }
`;

const StyledHeaderText = styled(Text.h2)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 15px;
`;

const StyledEmailInput = styled(Input)`
  margin-bottom: 15px;
`;

const StyledCreateTaskButton = styled(Button)`
  margin-top: auto;
`;

const StyledPriceList = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;
