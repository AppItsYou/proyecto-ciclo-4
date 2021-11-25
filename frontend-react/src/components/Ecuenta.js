import React from 'react';
import '../assets/css/style.css';

const Ecuenta = () => {
    return (
        <div id="portfolio" className="portfolio">
            <div className="container" style={{width: "500px"}}>
            <br/>
            <br/>
                <div className="section-title">
                    <h2>Crear Cuenta</h2>
                    <h4>Ingresa tus datos</h4>
                </div>
                <div className="row mt-2">
                    <form action="forms/contact.php" method="post" role="form" className="php-email-form mt-4">
                        
                        <div className="form-group">
                                <input type="text" name="name" className="form-control" id="name" placeholder="Nombre" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                <div className="validate"></div>
                        </div>
                        <br/>
                        <div className="form-group">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Correo Electrónico" data-rule="email" data-msg="Please enter a valid email" />
                                <div className="validate"></div>
                        </div>
                        <br/>
                        <div className="form-group">
                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Contraseña" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                            <div className="validate"></div>
                        </div>
                        <br/>
                        <div className="text-center"><button type="submit" className="btn btn-dark">Guardar</button></div>
                    </form>
                    <br/>
                    <br/>
                    <div className="datos">
                    <br/>
                        <h4>
                        Política de tratamiento de datos
                        </h4>
                        <br/>
                        <p>Al crear su cuenta, está aceptando nuestra política de 
                        </p>
                        <p>tratamiendo de datos
                        </p>
                        <a href="http://">Ver Política de tratamiento de datos</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ecuenta;

