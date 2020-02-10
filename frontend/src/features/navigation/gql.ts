import { gql } from 'apollo-boost'

export const GET_ME = gql`
  query {
    me {
      id
      name
      email
      phone
      shoppingCart {
        id
        productItems {
          id
          product {
            id
            name
            salePrice
            unitType
          }
          amount
        }
      }
    }
  }
`
