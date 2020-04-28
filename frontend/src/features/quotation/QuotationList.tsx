import styled from '@emotion/styled'
import { ProductCardTall } from '../product/ProductCardTall'
import { Button, Icon } from 'antd'
import { useQuery } from '@apollo/react-hooks'
import { GET_QUOTATIONS } from './gql'
import { FullPageLoading } from '../../component/Loading'
import { GET_ME } from '../navigation/gql'
import { useRouter } from 'next/router'

const Container = styled.div`
  background-color: white;
  width: 90%;
  margin: 2rem auto;
  padding: 2rem;
`
const DeleteIcon = styled(Icon)`
  cursor: pointer;
  & svg {
    fill: red;
  }
  margin-left: 1rem;
  font-size: 1.25rem;
`
const CartTable = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  background-color: rgb(236, 236, 236);
  grid-gap: 1px;
`

const CartRow = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 1.5rem;
  background-color: white;
`
const CartSumRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0rem 0rem 0rem;
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
  justify-content: flex-start;
  align-items: center;
`
const Amount = styled(Price)``
const QuotationName = styled(Price)``
const StyledButton = styled(Button)`
  background-color: #ff8e0a;
  font-size: 1rem;
  padding: 0rem 2rem;

  &:hover {
    background-color: white;
    color: black;
    border-color: black;
  }
`

const getStatusColor = status => {
  if (status === 'PENDING') return 'orange'
  if (status === 'COMPLETED') return 'green'
  if (status === 'CANCELED') return 'red'
}
const statusEngToThai = status => {
  if (status === 'PENDING') return 'กำลังดำเนินการ'
  if (status === 'COMPLETED') return 'สำเร็จ'
  if (status === 'CANCELED') return 'ยกเลิก'
}
export const QuotationList = () => {
  const { data: meData, loading: meLoading } = useQuery(GET_ME)
  console.log(meData)
  const router = useRouter()
  const { data, loading, error } = useQuery(GET_QUOTATIONS, {
    variables: {
      uid: meData?.me.id,
    },
    skip: !meData,
  })
  if (meLoading || loading) return <FullPageLoading />
  const quotationRes = data as Query
  const quotations = quotationRes.quotations || []
  return (
    <Container>
      <h2>ใบเสนอราคา ({quotations.length} รายการ)</h2>
      <CartTable>
        <CartRow>
          <h4>ใบเสนอราคา</h4>
          <h4>สินค้า</h4>
          <h4>วันที่ออกใบเสนอราคา</h4>
          <h4>ราคารวม</h4>
          <h4>สถานะ</h4>
          <h4>ดำเนินการ</h4>
        </CartRow>
        {quotations.map((q, idx) => (
          <CartRow>
            <Quotation>
              <ProductCardTall buyable={false} onlyImage />
              <QuotationName>
                ใบเสนอราคาเลขที่ {idx + 1}{' '}
                <DeleteIcon onClick={() => {}} type="delete" />
              </QuotationName>
            </Quotation>
            <Price>{q.quotationItems.length} รายการ</Price>
            <Amount>-</Amount>
            <Price>
              {q.quotationItems
                .reduce((pre, cur) => pre + cur.realPrice, 0)
                .toLocaleString()}{' '}
              บาท
            </Price>
            <Price>
              <span style={{ color: getStatusColor(q.status) }}>
                {statusEngToThai(q.status)}
              </span>{' '}
            </Price>
            <Price>
              <StyledButton
                disabled={q.status !== 'COMPLETED'}
                onClick={() => {
                  const state = {
                    productItems: q.quotationItems,
                  }
                  router.push('/checkout?state=' + JSON.stringify(state))
                }}
              >
                ชำระเงิน
              </StyledButton>
            </Price>
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
