import React, { useState } from "react";
import styled from "styled-components";
import { PriceTag, SectionCard } from "../../components";
import { useStore } from "../../store";
import { Button, Input, Text } from "../../common";

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
        <StyledTitleText>Enter value</StyledTitleText>
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
      <StyledTransactionsRow>
        <StyledTitleText>Transactions history</StyledTitleText>
      </StyledTransactionsRow>
    </StyledSectionCard>
  );
}

const StyledSectionCard = styled(SectionCard)`
  flex-grow: 2;
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

const StyledTransactionsRow = styled.section`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledTitleText = styled(Text.h3)`
  margin-bottom: 10px;
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
