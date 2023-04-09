import styled from "styled-components";

export const SectionCard = styled.section`
  display: flex;
  flex-direction: column;
  padding: 15px;
  border-radius: ${(props) => props.theme.borderRadius.default};
  background-color: ${(props) => props.theme.colors.white};
`;
