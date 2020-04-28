import gql from 'graphql-tag'

export const CREATE_LOCATION = gql`
  mutation($name: String!, $location: String!, $uid: ID!) {
    createAddress(
      data: {
        name: $name
        Address: $location
        customer: { connect: { id: $uid } }
      }
    ) {
      id
      name
      Address
    }
  }
`

export const PAYMENT = gql`
  mutation($oid: ID!, $token: String!, $amount: Int, $uid: ID!) {
    paymentViaOmise(
      orderId: $oid
      token: $token
      amount: $amount
      userId: $uid
    ) {
      id
      docId
      amount
      createdAt
    }
  }
`

export const CREATE_ORDER = gql`
  mutation($userId: ID!, $status: String) {
    createOrder(
      data: { status: $status, customer: { connect: { id: $userId } } }
    ) {
      id
    }
  }
`
export const CREATE_ORDER_ITEMS = gql`
  mutation($key: String!, $oid: ID!, $pid: ID!, $amount: Int!, $price: Float!) {
    createOrderItem(
      data: {
        order: { connect: { id: $oid } }
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
