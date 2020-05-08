import styled from '@emotion/styled'
import { Navbar } from '../navigation/Navbar'
import { Footer } from '../../component/Footer'
import { DeliveryDetail } from './DeliveryDetail'
import { useQuery } from '@apollo/react-hooks'
import { GET_ME } from '../navigation/gql'
import { FullPageLoading } from '../../component/Loading'
import gql from 'graphql-tag'
const PageContainer = styled.div`
  background-color: rgb(241, 241, 241);
`
const GET_ORDER = gql`
  query {
    me {
      addresses {
        name
        Address
      }
      id
      name
      email
      phone
      orders {
        shippingStatus
        createdAt
        status
        orderItem {
          product {
            name
            price
            salePrice
            brand
            unitType
            description
            MenuDetail
            TermDetail
          }
          amount
        }
      }

      createdAt
      updatedAt
    }
  }
`

export const DeliveryPage = () => {
  const { data, loading, error, refetch } = useQuery(GET_ORDER)
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
