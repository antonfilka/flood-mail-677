import styled from "styled-components";
import { device } from "../../constants/devices";

export const AccountWrapper = styled.section`
  width: 100%;
  max-height: calc(100vh - 70px);
  padding: 50px 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;

  @media ${device.desktop} {
    overflow-y: auto;
    padding: 20px 40px;
  }

  @media ${device.laptop} {
    overflow-y: auto;
    padding: 20px 25px;
  }

  @media ${device.tablet} {
    overflow-y: auto;
    padding: 10px 20px;
  }

  @media ${device.mobileS} {
    overflow-y: auto;
    padding: 5px 5px;
  }
`;
