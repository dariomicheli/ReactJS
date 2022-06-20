import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <>
      <header>
        <NavBar />
        <ItemListContainer greeting='Hola Mundo!'/>
      </header>
      <main>
        <h1>Las ofertas de la Semana</h1>
        <ItemCount stock="5" initial="1" onAdd={() => console.log("Se agrego")} />
      </main>
      <footer></footer>
      
    </>
  );
}

export default App;
