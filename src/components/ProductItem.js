import React from 'react';

export default function ProductItem ({item}) {
    const {id, name, category, product_type,  brand, price,price_sign, img } = item;

    return (
        <div key={id}>
            <img src={img} alt={name} />
            <section>
            {name} | {category}
            </section>
            <ul>
                <li>{product_type}</li>
                <li>Brand: {brand}</li>
                <li>Price: {price_sign}{price}</li>  
            </ul>
        </div>
    )
}