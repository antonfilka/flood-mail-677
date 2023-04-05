import { Header } from "../../modules/header/header";
import styled from "styled-components";
import { MainRouter } from "../../routers";
import { PurpleWaves } from "../../common/purpleWaves/purpleWaves";
import { device } from "../../constants/devices";

const StyledContainer = styled.section`
  position: relative;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.bg};
`;

const StyledBackgroundWaves = styled.section`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 1;

  @media ${device.desktop} {
  }

  @media ${device.laptop} {
    visibility: hidden;
  }
`;

const StyledMainSection = styled.section`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 2;
`;

export function MainLayout() {
  return (
    <StyledContainer>
      <StyledMainSection>
        <MainRouter />
      </StyledMainSection>
      <StyledBackgroundWaves>
        <PurpleWaves />
      </StyledBackgroundWaves>
    </StyledContainer>
  );
}
