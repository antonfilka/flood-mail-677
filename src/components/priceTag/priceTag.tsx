import React from "react";
import styled from "styled-components";
import { Text } from "../../common";

interface PriceTagProps {
  price: number;
}

export function PriceTag(props: PriceTagProps) {
  const { price } = props;

  return (
    <StyledPriceTagWrapper>
      <Text.h3 weight={600}>{price}$</Text.h3>
    </StyledPriceTagWrapper>
  );
}

const StyledPriceTagWrapper = styled.section`
  border-radius: ${(props) => props.theme.borderRadius.default};
  background-color: ${(props) => props.theme.colors.lightGray};
  padding: 5px 10px;
`;
