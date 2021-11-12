import React from 'react';
import '../assets/css/style.css';

const Dsesion = () => {
    return (
        <div id="services" className="services">
            <div className="container" style={{width: "500px"}}>
            <br/>
            <br/>
                <div className="section-title">
                    <h2>Cambiar contraseña</h2>
                    
                    <form action="forms/contact.php" method="post" role="form" className="php-email-form mt-4">
                        <div className="form-row">
                        <br/>
                            <div className="form-group">
                            <h4>Digite un nuevo password</h4>
                            <br/>
                                <input type="email" className="form-control" name="email" id="email" placeholder="Contraseña" data-rule="email" data-msg="Please enter a valid email" />
                                <div className="validate"></div>
                            </div>
                            <br/>
                            <div className="form-group">
                            <h4>Repita el nuevo password</h4>
                            <br/>
                                <input type="email" className="form-control" name="email" id="email" placeholder="Contraseña" data-rule="email" data-msg="Please enter a valid email" />
                                <div className="validate"></div>
                            </div>
                        </div>
                        <br/>
                        <a href="./cliente.html" className="btn btn-dark"> Cambiar</a>
                        <br/>
                        <br/>
                        
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Dsesion;