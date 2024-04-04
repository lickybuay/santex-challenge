
export interface ProductAssetType {
    preview: string;
}

export interface ProductType {
    description: string;
    id: string;
    name: string;
    slug: string;
    assets: ProductAssetType[],
    variants: ProductVariantType[]
}

export interface ProductVariantType {
    currencyCode: string;
    id: string;
    name: string;
    price: number;
    priceWithTax: number;
    productId: string;
    sku: string;
    stockLevel: string;
}