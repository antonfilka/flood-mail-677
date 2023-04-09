import React from "react";
import styled from "styled-components";
import { SectionCard, TaskItem } from "../../components";
import { device } from "../../constants/devices";
import { Text } from "../../common";

const Tasks = [
  {
    id: 1,
    number: 11242,
    description: "hello world",
    isActive: true,
  },
  {
    id: 2,
    number: 11342,
    description: "hello mir",
    isActive: false,
  },
  {
    id: 3,
    number: 11442,
    description: "hello azazaza",
    isActive: true,
  },
];

export function TasksSection() {
  return (
    <StyledSectionCard>
      <StyledHeaderText>Tasks</StyledHeaderText>

      <StyledTasksList>
        {Tasks.map((task) => (
          <TaskItem key={task.id} {...task} />
        ))}
      </StyledTasksList>
    </StyledSectionCard>
  );
}

const StyledSectionCard = styled(SectionCard)`
  max-width: 100%;
  flex-grow: 4;

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
  margin-bottom: 10px;
`;

const StyledTasksList = styled.section`
  width: 100%;
  padding: 3px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
  overflow-y: auto;
`;
