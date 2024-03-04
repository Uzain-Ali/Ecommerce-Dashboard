import React, {useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav=()=>{
    const auth = localStorage.getItem('user');
    const navigate = useNavigate(); 
    const logout = ()=>{
        localStorage.clear();
        navigate("/signup");
    }
    return(
        <div>

          { auth ?  <ul className='navUl'>
          <img alt='logo' className='logo' src="https://www.shutterstock.com/shutterstock/photos/2278726727/display_1500/stock-vector-minimalistic-circular-logo-sample-vector-2278726727.jpg"/>

                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Product</Link></li>
                <li><Link to="/update">Update Products</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link onClick={logout} to="/signup">Logout ({JSON.parse(auth).name})</Link></li>
            </ul>
            :
            <ul className='navUl nav-rightSide'>
                    <li><Link to="/signup">Sign Up</Link></li>
                    <li><Link to="/login">Login</Link></li>
            </ul>
        }
        </div>
    )
}

export default Nav;