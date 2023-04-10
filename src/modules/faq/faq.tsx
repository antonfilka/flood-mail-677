import React from "react";
import styled from "styled-components";
import { FaqItem, SectionCard } from "../../components";
import { device } from "../../constants/devices";
import { Text } from "../../common";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const FAQS = [
  {
    id: 1,
    question: "How does it work 1",
    answer: "It works lalalalala 1",
  },
  {
    id: 2,
    question: "How does it work 2",
    answer: "It works lalalalala 2",
  },
  {
    id: 3,
    question: "How does it work 3",
    answer: "It works lalalalala3",
  },
  {
    id: 4,
    question: "How does it work 4",
    answer: "It works lalalalala 4",
  },
];

export function FaqSection() {
  return (
    <StyledSectionCard>
      {/* <StyledHeaderText>FAQ</StyledHeaderText> */}
      <StyledSwiperWrapper>
        <StyledSwiper
          slidesPerView={1}
          spaceBetween={30}
          navigation={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {FAQS.map((item) => (
            <SwiperSlide key={item.id}>
              <FaqItem {...item} />
            </SwiperSlide>
          ))}
        </StyledSwiper>
      </StyledSwiperWrapper>
    </StyledSectionCard>
  );
}

const StyledSectionCard = styled(SectionCard)`
  max-width: 1200px;
  flex-grow: 7;

  @media ${device.tablet} {
    width: 100%;
    flex-grow: 1;
  }
`;

const StyledHeaderText = styled(Text.h2)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 10px;
`;

const StyledSwiperWrapper = styled.section`
  width: 100%;
  height: 100%;

  overflow-y: auto;
`;

const StyledSwiper = styled(Swiper)`
  .swiper-button-next {
    color: ${(props) => props.theme.colors.bg};
  }
  .swiper-button-prev {
    color: ${(props) => props.theme.colors.bg};
  }
  .swiper-pagination-bullet-active {
    color: ${(props) => props.theme.colors.primary};
  }
`;
