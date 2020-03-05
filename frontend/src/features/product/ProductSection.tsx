import styled from "@emotion/styled";

const Container = styled.div`
  height: 35rem;
  width: 100%;
  padding: 3rem 8rem;
  background-color: rgb(241, 241, 241);
`;

const ProductContainer = styled.div`
  display: grid;
  margin-bottom: 4rem;
  background-color: black;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1px;
  grid-template-areas:
    "bg bg . ."
    "bg bg . .";
  height: 85%;
  width: 100%;
`;

const ProductCardWide = styled.div<{ bigcard?: Boolean }>`
  padding: 2rem;
  background-color: white;
  background-image: url("/assets/logo-without-text.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  ${props => props.bigcard && "grid-area: bg;"}
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
        <ProductCardWide bigcard />
        <ProductCardWide />
        <ProductCardWide />
        <ProductCardWide />
        <ProductCardWide />
      </ProductContainer>
    </Container>
  );
};
