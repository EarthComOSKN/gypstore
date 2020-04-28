import Link from 'next/link'
import { useResponsive } from '../../hooks/useResponsive'
import styled from '@emotion/styled'
import { DatePicker, message, Button, Icon, Menu, Dropdown } from 'antd'
import Search from 'antd/lib/input/Search'
import { useQuery } from '@apollo/react-hooks'
import { GET_ME } from './gql'
import { useRouter } from 'next/router'
import { NAV_CAT } from './const'

const Header = styled.div`
  height: 120px;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1;
  a {
    color: black;
  }
  a:hover {
    color: #fff;
  }
`

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
`

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
`

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
`

const NavigateList = styled.div`
  width: 25rem;
  margin-right: 3.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div {
    cursor: pointer;
    :hover {
      color: rgb(100, 100, 100);
    }
  }
  a:hover {
    color: rgb(100, 100, 100);
  }
`

const ButtonList = styled.div`
  font-size: 1.5rem;
  width: 2.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  > i {
    cursor: pointer;
    :hover {
      color: rgb(100, 100, 100);
    }
  }
  a:hover {
    color: rgb(100, 100, 100);
  }
`

const Username = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Logout = styled.span`
  cursor: pointer;
  :hover {
    color: white;
  }
`

export const Navbar = () => {
  const { isDesktop } = useResponsive()
  const { data, loading } = useQuery(GET_ME, { fetchPolicy: 'network-only' })
  const router = useRouter()
  const user = data?.me as User

  const logout = () => {
    localStorage.removeItem('userToken')
    router.push('/signin')
  }

  const { SubMenu } = Menu
  const menu = (
    <Menu>
      {NAV_CAT.map(c => (
        <Menu.Item key={c}>
          <a href={`/category/${c}`}>{c}</a>
        </Menu.Item>
      ))}
    </Menu>
  )

  return (
    <Header>
      <SubHeader>
        {loading ? (
          'Loading'
        ) : user ? (
          <Username>
            สวัสดี {user.name} | &nbsp;{' '}
            <Logout onClick={() => logout()}>Logout</Logout>
          </Username>
        ) : (
          <>
            <Link href="/register">
              <a>ลงทะเบียน</a>
            </Link>
            <img alt="separate-icon" src="/assets/separate-icon.png" />
            <Link href="/signin">
              <a>เข้าสู่ระบบ</a>
            </Link>
          </>
        )}
      </SubHeader>
      <MainHeader>
        <a href="/">
          {' '}
          {isDesktop ? (
            <img className="logo" alt="gypstore-logo" src="/assets/logo.png" />
          ) : (
            <img
              className="logo"
              alt="gypstore-logo"
              src="/assets/logo-without-text.png"
            />
          )}
        </a>
        <SearchContainer>
          <Search
            style={{ width: 300 }}
            placeholder="search"
            onSearch={value => console.log(value)}
            enterButton
          />
        </SearchContainer>
        <NavigateList>
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" href="/categories">
              สินค้า <Icon type="down" />
            </a>
          </Dropdown>
          <a href="/promotion">โปรโมชั่น</a>
          <a href="/delivery">รายการคำสั่งซื้อ</a>
          <a href="/quotation-list">
            <Icon type="file-text" /> ใบเสนอราคา
          </a>
        </NavigateList>

        <ButtonList>
          <a href="/shopping-cart">
            <Icon type="shopping-cart" />
          </a>
        </ButtonList>
      </MainHeader>
    </Header>
  )
}
