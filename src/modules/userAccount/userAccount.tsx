import React from "react";
import styled from "styled-components";
import { AccountWrapper } from "../../components";
import { device } from "../../constants/devices";
import { ContactsSection } from "../contacts";
import { FaqSection } from "../faq";
import { OrdersSection } from "../orders";
import { ProfileSection } from "../profile";
import { TasksSection } from "../tasks";

export function UserAccount() {
  return (
    <AccountWrapper>
      <StyledTopRow>
        <ProfileSection />
        <OrdersSection />
        <TasksSection />
      </StyledTopRow>
      <StyledBottomRow>
        <ContactsSection />
        <FaqSection />
      </StyledBottomRow>
    </AccountWrapper>
  );
}

const StyledTopRow = styled.section`
  width: 100%;
  height: 70%;
  display: flex;
  gap: 20px;

  @media ${device.laptop} {
    flex-wrap: wrap;
  }

  @media ${device.tablet} {
    flex-wrap: wrap;
  }

  @media ${device.mobileS} {
    flex-wrap: wrap;
  }
`;

const StyledBottomRow = styled.section`
  width: 100%;
  height: 30%;
  display: flex;
  gap: 20px;
`;
