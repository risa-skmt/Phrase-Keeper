import './App.css';
import Title  from "./components/Title";
import InputForm from './components/InputForm';

import DB from './components/DB';


//1．useStateとuseEffectをインポート
import { useState,useEffect } from 'react';



function App() {
  //useStateの初期値（空）を設定
  // const [message, setMessage] = useState('');
//dataステートを初期化（？）
  const [data, setData] = useState([]);
  
// phraseListの変数で入力された文字を入れる。状態を管理する。配列を用意
//setPhraseListは状態を変更するための変数 //型は配列にしておく
const [phraseList, setPhraseList] = useState([]);





  return (
    <div className="App">
      <Title />
      <InputForm phraseList={phraseList} setPhraseList={setPhraseList}/>
      <DB data={data} setData={setData}/> 
      
     
      
      {/* useStateに保存した値を表示
      <p>{ message }</p> */}
     {/* バックエンドから取得した全てのデータをdataステートに保存し、map関数で表示 */}

{/* 消す？？ */}
        {/* {data.map((item) => (
      <p key={item.id} class="phrase-container">{item.phrase}</p> 
    ))} */}
     
    </div>
  );
}





export default App;
