import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <>
      <header>
        <NavBar /> 
      </header>
      <main>
        <div className='main-container'>
          <ItemListContainer greeting='Hola Mundo!'/>
        </div>
      </main>
      <footer></footer>
      
    </>
  );
}

export default App;
