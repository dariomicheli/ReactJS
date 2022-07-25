import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import CartContainer from './components/CartContainer/CartContainer';
import CartProvider from './context/CartContext';
import Checkout from './components/Checkout/Checkout';



function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <main>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting='Hola Mundo!'/>} />
            <Route path='/categoria/:id' element={<ItemListContainer greeting='Hola Mundo!'/>} />
            <Route path='/item/:id' element={<ItemDetailContainer />} /> 
            <Route path='/cart' element={<CartContainer />} />
            <Route path='/checkout' element={<Checkout /> } />
            <Route path='/*' element={<h1>404</h1>} />
          </Routes>
        </main>
      </CartProvider> 
      <footer>
        <Footer />
      </footer>       
    </BrowserRouter>
  );
}

export default App;
