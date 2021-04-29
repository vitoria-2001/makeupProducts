import React, { useEffect, useState } from  'react';
import ProductList from './components/ProductList';
import Spinner from './components/Spinner';
import css from 'app.module.css';

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
      <div className="nav">
      <nav  className="nav-item">
        <h2>MAKEUP | PRODUCTS</h2></nav>
      </div>

    <div  className={css.container} >
    <div>
      <input
      placeholder="Seach a product" 
      type="text"
      value={requiredProduct}
      onChange={handleRequiredProduct}
      />
      |  Quantity of found products: <strong> {totalFoundProducts}</strong>
    </div>
    <hr/>

    <div>
      <ProductList productsList={foundProducts} />

      {!foundProducts && <Spinner/>}
    </div>
    </div>
    </div>
  );
}
