import React from 'react';
import Portada  from './components/Portada';
import Dsesion from './components/Dsesion';
import Ecuenta from './components/Ecuenta';
import Fcontacto from './components/Fcontacto';
import Pestandar from  './components/Pestandar';
import Xcambiar from './components/Xcambiar';
import Xrecuperar from './components/Xrecuperar';
import Ucliente from './components/Ucliente';
import Uadmin from './components/Uadmin';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
 // NavLink
} from "react-router-dom";

import { Nosotros } from './components/Nosotros';
import { Portafolios } from './components/Portafolios';



function App() {
  return (
    <Router>
    <div className="container mt-5">
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                  {/* <Link className="navbar-brand" to="/portada"><img src="%PUBLIC_URL%/favicon.ico" alt="" width="30" height="24" className="d-inline-block align-text-top"/>it's You</Link>
                  <Link className="navbar-brand" to="/portada"><img src="../public/assets/img/testimonials/LogoItsYou.jpeg" alt="" width="30" height="24" className="d-inline-block align-text-top"/></Link> */}
                  
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/portada">Portada</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/portafolios">Portafolios</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/nosotros">Nosotros</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/sesion">Iniciar Sesión</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/registro-usuario"> Registrar Cuenta</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/contacto">Contacto</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/estandar">Portafolio Estandar</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/cambiar">Cambiar contraseña</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/recuperar">Recuperar contraseaña</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/cliente">Cliente</Link></li>
                      <li className="nav-item"><Link className="nav-link" to="/administrador">Administrador</Link></li>
                                
                  </ul>
              </div>
          </div>
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
          <Dsesion />
        </Route>

        <Route path="/registro-usuario" exact>
          <Ecuenta />
        </Route>
        <Route path="/contacto" exact>
          <Fcontacto/>
        </Route>

        <Route path="/estandar" exact>
          <Pestandar/>
        </Route>

        <Route path="/cambiar" exact>
          <Xcambiar/>
        </Route>

        <Route path="/recuperar" exact>
          <Xrecuperar/>
        </Route>

        <Route path="/cliente" exact>
          <Ucliente/>
        </Route>

        <Route path="/administrador" exact>
          <Uadmin/>
        </Route>
      
      </Switch>
    </div>
    
  </Router>
  );
}

export default App;
