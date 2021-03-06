import styled from '@emotion/styled'
import { ProductImage } from './ProductImage'
import { ProductInformation } from './ProductInformation'
import { ProductSupport } from './ProductSupport'

const Container = styled.div`
  width: 90%;
  margin: 3rem auto;
  background-color: white;

  padding: 2rem 2rem;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr 1.25fr 1fr;
`

type Props = {
  product: ProductItem
}

export const ProductDetail = (props: Props) => {
  const { product } = props
  return (
    <Container>
      <ProductImage />
      <ProductInformation product={product} />
      <ProductSupport />
    </Container>
  )
}
