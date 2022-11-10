import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import {useParams} from 'react-router-dom';
const ShowOne = (props) => {

    const {id} = useParams();

    const [product, setProduct] = useState({
        _id: "",
        title: "",
        price: "",
        description: ""
    })
    const [title, setItemName] = useState("");
    const [price, setProductPrice] = useState("");
    const [description, setProductDesc] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:9001/api/product/${id}`)
            .then(res =>{
                console.log(res)
                setProduct(res.data.oneProductById);
                setItemName(res.data.oneProductById.title)
                setProductPrice(res.data.oneProductById.price);
                setProductDesc(res.data.oneProductById.description);
            })
            .catch(err =>{
                console.log(err)
            })
    })

    return (
        <>
            <h1>This is ShowOne</h1>
            <div className='container card d-block mx-auto w-85 my-3 p-3'>
                <p>This id: {id}</p>
                <h1>Product Name: {product.title}</h1>
                <h3>Price: $ {product.price}</h3>
                <h6>Description: {product.description}</h6>
            </div>
        </>
    )
}

export default ShowOne