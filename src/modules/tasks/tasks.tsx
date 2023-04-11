import React from "react";
import styled from "styled-components";
import { SectionCard, TaskItem } from "../../components";
import { HeaderText } from "../../common";
import { device } from "../../constants/devices";

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
      <HeaderText>Tasks</HeaderText>
      <StyledTasksList>
        {Tasks.map((task) => (
          <TaskItem key={task.id} {...task} />
        ))}
      </StyledTasksList>
    </StyledSectionCard>
  );
}

const StyledSectionCard = styled(SectionCard)`
  flex-grow: 6;

  @media ${device.laptop} {
    min-height: 70vh;
  }
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
