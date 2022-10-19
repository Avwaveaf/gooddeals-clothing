import { useContext } from 'react';

import React from 'react';
import { ProductContext } from '../../components/contexts/shop.context';
import { ProductCard } from '../../components/product-card/product-card.component';

import './shop.styles.scss'
function Shop() {

    const {shopData} = useContext(ProductContext);
    
    return (
        <div className='products-container'>
            {
                shopData.map((product)=>{
                    return <ProductCard product={product} key={product.id}></ProductCard>
                })
            }
        </div>

    );
}

export default Shop;