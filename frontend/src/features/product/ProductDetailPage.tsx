import styled from '@emotion/styled'
import { Footer } from '../../component/Footer'
import { Navbar } from '../navigation/Navbar'
import { NavBreadcrumb } from '../navigation/NavBreadcrumb'
import { ProductDetail } from './ProductDetail'
import { ProductRelated } from './ProductRelated'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/react-hooks'
import { GET_PRODUCT_DETAIL } from './gql'
import { FullPageLoading } from '../../component/Loading'

const Container = styled.div`
  padding: 3rem 0rem;
  width: 100%;
  margin: auto;
  background-color: #ececec;
`

export const ProductDetailPage = () => {
  const router = useRouter()
  const productId = router?.query?.pid
  console.log(productId)
  const { data, loading } = useQuery(GET_PRODUCT_DETAIL, {
    variables: {
      id: productId,
    },
    skip: !productId,
  })
  if (!router) return null
  if (loading) return <FullPageLoading />
  if (!data) return null
  const product = data?.productItem as ProductItem

  const nav = [
    {
      link: '/',
      icon: 'home',
      text: 'Home',
    },
    {
      link: `/category/${product?.category?.name || 'แผ่นยิปซั่ม'}`,

      text: product?.category?.name || 'แผ่นยิปซั่ม',
    },
    {
      link: `/product/${product?.id || ''}`,
      text: product?.name || '',
    },
  ]
  return (
    <>
      <Navbar />
      <Container>
        <NavBreadcrumb nav={nav} />

        {product ? (
          <ProductDetail product={product} />
        ) : (
          <h1>ไม่มีสินค้านี้</h1>
        )}
        <ProductRelated />
      </Container>
      <Footer />
    </>
  )
}
