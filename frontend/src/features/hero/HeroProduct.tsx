import styled from "@emotion/styled";
import { ProductCardTall } from "../product/ProductCardTall";

const Container = styled.div`
  height: 30rem;
  width: 100%;
  padding: 3rem;
  margin-bottom: 5rem;
`;

const ProductList = styled.div`
  height: 100%;
  display: grid;
  margin-top: 2rem;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 1rem;
  padding: 0 3rem;
`;
export const HeroProduct = () => {
  return (
    <Container>
      <h2>สินค้าขายดี</h2>
      <ProductList>
        <ProductCardTall />
        <ProductCardTall />
        <ProductCardTall />
        <ProductCardTall />
        <ProductCardTall />
        <ProductCardTall />
      </ProductList>
    </Container>
  );
};
