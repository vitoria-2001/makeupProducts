import React from 'react';

export default function ProductList ({productsList}) {

   if (productsList.length === 0) {
       return <h3>No found products!</h3>
    }
    return (
        <div>
            <h2>Product(s):</h2>
            <ul>
                {productsList.map((product) => {
                    const {id} = product;

                    return (
                        <li key={id}>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};