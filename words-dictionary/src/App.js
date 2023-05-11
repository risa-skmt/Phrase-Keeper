import './App.css';
import Title  from "./components/Title";
import InputForm from './components/InputForm';
import WordsList from './components/WordsList';
import { useState } from 'react';

function App() {
// wordListの変数で入力された文字を入れる。状態を管理する。配列を用意
//setWordListは状態を変更するための変数
      const [wordList, setWordList] = useState();


  return (
    <div className="body">
      <Title />
      <InputForm wordList={wordList} setWordList={setWordList}/>
      <WordsList />
    </div>
  );
}

export default App;
