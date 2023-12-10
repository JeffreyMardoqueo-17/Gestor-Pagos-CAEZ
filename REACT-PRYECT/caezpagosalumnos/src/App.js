import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import { Route, Router,Routes  } from 'react-router';

function App() {
  return (
    <div className="contenedor">
      <Router>
        <Routes>
          <Route path='/' element={Home}></Route>
        </Routes>
      </Router>
      <div className='head'>
        <h2>Buscador</h2>
      </div>
      <div className='Contenido'>
        <Home></Home>
      </div>
    </div>
    //PARTE DONDE ESTARA TODAS LAS PAGINAS DE ADENTRO
  );
}

export default App;
