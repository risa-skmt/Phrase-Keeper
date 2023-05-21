import React, { useState } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import SignUpValidation from './SignUpValidation';
import { createBrowserHistory } from 'history'

function SignUp (){  
    
    const [values, setValues]  = useState({
        name: '',
        email_1: '',
        email_2: ''
      })
    
    
    const [errors, setErrors] = useState({})
    
    const handleInput = (event) =>{
        const { name, value } = event.target;           //InputFormのname属性と値を取得
        setValues((prev) => ({ ...prev, [name]: value }));  //setValuesによってvaluesの該当フィールドを更新
    }
    
    const history = createBrowserHistory();

      function handleSubmit(event) {
    event.preventDefault();
    setErrors(SignUpValidation(values)); //valuesのバリデーションをする。エラーならerrorsを更新

     // エラーチェックが通った場合のみリダイレクト
     if (Object.keys(errors).length === 0) {
      history.push('/login');
    }
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