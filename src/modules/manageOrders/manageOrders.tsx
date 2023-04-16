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
    description: "finished task",
    isActive: true,
    isFinished: true,
  },
];

export function ManageOrdersSection() {
  return (
    <StyledSectionCard>
      <HeaderText>Manage Orders</HeaderText>
      <StyledTasksList>
        {Tasks.map((task) => (
          <TaskItem key={task.id} {...task} adminTask />
        ))}
      </StyledTasksList>
    </StyledSectionCard>
  );
}

const StyledSectionCard = styled(SectionCard)`
  @media ${device.laptop} {
    flex-grow: 1;
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
