import { useRouter } from 'next/router'
import qs from 'query-string'
import { Navbar } from '../navigation/Navbar'
import { Footer } from '../../component/Footer'
import styled from '@emotion/styled'
import { Checkout } from './Checkout'
import { useEffect } from 'react'
const Container = styled.div`
  padding: 3rem 0rem;
  width: 100%;
  margin: auto;
  background-color: #ececec;
`
export const CheckoutPage = () => {
  const router = useRouter()
  console.log(router)
  const { query } = router
  console.log(query)
  const { state } = query as any
  console.log(state)
  if (!state) return null
  const _state = JSON.parse(state)
  console.log(_state)

  return (
    <>
      <Navbar />
      <Container>
        <Checkout shoppingCartItems={_state.productItems} />
      </Container>
      <Footer />
    </>
  )
}
