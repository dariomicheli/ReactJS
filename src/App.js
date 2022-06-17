import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>
      <header>
        <NavBar />
        <ItemListContainer greeting='Hola Mundo!'/>
      </header>
      <main>
        <h1>Las ofertas de la Semana</h1>
      </main>
      <footer></footer>
      
    </>
  );
}

export default App;
