import React from "react";
import styled from "styled-components";
import { useStore } from "../../store";
import { Text } from "../../common";

export function Header() {
  const userData = useStore((state) => state);

  return (
    <StyledContainer>
      <StyledLogo>
        <Text.h2 color="white">LOGO</Text.h2>
      </StyledLogo>
      <StyledNavSection>
        <StyledNavEmail>
          <Text.h4 color="white">{userData.email}</Text.h4>
        </StyledNavEmail>
        <StyledNavExitButton onClick={userData.logOut}>
          <Text.h3 weight={200} color="white">
            EXIT
          </Text.h3>
        </StyledNavExitButton>
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
  background-color: transparent;
  border: none;

  :hover {
    cursor: pointer;
  }
`;
