import React, { useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Login (){  
    
  
    return (
      <div className="LoginForm">
        <form action="">
            <h2>Login</h2>
            <div className='InputUserInfo_login'>
                <h3>Name</h3>
                <input type ="text"></input>
                <h3>E-mail</h3>
                <input type ="text"></input>
                
                <div className='LoginButton'>
                <input type ="submit" value ="Login"></input>
                </div>

                <div>
                <Link to ="/signup" className='SignUpButton'>SignUp</Link>
                </div>
            </div>
                
          </form>
      </div>
    );
  }
    
  
  
  export default Login;