import React from "react";
import styled from "styled-components";
import { SectionCard } from "../../components";
import { HeaderText, Text } from "../../common";
import { device } from "../../constants/devices";

export function ContactsSection() {
  return (
    <StyledSectionCard>
      <HeaderText>Contacts</HeaderText>
      <StyledContactsList>
        <StyledContactRow>
          <Text.h4 weight={600}>Email: &nbsp;</Text.h4>
          <StyledLink href={`mailto:contact.email@gmail.com`}>
            <Text.h4>contact.email@gmail.com</Text.h4>
          </StyledLink>
        </StyledContactRow>
        <StyledContactRow>
          <Text.h4 weight={600}>Telegram: &nbsp;</Text.h4>
          <StyledLink href={`https://telegram.org/`} target="_blank">
            <Text.h4>flood-mail</Text.h4>
          </StyledLink>
        </StyledContactRow>
      </StyledContactsList>
    </StyledSectionCard>
  );
}

const StyledSectionCard = styled(SectionCard)`
  max-height: 140px;
  min-height: 140px;

  @media ${device.laptop} {
    min-height: 20vh;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
`;

const StyledContactsList = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 5px;

  @media ${device.laptop} {
    overflow-y: auto;
  }
`;

const StyledContactRow = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
