import React, { useState, useEffect } from 'react';
// import ('../src/App.css');
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
        <div className="card d-block mx-auto w-50 my-3 border p-3">
          <label className="form-label">Item Name </label>
          <input className="form-control" type='text'/>
          <label className="form-label">Item Price </label>
          <input className="form-control" type='number'/>
          <label className="form-label">Item Description </label>
          <input className="form-control" type='text'/>
          <br/>
          <button className='btn btn-secondary'> Submit </button>
        </div>
      {/* <p>{products.title}</p> */}
      <div className='container d-block mx-auto w-50 my-3 p-3'>
          <div className="row">
              {loaded && products.allProduct.map( (product,key)=>
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
