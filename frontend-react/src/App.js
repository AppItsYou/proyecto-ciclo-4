import React from 'react';
import Contador from './components/Contador';
import Portada  from './components/Portada';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
 // NavLink
} from "react-router-dom";

import { Nosotros } from './components/Nosotros';
import { Portafolios } from './components/Portafolios';
import {Contacto } from './components/Contacto';

function App() {
  return (
    <Router>
    <div className="container mt-5">
      
       <nav className="nav-menu d-none d-lg-block">
        
        <ul>
          
          <li><Link to="/portada">Portada</Link></li>
          <li><Link to="/portafolios">Portafolios</Link></li>
          <li><Link to="/nosotros">Nosotros</Link></li>
          <li><Link to="/sesion">Iniciar Sesión</Link></li>
          <li><Link to="/registro-usuario"> Registrar Cuenta</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
          
        </ul>
      </nav>
      
      
      <hr />
      <Switch>
      <Route path="/" exact>
          <Portada />
        </Route>
        <Route path="/portada" exact>
          <Portada />
        </Route>
        <Route path="/portafolios" exact>
          <Portafolios />
        </Route>
        <Route path="/nosotros" exact>
          <Nosotros />
        </Route>
        <Route path="/sesion" exact>
          <Contador />
        </Route>

        <Route path="/registro-usuario" exact>
          <Contador />
        </Route>
        <Route path="/contacto" exact>
          <Contacto/>
        </Route>
      
      </Switch>
    </div>
  </Router>
  );
}

export default App;
