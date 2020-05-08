import styled from '@emotion/styled'
import { ProductCardTall } from '../product/ProductCardTall'

const Container = styled.div`
  width: 100%;
  padding: 3rem 8rem;
`

const StyledProductCardTall = styled(ProductCardTall)`
  width: 250px;
  margin-top: 1rem;
`

const ProductList = styled.div`
  display: grid;
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  padding: 0 3rem;
  flex-wrap: wrap;
`
export const HeroProduct = () => {
  return (
    <Container>
      <h2>สินค้าขายดีที่สุด</h2>
      <ProductList>
        <StyledProductCardTall image="https://storage.cloud.google.com/gypstore-storage/productImages/242.jpg" />
        <StyledProductCardTall image="https://storage.cloud.google.com/gypstore-storage/productImages/220.jpg" />
        <StyledProductCardTall image="https://storage.cloud.google.com/gypstore-storage/productImages/145.jpg" />
        <StyledProductCardTall image="https://storage.cloud.google.com/gypstore-storage/productImages/246.jpg" />
      </ProductList>
    </Container>
  )
}
