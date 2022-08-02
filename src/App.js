import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import CartContainer from './components/CartContainer/CartContainer';
import CartProvider from './context/CartContext';
import AuthProvider from './context/AuthContext';
import Checkout from './components/Checkout/Checkout';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';



function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AuthProvider>
          <NavBar />
          <main>
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/categoria/:id' element={<ItemListContainer />} />
              <Route path='/item/:id' element={<ItemDetailContainer />} /> 
              <Route path='/cart' element={<CartContainer />} />
              <Route path='/checkout' element={
                  <ProtectedRoute>
                    <Checkout />
                  </ProtectedRoute>
                } 
              />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </main>
        </AuthProvider>
      </CartProvider> 
      <footer>
        <Footer />
      </footer>       
    </BrowserRouter>
  );
}

export default App;
