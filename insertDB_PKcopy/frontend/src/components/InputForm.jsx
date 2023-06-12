import React, { useState } from 'react'



function InputForm ({ onInsert }){  //onInsert(=inputValue)を引数に取る。InputForm.jsxを他ファイルで読み込めば、inputValueの処理も他ファイルでできる
  //文字をinputした情報をinputTextに入れていく.setInputValueは状態を管理
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value); // 打ち込んだ文字の情報をInputValueに
  };

  const handleSubmit = (event) => {
    event.preventDefault();  //inputに入力してエンターを押したら、画面が再読み込みされてコンソールが表示されない問題を解決する（フォームのデフォルトを消す）
    onInsert(inputValue); //フォームの入力値(inputValue)をonInsertに定義し、InputFormコンポーネントに渡す。→ 親コンポーネント(App.js)で処理できる
    setInputValue(''); // submitした時、入力した文字を消してinoutFormを空にする
  };

  return (
    <div className="inputForm">
      {/* inputformのボタンが押されたらhandlesubmitを呼び出し */}
      <form onSubmit={handleSubmit}>
        {/* inputに入力される度にhandleInputChangeを呼び出す */}
        <input type="text" name="inputPhrase" value={inputValue} onChange={handleInputChange} />
        <input type="submit" value="+" />
      </form>
    </div>
  );
}
  


export default InputForm;
