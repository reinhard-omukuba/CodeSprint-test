import React from 'react';
import '../App.css'
import ProfileImg from '../images/profile.png';

import {Link} from 'react-router-dom';

function NavBar(){

    return(

        <div className="navbar">
            <Link to="/">
                <p>CodeSprint</p>
            </Link>
            <input type="text" placeholder="Search for coding tournament" className="searchInput"/>

            <div className="authArea">
                <button className="loginBtn">Login</button>
                <button className="signUpBtn">Sign Up</button>
                <img src={ProfileImg} className="profileimage" alt="" />
            </div>
            
        </div>

    );
}

export default NavBar;