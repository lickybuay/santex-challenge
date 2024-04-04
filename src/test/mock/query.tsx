import { MockedProvider } from '@apollo/client/testing';
import { renderHook } from '@testing-library/react-hooks';
import useProducts from '../../hooks/useProducts';

export const productsMock = {
  id: '4',
  name: '32-Inch Monitor',
  slug: '32-inch-monitor',
  description:
    'The UJ59 with Ultra HD resolution has 4x the pixels of Full HD, delivering more screen space and amazingly life-like images.',
  variants: [
    {
      id: '8',
      productId: '4',
      sku: 'LU32J590UQUXEN',
      name: '32-Inch Monitor',
      price: 31000,
      currencyCode: 'USD',
      priceWithTax: 37200,
      stockLevel: 'IN_STOCK',
    },
  ],
  assets: [
    {
      "preview": "https://demo.vendure.io/assets/preview/d2/daniel-korpai-1302051-unsplash__preview.jpg"
    }
  ],
};

export const resolveProductsMock = {
  products: {
    totalItems: 1,
    items: [
      productsMock
    ],
  },
};
