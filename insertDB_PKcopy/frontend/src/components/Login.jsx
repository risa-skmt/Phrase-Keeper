import React, { useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import LoginValidation from './LoginValidation';

function Login (){  
  const [values, setValues]  = useState({
    name: '',
    email: ''
  })


const [errors, setErrors] = useState({})

const handleInput = (event) =>{
    const {name, value} = event.target;
    setValues(prev => ({...prev, [name]: value}))
}

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(LoginValidation(values));
  }
  
    return (
      <div className="LoginForm">
        <form action="" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className='InputUserInfo_login'>
                <h3>Name</h3>
                {errors.name && <span> {errors.name}</span>}
                <input type ="name"  name="name" onChange={handleInput} value={values.name}></input>
                
                <h3>E-mail</h3>
                {errors.email && <span> {errors.email}</span>}
                <input type ="email" name="email" onChange={handleInput} value={values.email}></input>
                
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