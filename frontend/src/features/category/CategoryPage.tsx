import { useRouter, Router } from 'next/dist/client/router'
import { Footer } from '../../component/Footer'
import styled from '@emotion/styled'
import { CategoryFilter } from './CategoryFilter'
import { CategoryList } from './CategoryList'
import { Card } from 'antd'
import { Navbar } from '../navigation/Navbar'
import { ProductList } from '../product/ProductList'

const Container = styled.div`
  display: flex;
  padding: 2rem 4rem;
  margin-bottom: 5rem;
`

const FilterContainer = styled.div`
  height: 24rem;
  width: 18rem;
  margin-right: 3rem;
`

const PageContainer = styled.div`
  background-color: rgb(241, 241, 241);
`

const StyledCard = styled(Card)`
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  height: 25rem;
  border-radius: 5px;
`

export const CategoryPage = () => {
  const router = useRouter()
  if (!router) return null
  console.log(router.query)

  const category = router?.query?.cid
  return (
    <PageContainer>
      <Navbar />
      <Container>
        {category ? (
          <ProductList category={category as string} />
        ) : (
          <CategoryList />
        )}
      </Container>
      <Footer />
    </PageContainer>
  )
}
