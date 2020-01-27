import Link from "next/link";
import { useResponsive } from "../hooks/useResponsive";
import styled from "@emotion/styled";
import { DatePicker, message, Button, Icon } from "antd";
import Search from "antd/lib/input/Search";

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
    color: black;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: black;
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
  /* justify-content: space-between; */
  background-color: white;
  height: 80px;
  padding: 0px 30px;
  color: black;
  box-shadow: 0 4px 8px -2px gray;

  img {
    max-height: 50px;
    align-items: center;
  }
`;

const SearchContainer = styled.div`
  flex: 1;
  margin: 0 4rem;
  & .ant-input-wrapper > input {
    border-top-left-radius: 8em;
    border-bottom-left-radius: 8em;
  }
  & .ant-input-group-addon > button {
    border-top-right-radius: 8em;
    border-bottom-right-radius: 8em;
    background-color: rgb(241, 146, 56);
    border-color: rgb(241, 146, 56);
    :hover {
      background-color: rgba(241, 146, 56, 0.8);
      border-color: rgba(241, 146, 56, 0.8);
    }
  }
`;

const NavigateList = styled.div`
  width: 15rem;
  margin-right: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div {
    cursor: pointer;
    :hover {
      color: rgb(100, 100, 100);
    }
  }
`;

const ButtonList = styled.div`
  font-size: 1.5rem;
  width: 5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  > i {
    cursor: pointer;
    :hover {
      color: rgb(100, 100, 100);
    }
  }
`;

export const Navbar = () => {
  const { isDesktop } = useResponsive();

  return (
    <Header>
      <SubHeader>
        <Link href="/register">
          <a>ลงทะเบียน</a>
        </Link>
        <img alt="separate-icon" src="/assets/separate-icon.png" />
        <Link href="/login">
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
        <SearchContainer>
          <Search
            placeholder="search"
            onSearch={value => console.log(value)}
            enterButton
          />
        </SearchContainer>
        <NavigateList>
          <div>สินค้า </div>
          <div>บริการ</div>
          <div>คะแนนสะสม</div>
        </NavigateList>

        <ButtonList>
          <Icon type="file-text" />
          <Icon type="shopping-cart" />
        </ButtonList>
      </MainHeader>
    </Header>
  );
};
