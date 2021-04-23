import React from  'react';

export default function App() {

async function doFetchProducts() {
  const resource= await fetch("https://makeup-api.herokuapp.com/api/v1/products.json");
  const json = await resource.json();

  console.log(json)
}

  return (
    <div>
      <h3>OIII </h3>
    </div>
  );
}
