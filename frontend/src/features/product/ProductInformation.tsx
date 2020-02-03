import { Button, Icon } from 'antd'
import styled from '@emotion/styled'
import { ProductAmountInput } from './ProductAmountInput'
import { useState } from 'react'

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
      <ProductAmountInput amount={amount} onChange={setAmount} />
      <AddCartButton>
        <Icon type="shopping-cart" />
        เพิ่มไปยังรถเข็น
      </AddCartButton>
    </Container>
  )
}
