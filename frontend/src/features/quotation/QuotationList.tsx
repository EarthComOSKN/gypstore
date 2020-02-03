import styled from '@emotion/styled'
import { ProductCardTall } from '../product/ProductCardTall'
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
const Quotation = styled.div`
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
const QuotationName = styled(Price)``
const StyledButton = styled(Button)`
  background-color: #ff8e0a;
  font-size: 1rem;
  padding: 0rem 2rem;
`

export const QuotationList = () => {
  return (
    <Container>
      <h2>ใบเสนอราคา (2 รายการ)</h2>
      <CartTable>
        <CartRow>
          <h4>ใบเสนอราคา</h4>
          <h4>สินค้า</h4>
          <h4>วันที่ออกใบเสนอราคา</h4>
          <h4>ราคารวม</h4>
        </CartRow>
        {[1, 2, 3].map(e => (
          <CartRow>
            <Quotation>
              <ProductCardTall buyable={false} onlyImage />
              <QuotationName>ใบเสนอราคาเลขที่ {e}</QuotationName>
            </Quotation>
            <Price>3 รายการ</Price>
            <Amount>12/02/2562</Amount>
            <Price>13,000 บาท</Price>
          </CartRow>
        ))}
        <div>
          <CartSumRow>
            <StyledButton>ติดต่อเจ้าหน้าที่</StyledButton>
          </CartSumRow>
        </div>
      </CartTable>
    </Container>
  )
}
