import styled from '@emotion/styled'
import { ProductCardTall } from '../product/ProductCardTall'
import { AmountInput } from '../../component/AmountInput'
import { Button } from 'antd'
import { useQuery } from '@apollo/react-hooks'
import { GET_SHOPPING_CART } from './gql'

const Container = styled.div`
  background-color: white;
  width: 90%;
  margin: 2rem auto;
  padding: 2rem;
`

const CartTable = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  background-color: rgb(236, 236, 236);
  grid-gap: 1px;
`

const CartRow = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  grid-gap: 1.5rem;
  background-color: white;
`
const CartSumRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: white;
`
const Product = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 3fr;
  padding: 1rem;
`
const Price = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Amount = styled(Price)``
const ProductName = styled(Price)``
const StyledButton = styled(Button)`
  background-color: #ff8e0a;
  font-size: 1rem;
  padding: 0rem 2rem;
`

export const ShoppingCart = () => {
  const { data, loading, error } = useQuery(GET_SHOPPING_CART, {
    fetchPolicy: 'network-only',
  })
  if (loading) return <div>Lodaing...</div>
  console.log(data, error)
  const me = data.me as User
  const shoppingCart = me.shoppingCart
  const shoppingCartItem = shoppingCart.productItems as any

  return (
    <Container>
      <h2>รถเข็นสินค้า ({shoppingCartItem.length})</h2>
      <CartTable>
        <CartRow>
          <h4>สินค้า</h4>
          <h4>ราคา</h4>
          <h4>ปริมาณ</h4>
          <h4>ราคารวม</h4>
        </CartRow>
        {shoppingCartItem.map(item => {
          const { pi, amount } = item
          return (
            <CartRow>
              <Product>
                <ProductCardTall buyable={false} onlyImage />
                <ProductName>{pi.name}</ProductName>
              </Product>
              <Price>
                {pi.salePrice} บาท / {pi.unitType}
              </Price>
              <Amount>
                <AmountInput onChange={e => null} amount={100} />
              </Amount>
              <Price>{+pi.salePrice * amount} บาท</Price>
            </CartRow>
          )
        })}
        <div>
          <CartSumRow>
            <h2>ราคารวม (2รายการ)</h2>
            <h2>39,000 บาท</h2>
          </CartSumRow>
          <CartSumRow>
            <StyledButton>พิมพ์ใบเสนอราคา</StyledButton>
            <StyledButton>ถัดไป</StyledButton>
          </CartSumRow>
        </div>
      </CartTable>
    </Container>
  )
}
