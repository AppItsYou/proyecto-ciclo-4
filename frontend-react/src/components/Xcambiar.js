import React from 'react';
import { useState } from 'react';
import Axios from 'axios';
import '../assets/css/style.css';

export default function Xcambiar() {
    
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
                        <div class="btn-toolbar">
                            <div class="btn-group me-2">
                            <a href="./cliente.html" className="btn btn-dark"> Cambiar</a>
                            <br/>

                            </div>
                        
                            <a href="./cliente.html" className="btn btn-dark"> Volver</a>

                        </div>
                        <br/>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}





// const Dsesion = () => {
//     return (
//         <div id="services" className="services">
//             <div className="container" style={{width: "500px"}}>
//             <br/>
//             <br/>
//                 <div className="section-title">
//                     <h2>Cambiar contraseña</h2>
                    
//                     <form action="forms/contact.php" method="post" role="form" className="php-email-form mt-4">
//                         <div className="form-row">
//                         <br/>
//                             <div className="form-group">
//                             <h4>Digite un nuevo password</h4>
//                             <br/>
//                                 <input type="email" className="form-control" name="email" id="email" placeholder="Contraseña" data-rule="email" data-msg="Please enter a valid email" />
//                                 <div className="validate"></div>
//                             </div>
//                             <br/>
//                             <div className="form-group">
//                             <h4>Repita el nuevo password</h4>
//                             <br/>
//                                 <input type="email" className="form-control" name="email" id="email" placeholder="Contraseña" data-rule="email" data-msg="Please enter a valid email" />
//                                 <div className="validate"></div>
//                             </div>
//                         </div>
//                         <br/>
//                         <div class="btn-toolbar">
//                             <div class="btn-group me-2">
//                             <a href="./cliente.html" className="btn btn-dark"> Cambiar</a>
//                             <br/>

//                             </div>
                        
//                             <a href="./cliente.html" className="btn btn-dark"> Volver</a>

//                         </div>
//                         <br/>
                        
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Dsesion;