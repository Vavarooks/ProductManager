import React, { useState, useEffect } from 'react';
// import ('../src/App.css');
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const [itemName, setItemName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDesc, setProductDesc] = useState("");

  const formHandler = () => {
    const newItem = {
      itemName: itemName,
      productPrice: productPrice,
      productDesc: productDesc
    }
    newItemApi(newItem);
  }

  const newItemApi = (product) =>{
    axios.post("http://localhost:9001/api/product/create", product)
  }

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
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Happy Shop</span>
        </div>
      </nav>

      <p>Name: {itemName}</p>
      <p>Price: {productPrice}</p>
      <p>Desc: {productDesc}</p>
      <hr/>

      <div className="card d-block mx-auto w-50 my-3 border p-3">
        <label className="form-label">Item Name </label>
        <input className="form-control" type='text' value={itemName} onChange={e => setItemName(e.target.value)}/>
        <label className="form-label">Item Price </label>
        <input className="form-control" type='number' value={productPrice} onChange={e => setProductPrice(e.target.value)}/>
        <label className="form-label">Item Description </label>
        <input className="form-control" type='text' value={productDesc} onChange={e => setProductDesc(e.target.value)}/>
        <br />
        <button className='btn btn-secondary' onClick={formHandler}> Submit </button>
      </div>
      {/* <p>{products.title}</p> */}
      <div className='container d-block mx-auto w-50 my-3 p-3'>
        <div className="row">
          {loaded && products.allProduct.map((product, key) =>
            <div className="col-sm-8 space">
              <div className="card">
                <div className="card-body">
                  <div key={key}>
                    <h3 className="card-title">Product Name: {product.title}</h3>
                    <h5 className="card-subtitle mb-2 text-muted">$ {product.price}</h5>
                    <p className="card-text">Description: {product.description}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default App;
