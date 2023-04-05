import React from "react";
import styled from "styled-components";

const StyledContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 20px;
  padding: 15px 0;
`;

export function Header() {
  return <StyledContainer>Header</StyledContainer>;
}
