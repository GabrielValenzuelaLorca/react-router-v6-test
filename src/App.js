import './App.css';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Prueba from './Prueba';

function App() {
  return (
    <Router>
      <Link to="/prueba">Vamo a cachar</Link>
      <Routes>
        <Route path="/prueba" element={<Prueba/>}>
          <Route path=":hola" element={<Prueba/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
