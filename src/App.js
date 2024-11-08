
import './App.css';
import { ForditContext } from './context/forditContext';
import { useContext } from 'react';
import Kepek from './components/Kepek';

function App() {
  const {allapotLista} =useContext(ForditContext)
  
  return (
    <div className="App">
      <header className="App-header">
       <h3>Memory Game</h3>
      </header>
      <article>
      <div className="jatekter">
          <Kepek lista={allapotLista}/>
        </div>
      </article>
    </div>
  );
}

export default App;
