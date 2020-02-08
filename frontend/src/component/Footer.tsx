import styled from "@emotion/styled";
import { Icon } from "antd";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: black;
  padding: 1rem 7rem;
`;

const MainFooter = styled.div`
  bottom: 0;

  height: 30rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  & h2,
  h3,
  h4 {
    color: white;
  }
  color: white !important;

  & > div {
    padding-top: 2.5rem;
    display: flex;
    flex-direction: column;
  }
`;

const SubFooter = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: .05rem solid white;
  p {
    padding-top: .5rem;
    color: white;
    font-size: 10px;
  }
`;

const ContactUs = styled.div``;
const Service = styled.div``;
const Payment = styled.div``;

const ContactLogoList = styled.div`
  width: 10rem;
  display: flex;
  justify-content: space-between;
  i {
    font-size: 2em;
  }
`;

const LineQR = styled.img`
  margin-top: 2rem;
  width: 10rem;
`;

const PaymentMethod = styled.img`
  width: 15rem;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <MainFooter>
        <ContactUs>
          <h2>ติดต่อเรา</h2>
          <ContactLogoList>
            <Icon type="phone" theme="filled" />
            <Icon type="facebook" theme="filled" />
            <Icon type="instagram" theme="filled" />
          </ContactLogoList>
          <LineQR src="/assets/line-qr.png" alt="line-qr" />
          <p>@gypstore</p>

          <h3>
            จันทร์ - ศุกร์ 8.00-17.00 น.
            <br />
            เสาร์ 08.00-12.00 น.
          </h3>
        </ContactUs>
        <Service>
          <h2>บริการ</h2>
          <h4>ติดต่อเรา</h4>

          <h4>วิธีการสั่งซื้อสินค้า</h4>

          <h4>วิธีการชำระเงิน</h4>

          <h4>การจัดส่งสินค้า</h4>

          <h4>ตรวจสอบคะแนนสะสม</h4>
        </Service>
        <Payment>
          <h2>การชำระเงิน</h2>
          <PaymentMethod src="/assets/payment-option.png" alt="payment" />
        </Payment>
      </MainFooter>
      <SubFooter>
        <p>Copyright @ 2020  Gypstore Co., Ltd.  All Right Reserved.</p>
        <p>บริษัท ยิปสโตร์ จำกัด เลขที่ 14/12 ตำบลบึงคำพร้อย อำเภอลำลูกกา ปทุมธานี 12150</p>
      </SubFooter>
    </FooterContainer>
  );
};
