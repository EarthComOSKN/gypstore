import { gql } from 'apollo-boost'

export const GET_ME = gql`
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
        createdAt
        status
      }
      shoppingCart {
        id
        productItems {
          id
          product {
            id
            name
            salePrice
            unitType
            image
          }
          amount
        }
      }
    }
  }
`
