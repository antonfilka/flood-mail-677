import React from "react";
import styled from "styled-components";

const StyledPageSection = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: red;
`;
const StyledModal = styled.section`
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.borderRadius.default};
`;

export function SignInPage() {
  return (
    <StyledPageSection>
      <StyledModal>signInPage</StyledModal>
    </StyledPageSection>
  );
}
