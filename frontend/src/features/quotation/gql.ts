import gql from 'graphql-tag'

export const GET_QUOTATIONS = gql`
  query($uid: ID!) {
    quotations(where: { customer: { id: $uid } }, orderBy: createdAt_DESC) {
      id
      status
      quotationItems {
        id
        product {
          id
          name
          salePrice
          unitType
        }
        amount
        realPrice
      }
      fileUrl
    }
  }
`
