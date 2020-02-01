import { gql } from "apollo-boost";

export const REGISTER = gql`
  mutation register(
    $name: String!
    $email: String!
    $password: String!
    $phone: String!
    $type: String!
  ) {
    register(
      data: {
        name: $name
        email: $email
        password: $password
        phone: $phone
        type: $type
        shoppingCart: { create: { total_cost: 0 } }
      }
    ) {
      token
      user {
        id
        name
      }
    }
  }
`;

export const LOGIN = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;
