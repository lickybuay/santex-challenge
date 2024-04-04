import { createContext, useContext } from "react";
import { ProductType } from "../components/product/type";

//CART CONTEXT
export const CartPriceContext = createContext({
    totalCart: [],
    setCart: (_newPrice:ProductType[]) => {}
});

export function useCartPriceContext() {
    const price = useContext(CartPriceContext);
    if (price === undefined) {
        throw new Error('useCartPriceContext must be used with a CartPriceContext');
    }  
    return price;
}

//NOTIFICATION CONTEXT
export const AlertContext = createContext({
    alert: '',
    setAlert: (_newPrice:string) => {}
});