import './App.css';
import Title  from "./components/Title";
import InputForm from './components/InputForm';
import WordsList from './components/PhraseList';
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

  useEffect(() => {
    //fetchでバックエンドExpressのサーバーを指定
    fetch('/api')
      //レスポンスをjsonとして受け取りjsオブジェクトを生成
      .then((res) => res.json())
      //生成したjsオブジェクトをdataに代入
      //data.messageで取り出したデータをuseStateに保存
      .then((data) => setData(data.data))
      //追加
      .catch((error) => console.log(error));
  },[])


  return (
    <div className="App">
      {/* <h1>Phrase Keeper</h1> */}
      <Title />
      <InputForm phraseList={phraseList} setPhraseList={setPhraseList}/>
      <WordsList phraseList={phraseList} setPhraseList={setPhraseList}/>
      
      
      {/* useStateに保存した値を表示
      <p>{ message }</p> */}
     {/* バックエンドから取得した全てのデータをdataステートに保存し、map関数で表示 */}
       {data.map((item) => (
      <p key={item.id}>{item.phrase}</p>
    ))}
    
    </div>
  );
}

export default App;
