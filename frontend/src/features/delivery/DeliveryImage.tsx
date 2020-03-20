import styled from '@emotion/styled'

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
  img {
    width: 40%;
    height: 40%;
    margin: 3rem 10rem;
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

export const DeliveryImage = () => {
  return (
    <Container>
      <Title>สถานะการจัดส่ง</Title>
      <Row>
        <img src="/assets/delivery1.jpg" alt="สถานะการจัดส่ง" />
        <Detail>
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
        </Detail>
      </Row>
    </Container>
  )
  
}