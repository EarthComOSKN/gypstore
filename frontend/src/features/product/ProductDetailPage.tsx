import styled from '@emotion/styled'
import { Footer } from '../../component/Footer'
import { Navbar } from '../navigation/Navbar'
import { NavBreadcrumb } from '../navigation/NavBreadcrumb'
import { ProductDetail } from './ProductDetail'
import { ProductRelated } from './ProductRelated'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/react-hooks'
import { GET_PRODUCT_DETAIL } from './gql'

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
  if (loading) return <div>Loading...</div>
  if (!data) return null
  const product = data?.productItem as ProductItem

  const nav = [
    {
      link: '/',
      icon: 'home',
      text: 'Home',
    },
    {
      link: `/category/${product.category.name}`,

      text: product.category.name,
    },
    {
      link: `/product/${product.id}`,
      text: product.name,
    },
  ]
  return (
    <>
      <Navbar />
      <Container>
        <NavBreadcrumb nav={nav} />
        <ProductDetail product={product} />
        <ProductRelated />
      </Container>
      <Footer />
    </>
  )
}
