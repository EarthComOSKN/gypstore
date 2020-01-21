import Link from "next/link";
import { useResponsive } from "../hooks/useResponsive";
import styled from "@emotion/styled";
import { DatePicker, message } from "antd";

const Header = styled.div`
  height: 120px;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 9999;
`;

const SubHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: 40px;
  background-color: #ff8e0a;
  padding: 0px 30px;

  a {
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  a:hover {
    color: #fff;
  }
  img {
    height: 40px;
    width: auto;
    align-items: center;
    padding: 10px 10px;
    align-items: center;
    justify-content: flex-end;
  }
`;

const MainHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  height: 80px;
  padding: 0px 30px;
  box-shadow: 0 4px 8px -2px gray;

  img {
    max-height: 50px;
    align-items: center;
  }
`;

export const Navbar = () => {
  const { isDesktop } = useResponsive();

  return (
    <Header>
      <SubHeader>
        <Link href="/login">
          <a>ลงทะเบียน</a>
        </Link>
        <img alt="separate-icon" src="/assets/separate-icon.png" />
        <Link href="/register">
          <a>เข้าสู่ระบบ</a>
        </Link>
      </SubHeader>
      <MainHeader>
        {isDesktop ? (
          <img className="logo" alt="gypstore-logo" src="/assets/logo.png" />
        ) : (
          <img
            className="logo"
            alt="gypstore-logo"
            src="/assets/logo-without-text.png"
          />
        )}
      </MainHeader>
    </Header>
  );
};
