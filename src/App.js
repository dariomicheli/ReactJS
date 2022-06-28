import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';


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
      <footer>
        <Footer />        
      </footer>
      
    </>
  );
}

export default App;
