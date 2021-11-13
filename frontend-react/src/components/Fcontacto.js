import React from 'react';
import '../assets/css/style.css';

const Fcontacto = () => {
    return (
        <div id="contact" className="contact">
            <div className="container" style={{width: "500px"}}>
            <br/>
            <br/>
                <div className="section-title">
                    <h2>Contacto</h2>
                    <h4>Canales de contacto</h4>
                </div>
                <div className="row mt-2">
                    <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
                        
                    </div>
                    <div className="row mt-2">
                        <div className="info-box">
                        <i className="bx bx-envelope"></i>
                        <h3>Correo Electrónico</h3>
                        <p>appitsyou@gmail.com</p>
                        </div>
                    </div>
                </div>
                <form action="forms/contact.php" method="post" role="form" className="php-email-form mt-4">
                    <div className="form-row">
                        <div className="form-group">
                            <input type="text" name="name" className="form-control" id="name" placeholder="Nombre" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                            <div className="validate"></div>
                        </div>
                        <br/>
                        <div className="form-group">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Correo electrónico" data-rule="email" data-msg="Please enter a valid email" />
                            <div className="validate"></div>
                        </div>
                        
                    </div>
                    <br/>
                    <div className="form-group">
                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Asunto" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                        <div className="validate"></div>
                    </div>
                    <br/>
                    <div className="form-group">
                        <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Mensaje"></textarea>
                        <div className="validate"></div>
                    </div>
                    
                    <div className="mb-3">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">Your message has been sent. Thank you!</div>
                    </div>
                    
                    
                </form>
                <div className="text-center"><button type="submit" className="btn btn-dark">Enviar</button></div>
            </div>
        </div>
    );
}

export default Fcontacto;






