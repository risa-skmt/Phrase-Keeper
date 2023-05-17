import React, { useState } from 'react'


const InputForm = ({phraseList, setPhraseList}) => {

//文字をinputした情報をinputTextに入れていく
const [inputText, setInputText] = useState("");

//inputに入力してエンターを押したら、画面が再読み込みされてコンソールが表示されない問題を
//解決する（フォームのデフォルトを消す）
   const handleSubmit = (e) => {
        e.preventDefault();   //レンダリングするイベントを解除
        


        // submitした時、入力した文字を消してinoutFormを空にする
        setInputText("")
        //submit押した時(入力phraseを確定した時)にそれがinputTextとしてコンソールに出力
        console.log(inputText);

   }
      



const handleChange = (e) => {
  // 打ち込んだ文字の情報をInputTextに
  setInputText(e.target.value);
  //console.log(inputText);

}

  return (
    <div className = "inputForm">
     {/* inputformのボタンが押されたらhandlesubmitを呼び出し */}
      <form onSubmit={handleSubmit}>     
      {/* inputに入力される度にhandleChangeを呼び出す */}
        <input type="text" onChange={handleChange} value={inputText}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default InputForm
