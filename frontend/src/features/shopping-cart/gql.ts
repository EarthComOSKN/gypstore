import { gql } from 'apollo-boost'

export const DELETE_ITEM = gql`
  mutation($key: String!) {
    deleteShoppingCartItem(where: { key: $key }) {
      id
    }
  }
`

export const CREATE_QUOTATION = gql`
  mutation($userId: ID!) {
    createQuotation(data: { customer: { connect: { id: $userId } } }) {
      id
    }
  }
`
export const CREATE_QUOTATION_ITEMS = gql`
  mutation($key: String!, $qid: ID!, $pid: ID!, $amount: Int!, $price: Float!) {
    createQuotationItem(
      data: {
        quotation: { connect: { id: $qid } }
        key: $key
        product: { connect: { id: $pid } }
        amount: $amount
        realPrice: $price
      }
    ) {
      id
      key
      product {
        name
      }
      amount
      realPrice
    }
  }
`
export const CLEAR_SHOPPING_CART = gql`
  mutation($sid: ID!) {
    deleteManyShoppingCartItems(where: { ShoppingCart: { id: $sid } }) {
      count
    }
  }
`
