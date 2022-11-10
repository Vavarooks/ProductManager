import React, { useState, useEffect } from 'react';
// import ('../src/App.css');
import axios from 'axios';

const Main = (props) => {

    const [products, setProducts] = useState([]);

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDesc] = useState("");

    const formHandler = () => {
        const newItem = {
            title: title,
            price: price,
            description: description
        }
        newItemApi(newItem);
        setTitle("");
        setPrice("");
        setDesc("");
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
            })
            .catch(err => console.log(err))

    }, [])

    return (
        <>
            <div className="card d-block mx-auto w-50 my-3 border p-3">
                <label className="form-label">Item Name </label>
                <input className="form-control" type='text' value={title} onChange={e => setTitle(e.target.value)} />
                <label className="form-label">Item Price </label>
                <input className="form-control" type='number' value={price} onChange={e => setPrice(e.target.value)} />
                <label className="form-label">Item Description </label>
                <input className="form-control" type='text' value={description} onChange={e => setDesc(e.target.value)} />
                <br />
                <button className='btn btn-secondary' onClick={formHandler}> Submit </button>
            </div>
        </>
    )
}

export default Main