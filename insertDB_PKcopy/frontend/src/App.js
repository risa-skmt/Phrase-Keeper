import './App.css';
import Title  from "./components/Title";
import InputForm from './components/InputForm';
import DB from './components/DB';

import { useEffect, useState } from 'react';
import axios from 'axios'

import Login from "./components/Login.jsx";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
//ステートを初期化
  const [data, setData] = useState([]);
 
//fetchData関数。/apiにGETリクエストを送信しレスポンスを処理
const fetchData = () => {
  axios.get('/api')
    .then(response => {             //リクエスト成功時
      setData(response.data.data);    //dataオブジェクトの中にあるresponse.dataをdataにsetする処理
    })
    .catch(error => {               //リクエスト失敗時
      console.error(error);
    });
};

// inputValueのデータを/api/insertにPOSTリクエストをする
const handleInsert = (inputValue) => {

  if (inputValue.trim() === '') {
    // inputValueが空の場合は何も実行しない
    return;
  }

  //inputValueの中身がある時
  axios.post('/api/insert', { inputValue })
    .then(response => {
      console.log(response.data);
      fetchData();           //データの再取得
    })
    .catch(error => {
      console.error(error);
    });
};



  
  // ページが最初にロードされた時にのみfetchPhrases関数を実行してデータを取得
  useEffect(() => {
    fetchPhrases();
  }, []);


// データベースからフレーズデータを取得する関数
const fetchPhrases = () => {
  axios.get('/api')
    .then(response => {
      setData(response.data.data);
    })
    .catch(error => {
      console.error(error);
    });
};


  return (
    <Router>
    <div className="App">
      <Switch>
      <Route exact path="/" component={() => (
            <div>
               <Title />
               <InputForm onInsert={handleInsert} />   {/* InputForm.jsxでフォーム送信された時にonInsertに渡された関数handleInsertが呼び出される */}
               <DB data={data} />      
            </div>
      )} />
      <Route path="/login" component = {Login} />
      </Switch>
     </div>
    </Router>
  );
}





export default App;
