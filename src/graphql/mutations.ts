// Here we put mutations. Remove next line
import { gql } from "@apollo/client";

export const setItemToOrder = gql`
  mutation AddItemToOrder($productVariantId: ID!, $quantity: Int!) {
    addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {
      ... on Order {
        id
        createdAt
        code
        totalQuantity
        subTotal
        subTotalWithTax
        currencyCode
        total
        totalWithTax
      }
    }
  }
`;
