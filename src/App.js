import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

/* const App = () =>{
  return(
    <h1>Holis</h1>
  );
} */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hola Mundo!</p>
      </header>
      <NavBar />
    </div>
  );
}

export default App;
