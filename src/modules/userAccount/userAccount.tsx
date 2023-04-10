import React from "react";
import styled from "styled-components";
import { AccountWrapper } from "../../components";
import { device } from "../../constants/devices";
import useMediaQuery from "../../hooks/useMediaQuery";
import { ContactsSection } from "../contacts";
import { FaqSection } from "../faq";
import { OrdersSection } from "../orders";
import { ProfileSection } from "../profile";
import { TasksSection } from "../tasks";

export function UserAccount() {
  const isMobile = useMediaQuery(device.laptop);

  return (
    <>
      {isMobile ? (
        <AccountWrapper>
          <ProfileSection />
          <OrdersSection />
          <TasksSection />
          <FaqSection />
          <ContactsSection />
        </AccountWrapper>
      ) : (
        <AccountWrapper>
          <StyledProfileColumn>
            <ProfileSection />
            <ContactsSection />
          </StyledProfileColumn>
          <StyledOrdersColumn>
            <StyledOrdersRow>
              <OrdersSection />
              <TasksSection />
            </StyledOrdersRow>
            <FaqSection />
          </StyledOrdersColumn>
        </AccountWrapper>
      )}
    </>
  );
}

const StyledProfileColumn = styled.section`
  max-width: 30%;
  height: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledOrdersColumn = styled.section`
  max-width: 70%;
  height: 100%;
  flex-grow: 3;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledOrdersRow = styled.section`
  width: 100%;
  display: flex;
  gap: 20px;
  flex: 1 1 auto;
`;
