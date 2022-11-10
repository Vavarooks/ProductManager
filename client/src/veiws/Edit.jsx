import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import {Navigate, useNavigate, useParams} from 'react-router-dom';
const EditOne = (props) => {

    const {id} = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState({
        _id: "",
        title: "",
        price: "",
        description: ""
    })
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDesc] = useState("");

    const editHandler = () => {
        const updatedProduct = {
            title: title,
            price: price,
            description: description
        }
        editOneProductApi(updatedProduct);
    }

    const editOneProductApi = (product) => {
        axios.put(`http://localhost:9001/api/product/update/${id}}`)
            .then(res =>{
                console.log(res)
                navigate('/')
            })
            .catch(err =>{
                console.log(err)
            })
    }

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
    },[])

    return (
        <>
            <div className='container card d-block mx-auto w-85 my-3 p-3'>
            <label className="form-label">Item Name </label>
                <input className="form-control" type='text' value={title} onChange={e => setTitle(e.target.value)} />
                <label className="form-label">Item Price </label>
                <input className="form-control" type='number' value={price} onChange={e => setPrice(e.target.value)} />
                <label className="form-label">Item Description </label>
                <input className="form-control" type='text' value={description} onChange={e => setDesc(e.target.value)} />
                <br />
                <button className='btn btn-secondary' onClick={editHandler}> Edit </button>
            </div>
        </>
    )
}

export default EditOne