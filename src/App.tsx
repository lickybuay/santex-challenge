import React, { useState } from 'react';
import Header from './components/header/Header';
import ProductList from './components/productList/ProductList';
import { AlertContext, CartPriceContext } from './store/context';
import Alerts from './components/alerts/Alerts';
import useStateWithStorage from './hooks/useStateWithStorage';
import { CART_STORAGE_KEY } from './lib/constant';

function App() {  
  
  const [totalCart, setCart] = useStateWithStorage(CART_STORAGE_KEY, []);
  const value = { totalCart, setCart };
  
  const [alert, setAlert] = useState('');
  const alertValue = { alert, setAlert };
  
  return (<>
    <AlertContext.Provider value={alertValue}>
      <CartPriceContext.Provider value={value}>
        <Header />
        <ProductList />
        <Alerts />
      </CartPriceContext.Provider>
    </AlertContext.Provider>
  </>);
}

export default App;
