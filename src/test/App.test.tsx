import '@testing-library/jest-dom';
import { cleanup, render, screen, waitFor } from '@testing-library/react';

import App from '../App';
import { productsMock, resolveProductsMock } from './mock/query';
import { useMutation, useQuery } from '@apollo/client';
import { setItemToOrderMock } from './mock/mutation';
import userEvent from '@testing-library/user-event';
import { formatPrice } from '../lib/utils';

jest.mock('@apollo/client', () => ({
  ...jest.requireActual('@apollo/client'),
  useQuery: jest.fn(),
  gql: jest.fn(),
  useMutation: jest.fn(),
}));

describe('Product List and Orders', () => {
  
  beforeEach(() => {
    localStorage.clear();
    useQuery.mockReturnValue({ loading: false, error: undefined, data: resolveProductsMock });
    useMutation.mockReturnValue([() => setItemToOrderMock, { loading: false }]);
    render(<App />);
  });

  afterEach(() => {
    cleanup();
  })

  it('Render Product List', async () => {
    expect(screen.getByTestId(`product-list`)).toBeInTheDocument();
    expect(screen.getByTestId(`product-${productsMock.id}`)).toBeInTheDocument();
  });
  
  it('Add a product to the Order', async () => {
    expect(screen.getByTestId(`cart-totalprice`).textContent).toBe('$ 0');
    await waitFor(async () => {
      await userEvent.click(screen.getByTestId('product-add-4'));
    });
    expect(screen.getByTestId(`cart-totalprice`).textContent).toBe(formatPrice(productsMock.variants[0].priceWithTax.toString()));
  });

});
