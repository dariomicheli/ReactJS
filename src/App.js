import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Cart from './components/Cart/Cart';
import CartProvider from './context/CartContext';


function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Hola Mundo!'/>} />
          <Route path='/categoria/:id' element={<ItemListContainer greeting='Hola Mundo!'/>} />
          <Route path='/item/:id' element={<ItemDetailContainer />} /> 
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </CartProvider> 
      <Footer />       
    </BrowserRouter>
  );
}

export default App;
