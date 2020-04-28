import styled from '@emotion/styled'
import React, { useState } from 'react'
import { Menu } from 'antd'
import moment from 'moment'
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
`

const Title = styled.div`
  border-left-style: solid;
  border-color: #ff8e0a;
  margin: 3rem 7rem 0rem 7rem;
  padding: 0rem 1rem;
  font-size: 1.5rem;
`

const Row = styled.div`
  display: flex;
  margin: 3rem 10rem;
  img {
    width: 40%;
    height: 40%;
    margin-left: 15rem;
  }

  .ant-menu-item {
    :hover {
      color: #ff8e0a;
    }
  }

  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    color: black;
    background-color: #ffc887;
  }
`

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem 0rem;
  h4 {
    padding-bottom: 1rem;
    font-size: 1.036em;
    border-bottom-style: solid;
    border-color: #ff8e0a;
  }
`

const { SubMenu } = Menu

type Props = {
  orders: Order[]
}

export function DeliveryDetail(props: Props) {
  const { orders } = props

  const [img, setImg] = useState('/assets/delivery1.jpg')

  return (
    <Container>
      <Title>สถานะการจัดส่ง</Title>
      <Row>
        <Menu style={{ width: 300 }}>
          {orders.map((order, idx) => (
            <Menu.Item
              key={idx}
              onClick={() => setImg('/assets/delivery1.jpg')}
            >
              <span>
                ออเดอร์วันที่{' '}
                {moment(order.createdAt).format('DD/MM/YYYY HH:mm')}
              </span>
            </Menu.Item>
          ))}
        </Menu>
        <img src={img} alt="สถานะการจัดส่ง" />
        {/* <Detail>
          <p>สถานะการจัดส่ง : ได้รับออเดอร์เรียบร้อยแล้ว</p>
          <p>สั่งเมื่อวันที่ : ได้รับออเดอร์เรียบร้อยแล้ว</p>
          <p>จัดส่งวันที่ : ได้รับออเดอร์เรียบร้อยแล้ว</p>
          <h4>ชำระเงินโดย : โอนบัญชีธนาคาร</h4>
          <p>สถานะการจัดส่ง : ได้รับออเดอร์เรียบร้อยแล้ว</p>
          <p>สั่งเมื่อวันที่ : ได้รับออเดอร์เรียบร้อยแล้ว</p>
          <p>จัดส่งวันที่ : ได้รับออเดอร์เรียบร้อยแล้ว</p>
          <h4>ชำระเงินโดย : โอนบัญชีธนาคาร</h4>
          <p>สถานะการจัดส่ง : ได้รับออเดอร์เรียบร้อยแล้ว</p>
          <p>สั่งเมื่อวันที่ : ได้รับออเดอร์เรียบร้อยแล้ว</p>
          <p>จัดส่งวันที่ : ได้รับออเดอร์เรียบร้อยแล้ว</p>
          <h4>ชำระเงินโดย : โอนบัญชีธนาคาร</h4>
          <p>สถานะการจัดส่ง : ได้รับออเดอร์เรียบร้อยแล้ว</p>
          <p>สั่งเมื่อวันที่ : ได้รับออเดอร์เรียบร้อยแล้ว</p>
          <p>จัดส่งวันที่ : ได้รับออเดอร์เรียบร้อยแล้ว</p>
          <p>ชำระเงินโดย : โอนบัญชีธนาคาร</p>
        </Detail> */}
      </Row>
    </Container>
  )
}
