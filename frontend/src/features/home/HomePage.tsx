import { Navbar } from '../navigation/Navbar'
import styled from '@emotion/styled'
import { HomeCarousel } from './HomeCarousel'
import { useQuery } from '@apollo/react-hooks'
import { GET_USERS } from './gql'
import { HeroProduct } from '../hero/HeroProduct'
import { Footer } from '../../component/Footer'
import { ProductSection } from '../product/ProductSection'
import { PartnerCard } from '../../features/partner/PartnerCard'
import { BackTop } from 'antd'
import { HomeCategory } from './HomeCategory'
import { FullPageLoading } from '../../component/Loading'

const PageContainer = styled.div`
  background-color: rgb(241, 241, 241);
`

export const HomePage = () => {
  const { data, loading } = useQuery(GET_USERS)
  if (loading) return <FullPageLoading />

  console.log(data)

  return (
    <PageContainer>
      <BackTop />
      <Navbar />
      <HomeCarousel />
      <HomeCategory />
      <HeroProduct />
      <ProductSection title="ระบบฝ้าเพดานฉาบเรียบ" 
                      mainCategoryName="แผ่นยิปซัม" 
                      mainImg="/assets/logo-without-text.png"
                      firstImg="/assets/logo-without-text.png"
                      secondImg="/assets/logo-without-text.png"
                      thirdImg="/assets/logo-without-text.png"
                      fourthImg="/assets/logo-without-text.png" />
      <ProductSection title="ระบบดูดซับเสียง" 
                      mainCategoryName="แผ่นยิปซัม" 
                      mainImg="/assets/logo-without-text.png"
                      firstImg="/assets/logo-without-text.png"
                      secondImg="/assets/logo-without-text.png"
                      thirdImg="/assets/logo-without-text.png"
                      fourthImg="/assets/logo-without-text.png" />
      <PartnerCard />
      <Footer />
    </PageContainer>
  )
}
