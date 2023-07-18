import React from "react";
import styled from "styled-components";
import { SectionCard, TaskItem } from "../../components";
import { HeaderText } from "../../common";
import { device } from "../../constants/devices";
import { useStore } from "../../store";
import { useQuery } from "@tanstack/react-query";
import { getTasksQueryFunc } from "../../api/auth";

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
  const access_token = useStore((state) => state.access_token);

  const tasks = useQuery({
    queryKey: ["tasks"],
    queryFn: () => getTasksQueryFunc(access_token),
  });

  return (
    <StyledSectionCard>
      <HeaderText>Manage Orders</HeaderText>
      <StyledTasksList>
        {tasks.data?.["tasks:"] &&
          tasks.data?.["tasks:"].map((task) => (
            <TaskItem
              key={task.Email + task.Time}
              number={task.Id}
              userId={task.UserID}
              description={`${task.Email} / ${task.Time} min`}
              isActive={task.Status === "in_progress"}
              adminTask
            />
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
