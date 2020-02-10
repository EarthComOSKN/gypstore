import { gql } from 'apollo-boost'

export const DELETE_ITEM = gql`
  mutation($key: String!) {
    deleteShoppingCartItem(where: { key: $key }) {
      id
    }
  }
`
