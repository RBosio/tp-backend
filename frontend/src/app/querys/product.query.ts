import { gql } from "apollo-angular";

export const GET_PRODUCTS = gql`
  {
    getProducts{
      id
      name
      price
      stock
      created_at
      image
      status
      category {
        id
      }
    }
  }
`