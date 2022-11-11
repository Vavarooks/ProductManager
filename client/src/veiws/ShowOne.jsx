import axios from 'axios';
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
const ShowOne = (props) => {

    const {id} = useParams();

    const [product, setProduct] = useState({
        _id: "",
        title: "",
        price: "",
        description: ""
    })
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDesc] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:9001/api/product/${id}`)
            .then(res =>{
                console.log(res)
                setProduct(res.data.oneProductById);
                setTitle(res.data.title)
                setPrice(res.data.price);
                setDesc(res.data.description);
            })
            .catch(err =>{
                console.log(err)
            })
    })

    return (
        <>
            <div className='container card d-block mx-auto w-85 my-3 p-3'>
                <p>Product id: {id}</p>
                <h1>Product Name: {title}</h1>
                <h3>Price: $ {price}</h3>
                <h6>Description: {description}</h6>
            </div>
        </>
    )
}

export default ShowOne