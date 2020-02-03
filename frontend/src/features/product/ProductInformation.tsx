import { Button, Icon } from 'antd'
import styled from '@emotion/styled'
import { useState } from 'react'
import { AmountInput } from '../../component/AmountInput'

const Container = styled.div`
  font-size: 16px;
  & > h4 {
    margin-bottom: 2rem;
  }
`

const AddCartButton = styled(Button)`
  background-color: #ff8e0a;
  width: 100%;
`

const StyledAmountInput = styled(AmountInput)`
  width: 15rem;
`

export const ProductInformation = () => {
  const [amount, setAmount] = useState(1)

  return (
    <Container>
      <h3>แผ่นยิบซัมบอร์ด เอสซีจี SCG มาตรฐาน 9 มม. ขอบลาด ชนิดธรรมดา</h3>
      <ul>
        <li>
          น้ำหนักเบากว่าแผ่นยิปซัมทั่วไป เพิ่มประสิทธิภาพในการทำงานได้เร็วขึ้น
        </li>
        <li>เหมาะสำหรับงานตกแต่งภายในที่ต้องการความเรียบเนียบ</li>
        <li>ผ่านการรับรองตามมาตรฐานอุตสหกรรม (มอก.)</li>
      </ul>
      <p>จัดส่งได้ภายใน 1-3 วันทำการ</p>
      <p>จำนวนที่ต้องการ (แผ่น)</p>
      <StyledAmountInput amount={amount} onChange={setAmount} />
      <AddCartButton>
        <Icon type="shopping-cart" />
        เพิ่มไปยังรถเข็น
      </AddCartButton>
    </Container>
  )
}
