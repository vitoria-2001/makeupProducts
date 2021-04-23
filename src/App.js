import React, { useEffect, useState } from  'react';

const doFetchProducts= async () => {
  const resource= await fetch("https://makeup-api.herokuapp.com/api/v1/products.json");
  const json = await resource.json();

  return json.map((product) => {
    const {name, id, category, product_type, brand, price, price_sign} = product;

    return {
      id,
      name,
      nameFiltered: name.toLowerCase(),
      product_type,
      category,
      brand,
      price,
      price_sign,
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
      const  allProducts = await doFetchProducts();
      setAllProducts(allProducts);
      setFoundProducts(Object.assign([], allProducts));
    };

    getProducts();
  }, []);

  //Para filtrar os produtos a partir do texto digitado
  
  useEffect (() => {
    const filterTextProduct = requiredProduct.toLowerCase();

     const foundProducts = allProducts.filter((product) => {
      return product.nameFiltered.includes(filterTextProduct);
    });

    setFoundProducts(foundProducts);
    setTotalFoundProducts(foundProducts.length);
  }, [allProducts, requiredProduct]);

  //trata da alteração no input do filtro
  const handleRequiredProduct = (event) => {
    setRequiredProduct(event.target.value);
  };

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
