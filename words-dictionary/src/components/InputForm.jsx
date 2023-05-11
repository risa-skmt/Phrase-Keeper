import React, { useState } from 'react'

const InputForm = ({wordList, setWordList}) => {

const [inputText, setInputText] = useState("");

//inputに入力してエンターを押したら、画面が再読み込みされてコンソールが表示されない問題を
//解決する（フォームのデフォルトを消す）
   const handleSubmit = (e) => {
        e.preventDefault();   //レンダリングするイベントを解除
        //console.log("a");

        // inputに打ち込んだ文字をコンソールに出力する
       // console.log(inputText);


        // 言葉(の枠)を追加していく
        setWordList([
          ...wordList,
          {
            text: inputText
          }
        ]);
        console.log(wordList);
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
        <input type="text" onChange={handleChange}/>
        <button>
        <i className="fa-solid fa-plus"></i>
         </button>
      </form>
    </div>
  )
}

export default InputForm
