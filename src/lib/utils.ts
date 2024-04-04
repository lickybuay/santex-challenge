// import { ProductType } from "../components/product/type";

// const cartStorage = 'totalCart';

export function formatPrice(price:string) {
    price = price.toString();    
    let parts = price.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return '$ '+parts[0];
}

export function getStorage(key:string) {
    const cartValues = localStorage.getItem(key);
    return cartValues ? JSON.parse(cartValues) : [];
}

export function setStorage(key:string, value: any) {
    localStorage.setItem(key,  JSON.stringify(value));
}