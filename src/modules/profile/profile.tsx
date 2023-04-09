import React from "react";
import styled from "styled-components";
import { SectionCard } from "../../components";
import { useStore } from "../../store";

export function ProfileSection() {
  const userData = useStore((state) => state);

  return <StyledSectionCard>profile</StyledSectionCard>;
}

const StyledSectionCard = styled(SectionCard)`
  flex-grow: 1;
`;
