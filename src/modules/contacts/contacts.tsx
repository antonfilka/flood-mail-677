import React from "react";
import styled from "styled-components";
import { SectionCard } from "../../components";
import { device } from "../../constants/devices";
import { Text } from "../../common";

export function ContactsSection() {
  return (
    <StyledSectionCard>
      <StyledHeaderText>Contacts</StyledHeaderText>
      <StyledContactRow>
        <Text.h3 weight={600}>Email: &nbsp;</Text.h3>
        <StyledLink href={`mailto:contact.email@gmail.com`}>
          <Text.h3>contact.email@gmail.com</Text.h3>
        </StyledLink>
      </StyledContactRow>
      <StyledContactRow>
        <Text.h3 weight={600}>Telegram: &nbsp;</Text.h3>
        <StyledLink href={`https://telegram.org/`} target="_blank">
          <Text.h3>flood-mail</Text.h3>
        </StyledLink>
      </StyledContactRow>
    </StyledSectionCard>
  );
}

const StyledSectionCard = styled(SectionCard)`
  min-width: 480px;
  flex-grow: 5;

  @media ${device.tablet} {
    width: 100%;
    flex-grow: 1;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
`;

const StyledHeaderText = styled(Text.h2)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 10px;
`;

const StyledContactRow = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 10px;
`;
