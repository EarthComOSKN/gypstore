import styled from '@emotion/styled'
import { ProductCardTall } from './ProductCardTall'

const Container = styled.div`
  width: 90%;
  margin: 3rem auto;
  background-color: white;

  padding: 2rem 2rem;
`

const ProductContainer = styled.div`
  display: flex;
  > div + div {
    margin-left: 1rem;
  }
`
const StyledProductCardTall = styled(ProductCardTall)`
  width: 250px;
  margin-top: 1rem;
`

export const ProductRelated = () => {
  return (
    <Container>
      <h2>สินค้าที่เกี่ยวข้อง</h2>
      <ProductContainer>
        <StyledProductCardTall />
        <StyledProductCardTall />
        <StyledProductCardTall />
      </ProductContainer>
    </Container>
  )
}
