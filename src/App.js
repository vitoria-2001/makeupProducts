import React, { useEffect, useState } from  'react';

const doFetchProducts= async () => {
  const resource= await fetch("https://makeup-api.herokuapp.com/api/v1/products.json");
  const json = await resource.json();

  return json.map((product) => {
    return {
      id: product.id,
      name: product.name,
      product_type: product.product_type,
      category: product.category,
      brand: product.brand,
      price:product.price,
      price_sign: product.price_sign,
      img: product.image_link
    };
  });
}

export default function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [requiredProduct, setRequiredProduct] = useState('');
  const [foundProducts, setFoundProducts] = useState([]);
  const [totalFoundProducts, setTotalFoundProducts] = useState(0);

  useEffect(() => {
    const getProducts = async () => {
        allProducts = await doFetchProducts();
      setAllProducts(allProducts);
      setFoundProducts(Object.assign([], allProducts));
    };

    getProducts();
  }, []);

  //Para filtrar os produtos a partir do texto digitado
  
  useEffect (() => {
    const filterTextProduct = requiredProduct.toLowerCase();

     foundProducts = allProducts.filter((product) => {
      return product.nameFiltered.includes(filterTextProduct);
    });

    setFoundProducts(foundProducts);
    setTotalFoundProducts(foundProducts.length);
  }, [allProducts, requiredProduct]);

  return (
    <div>
      <nav>MAKEUP | PRODUCTS</nav>

    <div>
      <input
      placeholder="Seach a product" 
      type="text"
      value={requiredProduct}
      onChange={handleRequiredProduct}
      />
    </div>

      
    </div>
  );
}
