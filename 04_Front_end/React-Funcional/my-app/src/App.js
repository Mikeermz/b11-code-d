import logo from './logo.svg';
import './App.css';
import Test from './components/test';
import Form from './components/form';
import Side from './components/side';
import Repeat from './components/RepeatMessage';
import Fetch from './components/fetch';

function App() {
  return (
    <div className="App">
      <Side name="Norma" />
      <Side name="Alvaro" />
      <Side name="Celina" />
      <Side name="Celina" />
       <Fetch />
      
    </div>
  );
}

export default App;
