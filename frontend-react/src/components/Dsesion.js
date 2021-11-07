import React from 'react';
import '../assets/css/style.css';

const Dsesion = () => {
    return (
        <div id="services" className="services">
            <div className="container" style={{width: "500px"}}>
            <br/>
            <br/>
                <div className="section-title">
                    <h2>Iniciar sesión</h2>
                    <p>Usuario Registrado</p>
                    <form action="forms/contact.php" method="post" role="form" className="php-email-form mt-4">
                        <div className="form-row">
                            <div className="form-group">
                                <input type="text" name="name" className="form-control" id="name" placeholder="Ingrese su email registrado en itsYou" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                <div className="validate"></div>
                            </div>
                            <br/>
                            <div className="form-group">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Contraseña" data-rule="email" data-msg="Please enter a valid email" />
                                <div className="validate"></div>
                            </div>
                        </div>
                        <br/>
                        <a href="./cliente.html" className="btn btn-dark"> Entrar</a>
                        <br/>
                        <br/>
                        
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Dsesion;