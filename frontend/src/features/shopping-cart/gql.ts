import { gql } from 'apollo-boost'

export const GET_SHOPPING_CART = gql`
  query {
    me {
      shoppingCart {
        productItems {
          id
          product {
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
