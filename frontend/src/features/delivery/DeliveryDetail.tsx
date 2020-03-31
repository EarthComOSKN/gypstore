import styled from '@emotion/styled'
import React, { useState } from 'react'
import { Menu } from 'antd';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
`;

const Title = styled.div`
  border-left-style: solid;
  border-color: #ff8e0a;
  margin: 3rem 7rem 0rem 7rem;
  padding: 0rem 1rem;
  font-size: 1.5rem;
`;

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

  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected  {
    color: black;
    background-color: #ffc887;
  }
`;

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
`;

const { SubMenu } = Menu;

export function DeliveryDetail() {
  const [img, setImg] = useState("/assets/delivery1.jpg");

  return (
    <Container>
      <Title>สถานะการจัดส่ง</Title>
      <Row>
        <Menu style={{ width: 200 }}>
          <Menu.Item onClick={() => setImg("/assets/delivery1.jpg")} >
            <span>ออเดอร์วันที่ 12/02/63</span>
          </Menu.Item>
          <Menu.Item onClick={() => setImg("/assets/delivery2.jpg")} >
            <span>ออเดอร์วันที่ 23/01/63</span>
          </Menu.Item>
          <Menu.Item onClick={() => setImg("/assets/delivery3.jpg")} >
            <span>ออเดอร์วันที่ 02/10/62</span>
          </Menu.Item>
          <Menu.Item onClick={() => setImg("/assets/delivery4.jpg")} >
            <span>ออเดอร์วันที่ 11/07/62</span>
          </Menu.Item>
          <Menu.Item onClick={() => setImg("/assets/delivery4.jpg")} >
            <span>ออเดอร์วันที่ 01/01/61</span>
          </Menu.Item>
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