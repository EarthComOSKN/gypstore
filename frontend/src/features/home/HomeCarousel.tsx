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

export const HomeCarousel = () => (
  <Container>
    <Carousel afterChange={onChange}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
    </Carousel>
  </Container>
);
