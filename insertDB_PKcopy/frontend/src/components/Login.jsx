import React, { useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import LoginValidation from './LoginValidation';

function Login (){  
const [values, setValues]  = useState({        //useStateを使用してvaluesの状態変数宣言。nameとemailの初期値は空。
    name: '',
    email: ''
  })


const [errors, setErrors] = useState({})      //useStateを使用してerrorsの状態変数宣言

const handleInput = (event) =>{
    const {name, value} = event.target;
    setValues(prev => ({...prev, [name]: value}))     //入力される度にprevで現状のコピーを受け取り、[name]:valueという形で更新されたプロパティを新しくsetValuesで保持
}

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(LoginValidation(values));           //LoginValidationにvaluesを渡し、返されたエラーをerrorsの状態とする
    //window.location.href = "/"               //変更する!!!!!!!!!!!!
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