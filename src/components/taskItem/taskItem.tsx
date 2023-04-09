import React from "react";
import styled from "styled-components";
import { Text } from "../../common";

interface TaskItemProps {
  number: number;
  description: string;
  isActive: boolean;
}

export function TaskItem(props: TaskItemProps) {
  const { number, description, isActive } = props;

  return (
    <StyledTaskItemWrapper>
      <Text.h4 weight={600}>Task {number}</Text.h4>
      <Text.h4>{description}</Text.h4>
      <Text.h4 weight={600}>{isActive ? "On" : "Off"}</Text.h4>
    </StyledTaskItemWrapper>
  );
}

const StyledTaskItemWrapper = styled.section`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.lightGray};
  border-radius: ${(props) => props.theme.borderRadius.default};
  outline: 2px solid ${(props) => props.theme.colors.bg};

  :hover {
    outline: 2px solid ${(props) => props.theme.colors.primary};
  }
`;
