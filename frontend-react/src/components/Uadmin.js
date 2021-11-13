import React from 'react';
import '../assets/css/cliente.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
   // NavLink
} from "react-router-dom";

const Adminis =require('../assets/img/userAdmi.png')

const Uadmin = () => {
    return (
        <div class="d-flex justify-content-center">
            <p class="text-center">
            <div class="col-sm-9">
            <div class="card text-center">
            <img classNameName="card-img-top" src='../assets/img/testimonials/testimonials-1.jpg' alt="Card image cap"/>
                    <div classNameName="card-body">
                        <br/>
                        <h5 classNameName="card-title">Matt Brandon</h5>
                        <br/>
                        <h5 classNameName="card-title">Administrador</h5>
                        <br/>
                        <p classNameName="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <br/>
                        <button type="button" class="btn btn-dark">Cambiar contraseña</button>
                        <br/>
                        <br/>
                    </div>
                    
                
            </div>
            
            <div classNameName="table-responsive-md">
                <table classNameName="table-secondary">
                    <thead>
                        <tr>
                            <th colspan="3">Portafolios Creados</th>
                        </tr>
                        <tr>
                            <th>#</th>
                            <th colspan="2">Tipo de portafolio</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2</td>
                            <td>Estandar</td>
                            <td>
                            <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                <div class="btn-group me-2" role="group" aria-label="First group">
                                <button type="button" class="btn btn-dark">Ver</button>
                                </div>
                                <div class="btn-group me-2" role="group" aria-label="Second group">
                                <button type="button" class="btn btn-dark">Borrar</button>
                                </div>
                                <div class="btn-group" role="group" aria-label="Third group">
                                <button type="button" class="btn btn-dark">Autorizar</button>
                                </div>
                            </div>
                            
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
            </p>
            
        </div>
        
    );
}

export default Uadmin;