import styled from "styled-components";

export const Input = styled.input`
  height: 45px;
  width: 100%;
  padding: 10px;
  border: none;
  color: ${(props) => props.theme.colors.darkGray};
  background-color: ${(props) => props.theme.colors.lightGray};
  border-radius: ${(props) => props.theme.borderRadius.default};
`;
