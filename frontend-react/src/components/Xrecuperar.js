import React from 'react';
import '../assets/css/style.css';

const Dsesion = () => {
    return (
        <div id="services" className="services">
            <div className="container" style={{width: "500px"}}>
            <br/>
            <br/>
                <div className="section-title">
                    <h2>Recuperar Password</h2>
                    
                    <form action="forms/contact.php" method="post" role="form" className="php-email-form mt-4">
                        <div className="form-row">
                        <br/>
                            <div className="form-group">
                                <h4>Email Registrado</h4>
                                <br/>
                                <input type="text" name="name" className="form-control" id="name" placeholder="Ingrese su email registrado en itsYou" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                <div className="validate"></div>
                            </div>
                            <br/>
                            
                        </div>
                        <br/>
                        <a href="./cliente.html" className="btn btn-dark"> Enviar</a>
                        <br/>
                        <br/>
                        
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Dsesion;