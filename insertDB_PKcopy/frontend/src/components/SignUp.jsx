import React, { useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import SignUpValidation from './SignUpValidation';

function SignUp (){  
    
    const [values, setValues]  = useState({
        name: '',
        email_1: '',
        email_2: ''
      })
    
    
    const [errors, setErrors] = useState({})
    
    const handleInput = (event) =>{
        const { name, value } = event.target;
        setValues((prev) => ({ ...prev, [name]: value }));
    }
    
      const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(SignUpValidation(values));
      }


    return (
        <div className="SignUpForm">
        <form action="" onSubmit={handleSubmit}>
            <h2>SignUp</h2>
            <div className='InputUserInfo_signup'>
                <h3>Name</h3>
                {errors.name && <span> {errors.name}</span>}
                <input type ="text" name="name" onChange={handleInput} value={values.name}></input>

                <h3>E-mail</h3>
                {errors.email_1 && <span> {errors.email_1}</span>}
                <input type ="text" name="email_1" onChange={handleInput} value={values.email_1}></input>

                <h3>E-mail</h3>
                {errors.email_2 && <span> {errors.email_2}</span>}
                <input type ="text" name="email_2" onChange={handleInput} value={values.email_2}></input>
                
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