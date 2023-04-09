import { Header } from "../../modules/header/header";
import styled from "styled-components";
import { MainRouter } from "../../routers";
import { PurpleWaves } from "../../common/purpleWaves/purpleWaves";
import { device } from "../../constants/devices";
import { useStore } from "../../store";

export function MainLayout() {
  const isAuthorized = useStore((state) => state.isAuthorized);

  return (
    <StyledContainer>
      <StyledContentSection>
        {isAuthorized && <Header />}
        <MainRouter />
      </StyledContentSection>
      <StyledBackgroundWaves>
        <PurpleWaves />
      </StyledBackgroundWaves>
    </StyledContainer>
  );
}

const StyledContainer = styled.section`
  position: relative;
  min-width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.bg};
`;

const StyledContentSection = styled.section`
  max-height: 100%;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
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
