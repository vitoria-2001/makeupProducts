import React from 'react';

export default function ProductList ({productList}) {

    if (productList.length === 0) {
        return <h3>No found products!</h3>
    }
    retrun (
        <div>
            <h2>Product(s):</h2>

            <ul>
                {productList.map((product) => {
                    const {id} = product;

                    retrun (
                        <li key={id}>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};