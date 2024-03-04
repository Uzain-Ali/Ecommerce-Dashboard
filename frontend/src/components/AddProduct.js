import React, { useState } from 'react';

const Addproduct = ()=>{
    const [name,setName] = useState('');
    const [price,setPrice] = useState('');
    const [category,setCategory] = useState('');
    const [company,setCompany] = useState('');

    const addProduct=async()=>{
        console.log(name,price,category,company);
        const userId =JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch('http://localhost:5000/addProduct',{
            method:"Post",
            body:JSON.stringify({name,price,category,userId,company}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result =await result.json();
        console.log(result);
    }
    return(
        <div className='signuppage'>
        <div className='registeration'>
            <h1>Add Product</h1>
            <input className='InputBox' type='text' value={name} placeholder='Enter Product Name' onChange={(e)=>{setName(e.target.value)}}/>
            <input className='InputBox' type='text' value={price} placeholder='Enter Product Price' onChange={(e)=>{setPrice(e.target.value)}}/>
            <input className='InputBox' type='text' value={category} placeholder='Enter Product Category' onChange={(e)=>{setCategory(e.target.value)}}/>
            <input className='InputBox' type='text' value={company} placeholder='Enter Product Company' onChange={(e)=>{setCompany(e.target.value)}}/>
            <button onClick={addProduct}>Add Product</button> 
        </div>
        </div>
    )
}

export default Addproduct;