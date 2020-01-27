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
    background: #364d79;
    overflow: hidden;
  }

  .ant-carousel .slick-slide h3 {
    color: #fff;
  }
`;

const Banner1 = styled.div`
  background-image: url("/assets/banner3.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
const Banner2 = styled.div`
  background-image: url("/assets/banner2.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
const Banner3 = styled.div`
  background-image: url("/assets/banner3.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const HomeCarousel = () => (
  <Container>
    <Carousel afterChange={onChange}>
      <Banner1>
        <h3>1</h3>
      </Banner1>
      <Banner2>
        <h3>1</h3>
      </Banner2>
      <Banner3>
        <h3>1</h3>
      </Banner3>
      <Banner1>
        <h3>1</h3>
      </Banner1>
    </Carousel>
  </Container>
);
