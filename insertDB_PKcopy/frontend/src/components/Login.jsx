import React, { useState } from 'react'

function Login (){  
    // //文字をinputした情報をinputTextに入れていく.setInputValueは状態を管理
    // const [inputValue, setInputValue] = useState('');
  
    // const handleInputChange = (event) => {
    //   setInputValue(event.target.value); // 打ち込んだ文字の情報をInputValueに
    // };
  
    // const handleSubmit = (event) => {
    //   event.preventDefault();  //inputに入力してエンターを押したら、画面が再読み込みされてコンソールが表示されない問題を解決する（フォームのデフォルトを消す）
    //   onInsert(inputValue); //フォームの入力値(inputValue)をonInsertに定義し、InputFormコンポーネントに渡す。→ 親コンポーネント(App.js)で処理できる
    //   setInputValue(''); // submitした時、入力した文字を消してinoutFormを空にする
    // };
  
    return (
      <div className="LoginForm">
        <form action="">
            <h2>Login</h2>
            <div className='InputUserInfo'>
                <h3>Name</h3>
                <input type ="text"></input>
                <h3>E-mail</h3>
                <input type ="text"></input>
                
                <div className='LoginButton'>
                <input type ="submit" value ="Login"></input>
                </div>
            </div>
                
          </form>
      </div>
    );
  }
    
  
  
  export default Login;