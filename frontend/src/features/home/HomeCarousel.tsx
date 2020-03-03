import { Carousel } from "antd";
import styled from "@emotion/styled";

const onChange = (current: number): void => {
  console.log(current);
};

const Container = styled.div`
  .ant-carousel .slick-slide {
    text-align: center;
    overflow: hidden;
  }

  .ant-carousel .slick-slide h3 {
    color: #fff;
  }
`;

const Banner1 = styled.div`
  img {
    height: 100%;
    width: 100%;
  }
`;
const Banner2 = styled.div`
  background-image: url("/assets/banner2.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const HomeCarousel = () => (
  <Container>
    <Carousel afterChange={onChange}>
      <Banner1>
        <img src="/assets/banner3.jpg" />
      </Banner1>
      <Banner1>
        <img src="/assets/banner2.png" />
      </Banner1>
      <Banner1>
        <img src="/assets/banner3.jpg" />
      </Banner1>
      <Banner1>
        <img src="/assets/banner2.png" />
      </Banner1>
    </Carousel>
  </Container>
);
