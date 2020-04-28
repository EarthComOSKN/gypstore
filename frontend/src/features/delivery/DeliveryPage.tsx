import styled from '@emotion/styled'
import { Navbar } from '../navigation/Navbar'
import { Footer } from '../../component/Footer'
import { DeliveryDetail } from './DeliveryDetail'
import { useQuery } from '@apollo/react-hooks'
import { GET_ME } from '../navigation/gql'
import { FullPageLoading } from '../../component/Loading'
const PageContainer = styled.div`
  background-color: rgb(241, 241, 241);
`

export const DeliveryPage = () => {
  const { data, loading, error, refetch } = useQuery(GET_ME)
  if (loading) return <FullPageLoading />
  console.log(data)
  return (
    <PageContainer>
      <Navbar />
      <DeliveryDetail orders={data.me.orders} />
      <Footer />
    </PageContainer>
  )
}
