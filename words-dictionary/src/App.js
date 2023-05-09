import './App.css';
import Title  from "./components/Title";
import InputForm from './components/InputForm';
import WordsList from './components/WordsList';

function App() {
  return (
    <div className="body">
      <Title />
      <InputForm />
      <WordsList />
    </div>
  );
}

export default App;
