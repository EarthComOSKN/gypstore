import styled from '@emotion/styled'
import { ProductCardTall } from '../product/ProductCardTall'
import { AmountInput } from '../../component/AmountInput'
import { Button } from 'antd'

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
  return (
    <Container>
      <h2>รถเข็นสินค้า (2)</h2>
      <CartTable>
        <CartRow>
          <h4>สินค้า</h4>
          <h4>ราคา</h4>
          <h4>ปริมาณ</h4>
          <h4>ราคารวม</h4>
        </CartRow>
        {[1, 2, 3].map(e => (
          <CartRow>
            <Product>
              <ProductCardTall buyable={false} onlyImage />
              <ProductName>
                แผ่นยิบซัมบอร์ด เอสซีจี SCG มาตรฐาน 9 มม. ขอบลาด ชนิดธรรมดา
              </ProductName>
            </Product>
            <Price>130 บาท / แผ่น</Price>
            <Amount>
              <AmountInput onChange={e => null} amount={100} />
            </Amount>
            <Price>13,000 บาท</Price>
          </CartRow>
        ))}
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
