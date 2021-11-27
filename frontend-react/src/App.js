import React from 'react';
import Portada from './components/Portada';
import Dsesion from './components/Dsesion';
import Ecuenta from './components/Ecuenta';
import Fcontacto from './components/Fcontacto';
import Pestandar from  './components/Pestandar';
import Xcambiar from './components/Xcambiar';
import Xrecuperar from './components/Xrecuperar';
import Ucliente from './components/Ucliente';
import Uadmin from './components/Uadmin';
import logo from './assets/img/Haz.png';
import Politicas from './components/Politicas';
import Portafolios from './components/Portafolios';
import Peditestandar from './components/Peditestandar';
import './assets/css/indexMau.css';
import { Nosotros } from './components/Nosotros'
import Verestandar from './components/Verestandar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  // NavLink
} from "react-router-dom";






function App() {
  return (
    <Router>
      <div classNameName="container mt-5">
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary flex-column align-items-stretch">
          <div className="d-flex">
            <a className="navbar-brand mx-sm-auto mr-auto" href="/portada" >
              {/* <img className="img-fluid" src={logo} alt="Logo" /> */}
            </a>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse w-100 sticky-top" id="navbarMenu">
          <Link className="navbar-brand" to="/portada"><img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/></Link>
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/portada">Portada</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/portafolios">Portafolios</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/nosotros">Nosotros</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contacto">Contacto</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cliente">Cliente</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/administrador">Admin</Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/sesion">Iniciar Sesión</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/registro-usuario">Registrar Cuenta</Link>
              </li>
            </ul>
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
        {/* <Route path="/crear-portafolio" exact>
          <PestandarV3 />
        </Route> */}
        <Route path="/crear-portafolio" exact>
          <Pestandar />
        </Route>
        <Route path="/registro-usuario" exact>
          <Ecuenta />
        </Route>
        <Route path="/contacto" exact>
          <Fcontacto/>
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

        <Route path="/politicas" exact>
          <Politicas/>
        </Route>
      
        <Route path="/editar-portafolio/:id" component={Peditestandar} />

        <Route path="/ver-portafolio/:id" component={Verestandar} />
      </Switch>
      </div>

    </Router>

    
  );
}

export default App;