import React, { useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function SignUp (){  
    
  
    return (
        <div className="SignUpForm">
        <form action="">
            <h2>SignUp</h2>
            <div className='InputUserInfo_signup'>
                <h3>Name</h3>
                <input type ="text"></input>
                <h3>E-mail</h3>
                <input type ="text"></input>
                <h3>E-mail</h3>
                <input type ="text"></input>
                
                <div className='SignUpButton'>
                <input type ="submit" value ="SignUp"></input>
                </div>

                <div>
                <Link to ="/login" className='BackToLogin'>Back to Login Page</Link>
                </div>
               
            </div>
                
          </form>
      </div>
    );
  }
    
  
  
  export default SignUp;