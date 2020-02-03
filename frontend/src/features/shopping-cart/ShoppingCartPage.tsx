import { Navbar } from '../navigation/Navbar'
import { NavBreadcrumb } from '../navigation/NavBreadcrumb'
import styled from '@emotion/styled'
import { Footer } from '../../component/Footer'
import { ShoppingCart } from './ShoppingCart'

const Container = styled.div`
  padding: 3rem 0rem;
  width: 100%;
  margin: auto;
  background-color: #ececec;
`

export const ShoppingCartPage = () => {
  const nav = [
    {
      link: '/',
      icon: 'home',
      text: 'Home',
    },
    {
      link: '/',

      text: 'ตะกร้าสินค้า',
    },
  ]

  return (
    <>
      <Navbar />
      <Container>
        <NavBreadcrumb nav={nav} />
        <ShoppingCart />
      </Container>
      <Footer />
    </>
  )
}
