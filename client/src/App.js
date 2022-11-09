import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:9001/api/product")
      .then(data => {
        console.log(data.data);
        setProducts(data.data);
        setLoaded(true);
      })
      .catch(err => console.log(err))

  }, [])

  return (
    <div className="App">
      <h1>Welcome</h1>
      {/* <p>{products.title}</p> */}
      {loaded && products.allProduct.map( (product,key)=>
        <div key={key}>
          <p>Product Name: {product.title}</p>
          <p>$ {product.price}</p>
          <p>Description: {product.description}</p>
        </div>
      )}
    </div>
  );
}
export default App;
