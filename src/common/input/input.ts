import styled from "styled-components";

interface InputInterface {
  $border?: boolean;
}

export const Input = styled.input<InputInterface>`
  height: 45px;
  width: 100%;
  padding: 10px;
  border: ${(props) =>
    props.$border ? `1px solid ${props.theme.colors.bg}` : "none"};
  color: ${(props) => props.theme.colors.darkGray};
  background-color: ${(props) => props.theme.colors.lightGray};
  border-radius: ${(props) => props.theme.borderRadius.default};
`;
