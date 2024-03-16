import React, {useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const Login=()=>{
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate("/");
        }
    },[])

    const handleLogin=async()=>{
        console.log(email,password);
        let result = await fetch('http://localhost:5000/login',{
            method:'post',
            body:JSON.stringify({email, password}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result = await result.json();
        console.log(result);
        if(result.auth){
            localStorage.setItem("user", JSON.stringify(result.user));
            localStorage.setItem("token", JSON.stringify(result.auth));
            navigate('/')
        }else{
            alert("Please enter correct detail")
        }
    }
    return(
        <div className='signuppage'>
            <div className='registeration'>
                <h1>Login</h1>
                <input className='InputBox' type='text' placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} value={email}/>
                <input className='InputBox' type='password' placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)} value={password}/>
                <button onClick={handleLogin}  type='button'>Login</button>
            </div>
        </div>
    )
};

export default Login;