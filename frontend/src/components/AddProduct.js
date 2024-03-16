import React, { useState } from 'react';

const Addproduct = ()=>{
    const [name,setName] = useState('');
    const [price,setPrice] = useState('');
    const [category,setCategory] = useState('');
    const [company,setCompany] = useState('');
    const [error, setError] = useState(false);

    const addProduct=async()=>{

        console.log(name);
        if(!name || !price || !category || !company){
            setError(true);
            return false;
        }   

        console.log(name,price,category,company);
        const userId =JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch('http://localhost:5000/addProduct',{
            method:"Post",
            body:JSON.stringify({name,price,category,userId,company}),
            headers:{
                'Content-Type':'application/json',
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`

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
             {error && !name && <span className='invalidInput'>Enter Valid Name</span>}
            <input className='InputBox' type='text' value={price} placeholder='Enter Product Price' onChange={(e)=>{setPrice(e.target.value)}}/>
            {error && !price && <span className='invalidInput'>Enter Valid Price</span>}

            <input className='InputBox' type='text' value={category} placeholder='Enter Product Category' onChange={(e)=>{setCategory(e.target.value)}}/>
            {error && !category && <span className='invalidInput'>Enter Valid Category</span>}

            <input className='InputBox' type='text' value={company} placeholder='Enter Product Company' onChange={(e)=>{setCompany(e.target.value)}}/>
            {error && !company && <span className='invalidInput'>Enter Valid Company</span>}

            <button onClick={addProduct}>Add Product</button> 
        </div>
        </div>
    )
}

export default Addproduct;