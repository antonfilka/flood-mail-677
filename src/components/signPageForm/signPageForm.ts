import styled from "styled-components";
import { device } from "../../constants/devices";

export const SignPageForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 30px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.borderRadius.default};

  @media ${device.desktop} {
    width: 45%;
  }

  @media ${device.laptop} {
    width: 70%;
  }

  @media ${device.tablet} {
    width: 80%;
    padding: 20px;
  }

  @media ${device.mobileS} {
    width: 95%;
    padding: 10px;
  }
`;
