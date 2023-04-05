import styled, { css } from "styled-components";

export const Button = styled.button`
  width: 100%;
  height: 45px;
  padding: 10px;
  border: none;
  font-weight: 500;
  border-radius: ${(props) => props.theme.borderRadius.default};
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};

  :hover {
    cursor: pointer;
  }
`;
