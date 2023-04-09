import styled from "styled-components";
import { device } from "../../constants/devices";

export const AccountWrapper = styled.section`
  width: 100%;
  padding: 50px 100px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;

  @media ${device.desktop} {
    padding: 30px 40px;
  }

  @media ${device.laptop} {
    padding: 20px 35px;
  }

  @media ${device.tablet} {
    padding: 10px 20px;
  }

  @media ${device.mobileS} {
    padding: 5px 5px;
  }
`;
