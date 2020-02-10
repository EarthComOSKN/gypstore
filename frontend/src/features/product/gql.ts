import { gql } from 'apollo-boost'

export const GET_PRODUCT = gql`
  query($pName: String) {
    productItems(where: { category: { name: $pName } }) {
      id
      name
      price
      brand
      unitType
      description
      MenuDetail
    }
  }
`

export const GET_PRODUCT_DETAIL = gql`
  query($id: ID) {
    productItem(where: { id: $id }) {
      id
      name
      price
      brand
      unitType
      description
      amount
      MenuDetail
      category {
        name
      }
    }
  }
`

export const ADD_PRODUCT_TO_CART = gql`
  mutation($pid: ID, $amount: Int!, $shid: ID, $key: String!) {
    updateShoppingCart(
      where: { id: $shid }
      data: {
        productItems: {
          upsert: {
            where: { key: $key }
            create: {
              key: $key
              product: { connect: { id: $pid } }
              amount: $amount
            }
            update: { product: { connect: { id: $pid } }, amount: $amount }
          }
        }
      }
    ) {
      id
      productItems {
        product {
          name
        }
        amount
      }
    }
  }
`
