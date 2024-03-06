import React, { useState } from 'react';

const UpdateProduct = ()=>{
    const [name,setName] = useState('');
    const [price,setPrice] = useState('');
    const [category,setCategory] = useState('');
    const [company,setCompany] = useState('');

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