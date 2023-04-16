import { faPause, faPlay, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { Text } from "../../common";

interface TaskItemProps {
  number: number;
  description: string;
  isActive: boolean;
  isFinished?: boolean;
  adminTask?: boolean;
}

export function TaskItem(props: TaskItemProps) {
  const { number, description, isActive, adminTask, isFinished } = props;

  return (
    <StyledTaskItemWrapper>
      <StyledTitleText>
        <Text.h4 weight={600}>Task {number} &nbsp;</Text.h4>
        <Text.h4>{description}</Text.h4>
      </StyledTitleText>
      <StyledIconsContainer>
        {isActive
          ? !isFinished && <StyledIconButton icon={faPause} />
          : !isFinished && <StyledIconButton icon={faPlay} />}
        {adminTask && <StyledIconButton icon={faTrash} />}
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
