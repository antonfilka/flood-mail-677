import React, { useState } from "react";
import styled from "styled-components";
import { PriceListItem, SectionCard } from "../../components";
import { device } from "../../constants/devices";
import { Button, HeaderText, Input, Text } from "../../common";

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
      <HeaderText>Make order</HeaderText>
      <StyledEmailInput
        $border
        placeholder="Enter email"
        type="email"
        value={targetEmail}
        onChange={(e) => setTargetEmail(e.target.value)}
      />
      <HeaderText>Price List</HeaderText>
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

      <Button onClick={createTaskButtonClickHandler}>Create task</Button>
    </StyledSectionCard>
  );
}

const StyledSectionCard = styled(SectionCard)`
  flex-grow: 1;

  @media ${device.laptop} {
    min-height: 65vh;
  }
`;

const StyledEmailInput = styled(Input)`
  margin-bottom: 10px;
`;

const StyledPriceList = styled.section`
  width: 100%;
  max-height: 60%;
  padding: 2px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  overflow-y: auto;
  margin-bottom: 15px;
`;
