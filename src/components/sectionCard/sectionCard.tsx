import styled from "styled-components";

export const SectionCard = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: ${(props) => props.theme.borderRadius.default};
  background-color: ${(props) => props.theme.colors.white};
  overflow: hidden;
`;
