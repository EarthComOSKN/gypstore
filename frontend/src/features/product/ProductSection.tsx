import styled from "@emotion/styled";

const Container = styled.div`
  height: 35rem;
  width: 100%;
  padding: 3rem;
  margin-bottom: 4rem;
`;

const ProductContainer = styled.div`
  display: grid;
  background-color: black;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1px;
  grid-template-areas:
    "bg bg . ."
    "bg bg . .";
  height: 100%;
`;

const ProductCardWide = styled.div`
  padding: 2rem;
  background-color: white;
  background-image: url("/assets/logo-without-text.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  grid-area: bg;
`;

const ProductCardWideSM = styled.div`
  padding: 2rem;

  background-color: white;
  background-image: url("/assets/logo-without-text.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
`;

type Props = {
  title: String;
};

export const ProductSection = (props: Props) => {
  const { title = "ฝ้าเพดานหินอ่อน" } = props;
  return (
    <Container>
      <h2>{title}</h2>
      <ProductContainer>
        <ProductCardWide />
        <ProductCardWideSM />
        <ProductCardWideSM />
        <ProductCardWideSM />
        <ProductCardWideSM />
      </ProductContainer>
    </Container>
  );
};
