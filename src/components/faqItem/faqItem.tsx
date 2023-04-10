import React from "react";
import styled from "styled-components";
import { Text } from "../../common";

interface FaqItemProps {
  question: string;
  answer: string;
}

export function FaqItem(props: FaqItemProps) {
  const { answer, question } = props;

  return (
    <StyledItemWrapper>
      <Text.h3 weight={600}>{question}</Text.h3>
      <Text.h4>{answer}</Text.h4>
    </StyledItemWrapper>
  );
}

const StyledItemWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
