import React, { useState } from "react";
import styled from "styled-components";
import { PriceTag, SectionCard, TransactionItem } from "../../components";
import { useStore } from "../../store";
import { Button, HeaderText, Input, Text } from "../../common";
import { device } from "../../constants/devices";

export function ProfileSection() {
  const [priceValue, setPriceValue] = useState<number | undefined>(undefined);
  const userData = useStore((state) => state);

  const handlePriceChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = parseFloat(e.currentTarget.value);
    setPriceValue(value);
  };

  return (
    <StyledSectionCard>
      <StyledNameRow>
        <StyledUsername>{userData.username}</StyledUsername>
        <PriceTag price={44.44} />
      </StyledNameRow>
      <StyledPriceInputRow>
        <HeaderText>Enter value</HeaderText>
        <Input
          $border
          placeholder="$"
          type="number"
          value={String(priceValue)}
          onChange={handlePriceChange}
        />
      </StyledPriceInputRow>
      <StyledPayButton>
        <Text.h4 color="white">Pay with &nbsp;</Text.h4>
        <Text.h4 color="white" weight={600}>
          coinbase
        </Text.h4>
      </StyledPayButton>
      <HeaderText>Transactions history</HeaderText>
      <StyledTransactionsList>
        <TransactionItem date="21.04.03" price={10} />
        <TransactionItem date="21.04.03" price={21} orderNumber={5179} />
        <TransactionItem date="21.04.03" price={7} />
        <TransactionItem date="21.04.03" price={21} orderNumber={5179} />
        <TransactionItem date="21.04.03" price={7} />
        <TransactionItem date="21.04.03" price={21} orderNumber={5179} />
        <TransactionItem date="21.04.03" price={7} />
        <TransactionItem date="21.04.03" price={21} orderNumber={5179} />
      </StyledTransactionsList>
    </StyledSectionCard>
  );
}

const StyledSectionCard = styled(SectionCard)`
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
