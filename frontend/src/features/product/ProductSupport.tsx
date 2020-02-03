import styled from '@emotion/styled'
import { Divider } from 'antd'
const Container = styled.div`
  border-left: 1px solid black;
  height: 100%;
  padding-left: 2rem;
`

export const ProductSupport = () => {
  return (
    <Container>
      <div>
        <h3>สินค้าสั่งผลิต</h3>
        <p>
          สินค้าสั่งผลิต 7 วัน ไม่รวมเวลาเตรียมสินค้าและจัดส่ง
          มัดจำค่าสินค้าสั่งผลิตขั้นต่ำ 50% ของราคาสินค้า
        </p>
      </div>
      <Divider />
      <div>
        <h3>ข้อกำหนดและเงื่อนไข</h3>
        <p>
          <ul>
            <li>ลูกค้าสามารถเลือกรับสินค้าเองได้ที่หน้าโรงงาน</li>
            <li>สามารถออกใบกำกับภาษีได้</li>
          </ul>
        </p>
      </div>
      <Divider />
      <div>
        <h3>การชำระเงิน</h3>
        <p>บัตรเครดิต (Visa / Master) ATM / Internet Banking</p>
      </div>
    </Container>
  )
}
