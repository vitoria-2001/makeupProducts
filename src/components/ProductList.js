import React from 'react';
import ProductItem from './ProductItem';
import Spinner from './Spinner';
import css from '../styles/app.module.css';

export default function ProductList ({productsList}) {
    if (productsList.length === 0) {
        return <Spinner/>
    }
  
    return (
        <div>
            <h2 className={css.titleBody}>Product(s):</h2>
            <ul className={css.productList}>
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