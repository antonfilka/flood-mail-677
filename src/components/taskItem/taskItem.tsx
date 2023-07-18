import { faPause, faPlay, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import styled from "styled-components";
import { queryClient } from "../../api";
import { deleteTaskByIdQueryFunc, putTaskByIdQueryFunc } from "../../api/auth";
import { Text } from "../../common";
import { useStore } from "../../store";

interface TaskItemProps {
  number: number;
  userId: string;
  description: string;
  isActive: boolean;
  isFinished?: boolean;
  adminTask?: boolean;
}

export function TaskItem(props: TaskItemProps) {
  const { number, description, isActive, adminTask, isFinished, userId } =
    props;

  const access_token = useStore((state) => state.access_token);

  const putTask = useMutation({
    mutationKey: ["tasks"],
    mutationFn: putTaskByIdQueryFunc,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      console.log("Make task put successful");
    },
  });

  const deleteTask = useMutation({
    mutationKey: ["tasks"],
    mutationFn: deleteTaskByIdQueryFunc,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      console.log("Make task delete successful");
    },
  });

  const onPauseClick = () => {
    console.log(userId);
    putTask.mutate({ access_token, userId, taskId: number, status: "stop" });
  };
  const onStartClick = () => {
    putTask.mutate({ access_token, userId, taskId: number, status: "start" });
  };
  const onDeleteClick = () => {
    deleteTask.mutate({ access_token, userId, taskId: number });
  };

  return (
    <StyledTaskItemWrapper>
      <StyledTitleText>
        <Text.h4 weight={600}>Task {number} &nbsp;</Text.h4>
        <Text.h4>{description}</Text.h4>
      </StyledTitleText>
      <StyledIconsContainer>
        {isActive
          ? !isFinished &&
            !adminTask && (
              <StyledIconButton
                icon={faPause}
                onClick={onPauseClick}
                title="Pause"
              />
            )
          : !isFinished &&
            !adminTask && (
              <StyledIconButton
                icon={faPlay}
                onClick={onStartClick}
                title="Start"
              />
            )}
        {adminTask && (
          <StyledIconButton
            icon={faTrash}
            onClick={onDeleteClick}
            title="Delete"
          />
        )}
      </StyledIconsContainer>
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

const StyledTitleText = styled.section`
  display: flex;
  align-items: center;
`;

const StyledIconsContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StyledIconButton = styled(FontAwesomeIcon)`
  margin-right: 5px;

  :hover {
    cursor: pointer;
  }
`;
