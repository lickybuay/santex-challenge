import { useQuery } from "@apollo/client";
import { loadProducts } from "../graphql/queries";
import { useMemo } from "react";
import { ProductType } from "../components/product/type";

export default function useProducts(queryOptions = {}) {
    const { loading, error, data } = useQuery(loadProducts, queryOptions);
    const products:ProductType[] = useMemo(() => {
        if (data) {
            return data.products.items.filter((item:ProductType)=> item.description!=='');
        }
    }, [data]);
    return { loading, error, products };
}