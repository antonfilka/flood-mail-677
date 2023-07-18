import React from "react";
import styled from "styled-components";
import { SectionCard, TaskItem } from "../../components";
import { HeaderText } from "../../common";
import { device } from "../../constants/devices";
import { useStore } from "../../store";
import { useQuery } from "@tanstack/react-query";
import { getTasksQueryFunc } from "../../api/auth";

export function TasksSection() {
  const access_token = useStore((state) => state.access_token);

  const tasks = useQuery({
    queryKey: ["tasks"],
    queryFn: () => getTasksQueryFunc(access_token),
  });

  return (
    <StyledSectionCard>
      <HeaderText>Tasks</HeaderText>
      <StyledTasksList>
        {tasks.data?.["tasks:"] &&
          tasks.data?.["tasks:"].map((task) => (
            <TaskItem
              key={task.Email + task.Time}
              number={task.Id}
              userId={task.UserID}
              description={`${task.Email} / ${task.Time} min`}
              isActive={task.Status === "in_progress"}
            />
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
