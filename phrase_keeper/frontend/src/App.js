import './App.css';
//1．useStateとuseEffectをインポート
import { useState,useEffect } from 'react';


function App() {
  //useStateの初期値（空）を設定
  // const [message, setMessage] = useState('');
//dataステートを初期化（？）
  const [data, setData] = useState([]);
  
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
      <h1>Phrase Keeper</h1>
      {/* useStateに保存した値を表示
      <p>{ message }</p> */}
     {/* バックエンドから取得した全てのデータをdataステートに保存し、map関数で表示 */}
       {data.map((item) => (
      <p key={item.id}>{item.name}</p>
    ))}
    </div>
  );
}

export default App;
