import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Signup=()=>{
    const [name, setName]= useState("");
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const navigate = useNavigate();
    const collectData =async ()=>{
        console.log(name, email, password);
        const result =await fetch('http://localhost:5000/register',{
            method:'POST',
            body:JSON.stringify({name, email, password}),
            headers:{
                'Content-Type':'application/json'
            }
        })
        console.log(await result.json());
        if(result){
            navigate('/');
        }
    }
    return(
        <div className='signuppage'>
            <div className='registeration'>
                <h1>Register</h1>
                <input className='InputBox' type="text" value ={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Name'/>
                <input className='InputBox' type="email" value ={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email'/>
                <input className='InputBox' type="password" value ={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password'/>
                <button onClick={collectData} type='button'>SignUp</button>
            </div>
        </div>

    )
}

export default Signup;