// Here we put queries. Remove next line
import { gql } from "@apollo/client";

export const loadProducts = gql `
query Collections {
    products(options: { take: 10, skip: 0, sort: { name: ASC } }) {
        totalItems
        items {
            id
            name
            slug
            description
            variants {
                id
                productId
                sku
                name
                price
                currencyCode
                priceWithTax
                stockLevel
            }
            assets {
                preview
            }
        }
    }
}
`