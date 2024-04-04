import LinearProgress from '@mui/material/LinearProgress';
import { Title, Wrapper } from './styles';
import Product from '../product/Product';
import Stack from '@mui/material/Stack';
import useProducts from '../../hooks/useProducts';

export default function ProductList() {
  
  const { loading, error, products } = useProducts();
  
  if(loading){
    return <LinearProgress color='error' />
  }
  
  if(error){
    return <LinearProgress color='error' />
  }

  return <Wrapper data-testid='product-list'>
    <Title>PRODUCT LIST</Title>
    <Stack direction='row' columnGap={2} rowGap={4} flexWrap='wrap' marginBottom={4}>
      { error && <Title>Something goes wrong</Title> }
      {products.map((product, productKey) =>
        <Product key={`product-${product.id}`} positionId={productKey} product={product} />
      )}
    </Stack>
  </Wrapper>;

}
