import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { Text } from "../../common";

interface PriceListItemProps {
  id: number;
  amount: number;
  price: number;
  isSelected: boolean;
  setSelectedPrice: Dispatch<SetStateAction<number | null | undefined>>;
}

export function PriceListItem(props: PriceListItemProps) {
  const { id, amount, price, isSelected, setSelectedPrice } = props;

  return (
    <StyledPriceListItemWrapper
      $isSelected={isSelected}
      onClick={() => setSelectedPrice(id)}
    >
      <StyledTextRow>
        <Text.h3>{amount} </Text.h3>
        <Text.h3>&nbsp; - &nbsp; </Text.h3>
        <Text.h3> {price}$</Text.h3>
      </StyledTextRow>
    </StyledPriceListItemWrapper>
  );
}

const StyledPriceListItemWrapper = styled.section<{ $isSelected: boolean }>`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.lightGray};
  border-radius: ${(props) => props.theme.borderRadius.default};
  outline: ${(props) =>
    props.$isSelected ? `2px solid ${props.theme.colors.primary}` : "none"};

  :hover {
    cursor: pointer;
  }
`;

const StyledTextRow = styled.section`
  display: flex;
  align-items: center;
`;
