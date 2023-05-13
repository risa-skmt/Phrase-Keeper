import './App.css';
import Title  from "./components/Title";
import InputForm from './components/InputForm';
import WordsList from './components/WordsList';
import { useState } from 'react';

function App() {
// phraseListの変数で入力された文字を入れる。状態を管理する。配列を用意
//setPhraseListは状態を変更するための変数 //型は配列にしておく
      const [phraseList, setPhraseList] = useState([]);


  return (
    <div className="body">
      <Title />
      <InputForm phraseList={phraseList} setPhraseList={setPhraseList}/>
      <WordsList phraseList={phraseList} setPhraseList={setPhraseList}/>
    </div>
  );
}

export default App;
