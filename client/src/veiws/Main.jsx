import React, { useState, useEffect } from 'react';
// import ('../src/App.css');
import axios from 'axios';
import {Link} from 'react-router-dom';

const Main = (props) => {

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
        setItemName("");
        setProductPrice("");
        setProductDesc("");
    }

    const newItemApi = (product) => {
        axios.post("http://localhost:9001/api/product/create", products)
            .then(res => {
                addItemToProducts(res.newItem);
            })
            .catch(err => console.log(err))
    }

    const addItemToProducts = (product) => {
        setProducts([...products, product]);
    }

    useEffect(() => {
        axios.get("http://localhost:9001/api/product")
            .then(res => {
                console.log(res.data);
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err))

    }, [])

    return (
        <>
            <p>Name: {itemName}</p>
            <p>Price: {productPrice}</p>
            <p>Desc: {productDesc}</p>
            <hr />

            <div className="card d-block mx-auto w-50 my-3 border p-3">
                <label className="form-label">Item Name </label>
                <input className="form-control" type='text' value={itemName} onChange={e => setItemName(e.target.value)} />
                <label className="form-label">Item Price </label>
                <input className="form-control" type='number' value={productPrice} onChange={e => setProductPrice(e.target.value)} />
                <label className="form-label">Item Description </label>
                <input className="form-control" type='text' value={productDesc} onChange={e => setProductDesc(e.target.value)} />
                <br />
                <button className='btn btn-secondary' onClick={formHandler}> Submit </button>
            </div>
            {/* <p>{products.title}</p> */}
            <div className='container d-block mx-auto w-50 my-3 p-3'>
                <div className="row row-cols-2">
                    <div className="col-sm-8">
                        {loaded && products.map((product, key) =>
                            <div key={key}>
                                <div className="card">
                                    <div className="card-body">
                                        <h3 className="card-title">Product Name: <Link to={`/product/${product._id}`}>{product.title}</Link></h3>
                                        <h5 className="card-subtitle mb-2 text-muted">$ {product.price}</h5>
                                        <p className="card-text">Description: {product.description}</p>
                                        <button className='btn btn-warning'>Edit</button>
                                        <button className='btn btn-danger'>Delete</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main