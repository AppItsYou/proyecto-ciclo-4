import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
   // NavLink
} from "react-router-dom";

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <Link className="navbar-brand" to="/portada"><img src="../assets/img/itsYouLogo1.png" alt="" width="30" height="24" className="d-inline-block align-text-top"/>it's You</Link>
                            <Link className="navbar-brand" to="/portada"><img src="../assets/img/itsYouMarca.jpg" alt="" width="30" height="24" className="d-inline-block align-text-top"/></Link>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/portada">Portada</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/portafolios">Portafolios</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/nosotros">Nosotros</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/sesion">Iniciar Sesión</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/registro-usuario"> Registrar Cuenta</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/contacto">Contacto</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar
