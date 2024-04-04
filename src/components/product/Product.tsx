import * as React from 'react';
import { ProductType } from './type';
import { ProductWrapper, Button, ProductImage, ProductDescriptionWrapper, ProductDescription, ProductTitle, ProductImageItem } from './styles';
import { AlertContext, CartPriceContext } from '../../store/context';
import { useContext } from 'react';
import { formatPrice } from '../../lib/utils';
import { setItemToOrder } from '../../graphql/mutations';
import { useMutation } from '@apollo/client';
import Fade from '@mui/material/Fade';

interface ProductTypeProps {
    product: ProductType,
    positionId: number
}

export default function Product({product, positionId}:ProductTypeProps) {

    const { totalCart, setCart } = useContext(CartPriceContext);
    const { setAlert } = useContext(AlertContext);
    
    const [createLink, { error }] = useMutation(setItemToOrder, {
        variables: {
            productVariantId: product.variants[0].id.toString(),
            quantity: 1
        }
    });

    const addOrder = async () => {
        try {
            await createLink();
            if (!error) {
                setCart([
                    ...totalCart,
                    product
                ]);
                setAlert('Product Added to Order')
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

  return (<Fade in={true} easing='ease-in-out' timeout={1000} style={{ transitionDelay: `${positionId*200}ms` }}>
    <ProductWrapper data-testid={`product-${product.id}`}>
        <ProductImage>
            <ProductImageItem alt={product.name} src={product.assets.length===0 ? 'https://placehold.co/1600x1067' : product.assets[0].preview} />
        </ProductImage>
        <ProductTitle>
            {product.name}
        </ProductTitle>
        <ProductDescriptionWrapper>
            <ProductDescription bold>
                Price: {product.variants[0].currencyCode} {formatPrice(product.variants[0].priceWithTax.toString())}
            </ProductDescription>
            <ProductDescription>
                {product.description}
            </ProductDescription>
        </ProductDescriptionWrapper>
        <Button onClick={addOrder} data-testid={`product-add-${product.id}`}>Buy</Button>
    </ProductWrapper>
</Fade>);
}