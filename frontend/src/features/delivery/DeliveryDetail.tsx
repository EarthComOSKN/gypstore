import styled from '@emotion/styled'
import React, { useState, useEffect } from 'react'
import { Menu, Divider } from 'antd'
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
    margin-left: 2rem;
    margin-right: 2rem;
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

const statusToImg = s => {
  if (s === 'RECEIVE_ORDER') return '/assets/delivery1.jpg'
  if (s === 'S2') return '/assets/delivery2.jpg'
  if (s === 'S3') return '/assets/delivery3.jpg'
  if (s === 'S4') return '/assets/delivery4.jpg'
}

export function DeliveryDetail(props: Props) {
  const { orders } = props
  const [selectedOrder, setSelectedOrder] = useState<Order>(null)
  console.log('orders :>> ', orders)
  useEffect(() => {
    if (!orders || orders.length === 0) return
    setSelectedOrder(orders[0])
  }, [orders])
  console.log('selectedOrder :>> ', selectedOrder)
  const [img, setImg] = useState('/assets/delivery1.jpg')
  return (
    <Container>
      <Title>สถานะการจัดส่ง</Title>
      <Row>
        <Menu style={{ width: 300 }}>
          {orders.map((order, idx) => (
            <Menu.Item
              key={idx}
              onClick={() => {
                setSelectedOrder(order)
                setImg('/assets/delivery1.jpg')
              }}
            >
              <span>
                ออเดอร์วันที่{' '}
                {moment(order.createdAt).format('DD/MM/YYYY HH:mm')}
              </span>
            </Menu.Item>
          ))}
        </Menu>
        {selectedOrder && (
          <>
            <img
              src={statusToImg(selectedOrder.shippingStatus)}
              alt="สถานะการจัดส่ง"
            />
            <Detail>
              <p>สถานะการจัดส่ง : ได้รับออเดอร์เรียบร้อยแล้ว</p>
              <p>
                สั่งเมื่อวันที่ :{' '}
                {moment(selectedOrder.createdAt).format('DD/MM/YYYY HH:mm')}
              </p>
              <p>จัดส่งวันที่ : -</p>
              <p>ชำระเงินโดย : บัตรเครดิต</p>
              <h4>รายการสินค้า</h4>
              {selectedOrder.orderItem.map(p => (
                <p>
                  - {p.product.name}{' '}
                  <span style={{ color: 'orange' }}>
                    ราคา {p.product.salePrice}
                  </span>{' '}
                  x{' '}
                  <span style={{ color: 'green' }}>
                    {p.amount} {p.product.unitType}
                  </span>
                </p>
              ))}
            </Detail>
          </>
        )}
      </Row>
    </Container>
  )
}
