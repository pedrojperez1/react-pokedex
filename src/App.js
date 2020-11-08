import pokemon from './pokemon';
import Pokedex from './Pokedex';
import './App.css'

function App() {
  return (
    <>
    <h3 className="App-header">Pokedex</h3>
    <Pokedex pokemon={pokemon} />
    </>
  );
}

export default App;
