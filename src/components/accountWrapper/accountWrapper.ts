import styled from "styled-components";
import { device } from "../../constants/devices";

export const AccountWrapper = styled.section`
  max-width: 100vw;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  padding: 50px 100px;
  overflow-x: hidden;
  overflow-y: auto;

  @media ${device.desktop} {
    padding: 20px 40px;
  }

  @media ${device.laptop} {
    overflow-y: auto;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    padding: 20px 25px;
  }

  @media ${device.tablet} {
    padding: 10px 20px;
  }

  @media ${device.mobileS} {
    padding: 5px 5px;
  }
`;
