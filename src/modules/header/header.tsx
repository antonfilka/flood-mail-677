import React from "react";
import styled from "styled-components";
import { useStore } from "../../store";

export function Header() {
  const userData = useStore((state) => state);

  return (
    <StyledContainer>
      <StyledLogo>Header</StyledLogo>
      <StyledNavSection>
        <StyledNavEmail>{userData.email}</StyledNavEmail>
        <StyledNavExitButton>EXIT</StyledNavExitButton>
      </StyledNavSection>
    </StyledContainer>
  );
}

const StyledContainer = styled.section`
  height: 7%;
  width: 100%;
  padding: 15px 100px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.bgTransparent};
`;

const StyledLogo = styled.section``;

const StyledNavSection = styled.section`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StyledNavEmail = styled.section``;

const StyledNavExitButton = styled.button`
  color: ${(props) => props.theme.colors.white};
  background-color: transparent;
`;
