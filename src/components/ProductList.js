import React from 'react';
import ProductItem from './ProductItem';
import Spinner from './Spinner';

export default function ProductList ({productsList}) {
    if (productsList.length === 0) {
        return <Spinner/>
    }
  
    return (
        <div>
            <h2>Product(s):</h2>
            <ul>
                {productsList.map((product) => {
                    const {id} = product;

                    return (
                        <li key={id}>
                            <ProductItem item={product} />
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};