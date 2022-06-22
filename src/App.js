import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <>
      <header>
        <NavBar />
        <ItemListContainer greeting='Hola Mundo!'/>
      </header>
      <main></main>
      <footer></footer>
      
    </>
  );
}

export default App;
