import styled from "@emotion/styled";
import { Icon } from "antd";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: black;
  padding: 1rem 7rem 0rem 7rem;
`;

const MainFooter = styled.div`
  bottom: 0;

  height: 18rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  & h2,
  h3,
  h4 {
    color: #ff8e0a;
  }
  h5 {
    font-size: 14px;
    color: white;
  }
  color: white !important;

  & > div {
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
  }

  a {
    color: white;
    :hover {
      color: rgb(100, 100, 100);
    }
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

const ContactUs = styled.div`
  p {
    margin-bottom: 0.5rem;
    padding-left: 1.75rem;
  }
`;

const Service = styled.div`
  a {
    color: white;
    padding-bottom: 0.75rem;

    :hover {
      color: rgb(100, 100, 100);
    }
  }
`;
const Payment = styled.div``;

const ContactLogoList = styled.div`
  width: 8rem;
  display: flex;
  justify-content: space-between;
  i {
    font-size: 1.75em;
  }
`;

const LineQR = styled.img`
  margin-top: 1rem;
  width: 8rem;
`;

const PaymentMethod = styled.img`
  width: 15rem;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <MainFooter>
        <ContactUs>
          <h3>ติดต่อเรา</h3>
          <ContactLogoList>
            <a href="/">
              <Icon type="phone" theme="filled" />
            </a>
            <a href="/">
              <Icon type="facebook" theme="filled" />
            </a>
            <a href="/">
              <Icon type="instagram" theme="filled" />
            </a>
          </ContactLogoList>
          <LineQR src="/assets/line-qr.png" alt="line-qr" />
          <p>@gypstore</p>

        </ContactUs>
        <Service>
          <h3>ศูนย์ช่วยเหลือ</h3>
          <a href="/">  
            ติดต่อเรา
          </a>
          <a href="/">  
            วิธีการสั่งซื้อสินค้า
          </a>
          <a href="/">  
            วิธีการชำระเงิน
          </a>
          <a href="/">  
            การจัดส่งสินค้า
          </a>
          <a href="/">  
            ตรวจสอบสถานะการจัดส่ง
          </a>
        </Service>
        <Payment>
          <h3>การชำระเงิน</h3>
          <PaymentMethod src="/assets/payment-option.png" alt="payment" />
          <br />
          <h3>ช่วงเวลาเปิดทำการ</h3>
          <h5>
            จันทร์ - ศุกร์ 8.00-17.00 น.
            <br />
            เสาร์ 08.00-12.00 น.
          </h5>
        </Payment>
      </MainFooter>
      <SubFooter>
        <p>Copyright @ 2020  Gypstore Co., Ltd.  All Right Reserved.</p>
        <p>บริษัท ยิปสโตร์ จำกัด เลขที่ 14/12 ตำบลบึงคำพร้อย อำเภอลำลูกกา ปทุมธานี 12150</p>
      </SubFooter>
    </FooterContainer>
  );
};
