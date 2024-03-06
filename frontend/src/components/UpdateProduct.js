import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
const UpdateProduct = ()=>{
    const [name,setName] = useState('');
    const [price,setPrice] = useState('');
    const [category,setCategory] = useState('');
    const [company,setCompany] = useState('');
    const params = useParams();

    useEffect(()=>{
        getProductDetails();
    },[])

    const getProductDetails = async()=>{
        console.log(params);
        let result = await fetch(`http://localhost:5000/product/${params.id}`);
        result = await result.json();
        console.log(result);
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company);
    }

    const updateProduct=async()=>{
        console.warn(name,price, category,company);
    };
    return(
        <div className='signuppage'>
        <div className='registeration'>
            <h1>Update Product</h1>
            <input className='InputBox' type='text' value={name} placeholder='Enter Product Name' onChange={(e)=>{setName(e.target.value)}}/>
            <input className='InputBox' type='text' value={price} placeholder='Enter Product Price' onChange={(e)=>{setPrice(e.target.value)}}/>

            <input className='InputBox' type='text' value={category} placeholder='Enter Product Category' onChange={(e)=>{setCategory(e.target.value)}}/>

            <input className='InputBox' type='text' value={company} placeholder='Enter Product Company' onChange={(e)=>{setCompany(e.target.value)}}/>

            <button onClick={updateProduct}>Update Product</button> 
        </div>
        </div>
    )
}

export default UpdateProduct;