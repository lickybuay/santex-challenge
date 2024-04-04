import { useCallback, useContext, useEffect, useState } from "react";
import { HeaderTop, CartAmount } from "./styles";
import { CartPriceContext } from "../../store/context";
import { formatPrice, setStorage } from "../../lib/utils";
import { ProductType } from "../product/type";
import { CART_STORAGE_KEY } from "../../lib/constant";

export default function Header() {
  const cart = useContext(CartPriceContext);
  const [ totalCart, setTotalCart ] = useState(0);
  
  const getTotalCart = useCallback(() => cart.totalCart.reduce((accumulator: number, currentProduct: ProductType) => {
      return accumulator + currentProduct.variants.reduce((variantAccumulator, currentVariant) => {
          return variantAccumulator + currentVariant.priceWithTax;
      }, 0);
  }, 0), [cart]);
  
  useEffect(() => {
    if(cart.totalCart.length>0){
      setTotalCart(getTotalCart());
      setStorage(CART_STORAGE_KEY,  cart.totalCart);
    }
  }, [cart, getTotalCart])
  
  return (
    <HeaderTop>
      <img
        src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
        alt="logo"
      />
      <CartAmount data-testid='cart-totalprice'>{formatPrice(totalCart.toString())}</CartAmount>
    </HeaderTop>
  );
}
