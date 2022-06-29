import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <>
      <header>
        <NavBar /> 
      </header>
      <main>
        <div className='main-container'>
          <ItemListContainer greeting='Hola Mundo!'/>
          <ItemDetailContainer />
        </div>
      </main>
      <footer>
        <Footer />        
      </footer>
      
    </>
  );
}

export default App;
