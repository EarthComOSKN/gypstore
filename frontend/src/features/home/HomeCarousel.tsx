import { Carousel } from "antd";
import styled from "@emotion/styled";

const onChange = (current: number): void => {
  console.log(current);
};

const Container = styled.div`
  .ant-carousel .slick-slide {
    text-align: center;
    height: 400px;
    line-height: 400px;
    background: white;
    overflow: hidden;
  }

  .ant-carousel .slick-slide h3 {
    color: white;
  }
`;

const Banner1 = styled.div`
  > img {
    height: auto;
    width: 100%;
  }
`;
const Banner2 = styled.div`
  background-image: url("/assets/banner3.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const HomeCarousel = () => (
  <Container>
    <Carousel afterChange={onChange}>
      <Banner1>
        <img src="/assets/dev-banner.png" />
      </Banner1>
      <Banner1>
        <img src="/assets/dev-banner.png" />
      </Banner1>
      <Banner1>
        <img src="/assets/dev-banner.png" />
      </Banner1>
    </Carousel>
  </Container>
);
