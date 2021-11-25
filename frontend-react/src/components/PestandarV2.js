import React from 'react';
import { useState } from 'react';
import Axios from 'axios';
import '../assets/css/estandar.css';

const User =require('../assets/img/user.png')

export default function Ejemplo() {
    const [name, setName]=useState('')
    const [lema, setLema]=useState('')
    const [servicio, setServicio]=useState('')
    const [habilidad, setHabilidad]=useState('')
    const [logro, setLogro]=useState('')
    const [email, setEmail]=useState('')
    const [phone, setPhone]=useState('')

    const crearPortafolio=async(e)=>{
        e.preventDefault()
        const NuevoPortafolio={name,lema,servicio,habilidad,logro,email,phone}
        const respuesta=await Axios.post('https://perfiles-mintic.herokuapp.com/api/create-portafolio',NuevoPortafolio)
        console.log(respuesta)
    }

    return (
        <div class="row justify-content-center">
            <div class="col-md-6">
            <br/>
                <div className="section-title">
                    <h2>Portafolio</h2>
                    
                    
                </div>
                <div className="col-lg-4">
                    <img className="card-img-top" src='../assets/img/testimonials/testimonials-4.jpg' alt="Card image cap"/>
                    </div>
                    <br/>
                {/* <h3 class="text-center">Formulario del Portafolio</h3> */}
                <form onSubmit={crearPortafolio}>
                        <div className="form-group">
                            <label>Nombre</label>
                            <input
                            type="text"
                            className="form-control"
                            // v-model="portafolio.name"
                            required
                            onChange={e=>setName(e.target.value)}
                            />
                        </div>
                    <br/>

                        <div className="form-group">
                            <label>Lema de vida</label>
                            <input
                            type="text"
                            className="form-control"
                            // v-model="portafolio.lema"
                            required
                            onChange={e=>setLema(e.target.value)}
                            />
                        </div>

                    <br/>
                    <div className="container" data-aos="zoom-in" data-aos-delay="100">
                        
                        
                        <div className="card-group">
                        <div className="card">
                            <div className="card-body">
                            <h5 className="card-title">Servicios a ofrecer</h5>
                            <p className="card-text"><input
                                type="text"
                                className="form-control"
                                // v-model="portafolio.servicio"
                                required
                                onChange={e=>setServicio(e.target.value)}
                                /></p>
                            
                            </div>
                        </div>
                        <div className="card">
                            
                            <div className="card-body">
                            <h5 className="card-title">Habilidades blandas</h5>
                            <p className="card-text"><input
                                type="text"
                                className="form-control"
                                // v-model="portafolio.habilidad"
                                required
                                onChange={e=>setHabilidad(e.target.value)}
                                /></p>
                            
                            </div>
                        </div>
                        <div className="card">
                            
                            <div className="card-body">
                            <h5 className="card-title">Logros obtenidos</h5>
                            <p className="card-text"><input
                                type="text"
                                class="form-control"
                                // v-model="portafolio.logro"
                                required
                                onChange={e=>setLogro(e.target.value)}
                                /></p>
                            
                            </div>
                        </div>
                        </div>
                    </div>
                    <br/>

                    <div className="container">
                        <h5>Contacto: </h5>
                        <label>Correo electronico</label>
                        <input
                        type="email"
                        class="form-control"
                        v-model="portafolio.email"
                        required
                        onChange={e=>setEmail(e.target.value)}
                        />
                        <br/>
                        <label>Celular</label>
                        <input
                        type="text"
                        class="form-control"
                        // v-model="portafolio.phone"
                        required
                        onChange={e=>setPhone(e.target.value)}
                        />
                    </div>

                    <br/>

                    <div class="nav-menu">
                        <button class="btn btn-primary" onClick={crearPortafolio}>Guardar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}




// const Pestandar = () => {
//     const [name, setName]=useState('')
//     const [lema, setLema]=useState('')
//     const [servicio, setServicio]=useState('')
//     const [habilidad, setHabilidad]=useState('')
//     const [logro, setLogro]=useState('')
//     const [email, setEmail]=useState('')
//     const [phone, setPhone]=useState('')
    
//     return (
//         <div class="row justify-content-center">
//             <div class="col-md-6">
//             <br/>
//                 <div className="section-title">
//                     <h2>Portafolio</h2>
                    
                    
//                 </div>
//                 <div className="col-lg-4">
//                     <img className="card-img-top" src='../assets/img/testimonials/testimonials-4.jpg' alt="Card image cap"/>
//                     </div>
//                     <br/>
//                 {/* <h3 class="text-center">Formulario del Portafolio</h3> */}
//                 <form >
//                         <div className="form-group">
//                             <label>Nombre</label>
//                             <input
//                             type="text"
//                             className="form-control"
//                             // v-model="portafolio.name"
//                             required
//                             />
//                         </div>
//                     <br/>

//                         <div className="form-group">
//                             <label>Lema de vida</label>
//                             <input
//                             type="text"
//                             className="form-control"
//                             // v-model="portafolio.lema"
//                             required
//                             />
//                         </div>

//                     <br/>
//                     <div className="container" data-aos="zoom-in" data-aos-delay="100">
                        
                        
//                         <div className="card-group">
//                         <div className="card">
//                             <div className="card-body">
//                             <h5 className="card-title">Servicios a ofrecer</h5>
//                             <p className="card-text"><input
//                                 type="text"
//                                 className="form-control"
//                                 // v-model="portafolio.servicio"
//                                 required
//                                 /></p>
                            
//                             </div>
//                         </div>
//                         <div className="card">
                            
//                             <div className="card-body">
//                             <h5 className="card-title">Habilidades blandas</h5>
//                             <p className="card-text"><input
//                                 type="text"
//                                 className="form-control"
//                                 // v-model="portafolio.habilidad"
//                                 required
//                                 /></p>
                            
//                             </div>
//                         </div>
//                         <div className="card">
                            
//                             <div className="card-body">
//                             <h5 className="card-title">Logros obtenidos</h5>
//                             <p className="card-text"><input
//                                 type="text"
//                                 class="form-control"
//                                 // v-model="portafolio.logro"
//                                 required
//                                 /></p>
                            
//                             </div>
//                         </div>
//                         </div>
//                     </div>
//                     <br/>

//                     <div className="container">
//                         <h5>Contacto: </h5>
//                         <label>Correo electronico</label>
//                         <input
//                         type="email"
//                         class="form-control"
//                         v-model="portafolio.email"
//                         required
//                         />
//                         <br/>
//                         <label>Celular</label>
//                         <input
//                         type="text"
//                         class="form-control"
//                         // v-model="portafolio.phone"
//                         required
//                         />
//                     </div>

//                     <br/>

//                     <div class="nav-menu">
//                         <button class="btn btn-primary">Guardar</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Pestandar;