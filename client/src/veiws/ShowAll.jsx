import React, { useState, useEffect } from 'react';
// import ('../src/App.css');
import axios from 'axios';
import {Link} from 'react-router-dom';

const ShowAll = (props) => {

    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const {removeProduct} = props;
    
    const deleteProduct = (id) => {
        axios.delete(`http://localhost:9001/api/product/${id}`)
        .then(res => {
            removeProduct(id)
            console.log(res);
        })
        .catch(err => console.error(err));
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
                                        <Link className='btn btn-warning' to={`/product/update/${product._id}`}>Edit</Link>
                                        <button className='btn btn-danger' onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>
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

export default ShowAll