import React from 'react';
import '../assets/css/estandar.css';

const User =require('../assets/img/user.png')

const Pestandar = () => {
    return (
        <div>
            
            <div id="main">

            
            <div id="about" className="about">
                <div className="container" data-aos="fade-up">
            <br/>
                <div className="section-title">
                    <h2>A cerca de mi</h2>
                    <br/>
                    <p><div className="col-sm-10">
                    <textarea className="form-control form-control-lg" aria-label="With textarea" placeholder="Nombres y Apellidos"></textarea>
                    </div></p>
                </div>

                <div className="row">
                    <div className="col-lg-4">
                    <img classNameName="card-img-top" src='../assets/img/testimonials/testimonials-4.jpg' alt="Card image cap"/>
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content">
                    <h3>Profesión</h3>
                    <p className="font-italic">
                        <div className="input-group">
                        <textarea className="form-control" aria-label="With textarea"></textarea>
                        </div>
                    </p>
                    <div className="row">
                        <div className="col-lg-6">
                        <ul>
                            <li><i className="icofont-rounded-right"></i> <strong>Fecha de nacimiento:</strong> 
                            <div className="input-group">
                            <textarea className="form-control" aria-label="With textarea"></textarea>
                            </div></li>
                            
                            
                            <li><i className="icofont-rounded-right"></i> <strong>Ciudad de residencia:</strong> <div className="input-group">
                            <textarea className="form-control" aria-label="With textarea"></textarea>
                            </div></li>
                        </ul>
                        </div>
                        <div className="col-lg-6">
                        <ul>
                            <li><i className="icofont-rounded-right"></i> <strong>Edad:</strong> <div className="input-group">
                            <textarea className="form-control" aria-label="With textarea"></textarea>
                            </div></li>
                            <li><i className="icofont-rounded-right"></i> <strong>Nacionalidad:</strong> <div className="input-group">
                            <textarea className="form-control" aria-label="With textarea"></textarea>
                            </div></li>
                        
                            
                        </ul>
                        </div>
                    </div>
                    
                    </div>
                </div>

                </div>
            </div>

            
            <div id="facts" className="facts">
                <div className="container" data-aos="fade-up">
                <br/>
                <br/>
                <div className="section-title">
                    <h2>Logros</h2>
                    <br/>
                    <h4>Resultados obtenidos en los trabajos realizados</h4>
                </div>

                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                    <div className="card h-100">
                        
                        <div className="card-body">
                        <h5 className="card-title"><div className="input-group">
                            <textarea className="form-control" aria-label="With textarea"></textarea>
                        </div></h5>
                        
                        </div>
                        
                    </div>
                    </div>
                    <div className="col">
                    <div className="card h-100">
                        
                        <div className="card-body">
                        <h5 className="card-title"><div className="input-group">
                            <textarea className="form-control" aria-label="With textarea"></textarea>
                        </div></h5>
                        
                        </div>
                        
                    </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            
                            <div className="card-body">
                            <h5 className="card-title"><div className="input-group">
                                <textarea className="form-control" aria-label="With textarea"></textarea>
                            </div></h5>
                            
                            </div>
                            
                        </div>
                    </div>
                </div>

                </div>
            </div>

            <br/>
            <br/>
            <br/>
            <div id="skills" className="skills section-bg">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Habilidades</h2>
                        <br/>
                        <h4>Habilidades Blandas, cualidades deseables para ciertos trabajos e independientes del conocimiento adquirido</h4>
                    </div>
                    <div>
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                        
                            <div className="col-md-4">
                                <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                <option selected>Escoja una</option>
                                <option value="1">Emprendedor</option>
                                <option value="2">Innovador</option>
                                <option value="3">Planeación operativa</option>
                                <option value="1">Analítico</option>
                                </select>
                            </div>

                            <div className="col-md-4">
                                <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                <option selected>Escoja una</option>
                                <option value="1">Conservador</option>
                                <option value="2">Persistente</option>
                                <option value="3">Agente de cambio</option>
                                <option value="2">Productivo</option>
                                
                                </select>
                            </div>

                            <div className="col-md-4">
                                <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                <option selected>Escoja una</option>
                                <option value="1">Democrático</option>
                                <option value="2">Empático</option>
                                <option value="3">Pragmático</option>
                                <option value="1">Minimiza el riesgo</option>
                                
                                </select>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="row row-cols-1 row-cols-md-3 g-4">

                            <div className="col-md-4">
                                <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                <option selected>Escoja una</option>
                                <option value="1">Detallista</option>
                                <option value="2">Creativo</option>
                                <option value="3">Financiero</option>
                                <option value="1">Competitivo</option>
                                
                                </select>
                            </div>

                        
                            <div className="col-md-4">
                                <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                <option selected>Escoja una</option>
                                <option value="1">Arriesgado</option>
                                <option value="2">Diplomático</option>
                                <option value="3">Alto nivel de precisión </option>
                                <option value="1">Cuantitativo</option>
                                
                                </select>
                            </div>

                            <div className="col-md-4">
                                <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                <option selected>Escoja una</option>
                                <option value="1">Convencional </option>
                                <option value="2">Sistémico </option>
                                <option value="3">Entusiasta </option>
                                <option value="1">Trabajador independiente</option>
                                
                                </select>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="row row-cols-1 row-cols-md-3 g-4">

                        <div className="col-md-4">
                            <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>Escoja una</option>
                            <option value="1">Influyente</option>
                            <option value="2">Ordenado</option>
                            <option value="3">Orientado a resultados</option>
                            <option value="1">Resolución de problemas</option>
                            
                            </select>
                        </div>

                        <div className="col-md-4">
                            <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>Escoja una</option>
                            <option value="1">Creativo</option>
                            <option value="2">Inspira a los demás</option>
                            <option value="3">Lógico </option>
                            <option value="1">Líder nato</option>
                            
                            </select>
                        </div>

                        <div className="col-md-4">
                            <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>Escoja una</option>
                            <option value="1">Dinámico </option>
                            <option value="2">Hace amigos con facilidad</option>
                            <option value="3">Fiel y leal</option>
                            <option value="1">De buen humor</option>
                            
                            </select>
                        </div>
                        </div>
                    </div>

                    <div>
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            <div className="col-md-4">
                                <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                <option selected>Escoja una</option>
                                <option value="1">Espontáneo</option>
                                <option value="2">Termina lo que inicia</option>
                                <option value="3">Estable</option>
                                <option value="1">Organiza el equipo</option>
                                
                                </select>
                            </div>

                            <div className="col-md-4">
                                <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                <option selected>Escoja una</option>
                                <option value="1">Rendimiento</option>
                                <option value="2">Optimista</option>
                                <option value="3">Receptivo</option>
                                <option value="1">Metódico</option>
                                
                                </select>
                            </div>

                            <div className="col-md-4">
                                <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                <option selected>Escoja una</option>
                                <option value="1">Perfeccionista</option>
                                <option value="2">Productivo</option>
                                <option value="3">Conciliador</option>
                                <option value="1">Sociable</option>
                                
                                </select>
                            </div>
                        </div>
                    
                    </div>

                    <div>
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            <div className="col-md-4">
                                <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                    <option selected>Escoja una</option>
                                    <option value="1">Visionario</option>
                                    <option value="2">Autocontrol</option>
                                    <option value="3">Planificador</option>
                                    <option value="1">Verificador</option>
                                    
                                </select>
                            </div>

                            <div className="col-md-4">
                                <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                    <option selected>Escoja una</option>
                                    <option value="1">Mediador</option>
                                    <option value="2">Capacidad de gestión</option>
                                    <option value="3">Investigativo</option>
                                    <option value="1">Ecuánime </option>
                                    
                                </select>
                            </div>

                            <div className="col-md-4">
                                <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                    <option selected>Escoja una</option>
                                    <option value="1">Decididos </option>
                                    <option value="2">Motivador</option>
                                    <option value="3">Discreto</option>
                                    <option value="1">Riguroso </option>
                                    
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <br/><br/>
            
            <div id="resume" className="resume">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Curriculo</h2>
                        
                    </div>

                        <div className="row g-3">
                            <div className="col-lg-12">
                            <h3 className="resume-title">Experiencia Professional</h3>
                            <div className="resume-item">
                                <h4>Cargo</h4>
                                <li><div className="input-group">
                                <textarea className="form-control" aria-label="With textarea"></textarea>
                                </div></li>
                                <p><em>Funciones desempeñadas </em></p>
                                <ul>
                                    <li><div className="input-group">
                                        <textarea className="form-control" aria-label="With textarea"></textarea>
                                    </div></li>
                                    <li><div className="input-group">
                                        <textarea className="form-control" aria-label="With textarea"></textarea>
                                    </div></li>
                                    <li><div className="input-group">
                                        <textarea className="form-control" aria-label="With textarea"></textarea>
                                    </div></li>
                                </ul>
                                <p><em>Fecha de inicio y terminación </em></p>
                                <ul>
                                    <li><div className="input-group">
                                        <textarea className="form-control" aria-label="With textarea"></textarea>
                                    </div></li>
                                </ul>
                            </div>
                            <div className="resume-item">
                                <h4>Cargo</h4>
                                <li><div className="input-group">
                                <textarea className="form-control" aria-label="With textarea"></textarea>
                                </div></li>
                                <p><em>Funciones desempeñadas </em></p>
                                <ul>
                                    <li><div className="input-group">
                                        <textarea className="form-control" aria-label="With textarea"></textarea>
                                    </div></li>
                                    <li><div className="input-group">
                                        <textarea className="form-control" aria-label="With textarea"></textarea>
                                    </div></li>
                                    <li><div className="input-group">
                                        <textarea className="form-control" aria-label="With textarea"></textarea>
                                    </div></li>
                                </ul>
                                <p><em>Fecha de inicio y terminación </em></p>
                                <ul>
                                    <li><div className="input-group">
                                        <textarea className="form-control" aria-label="With textarea"></textarea>
                                    </div></li>
                                </ul>
                            </div>
                            <div className="resume-item">
                                <h4>Cargo</h4>
                                <li><div className="input-group">
                                <textarea className="form-control" aria-label="With textarea"></textarea>
                                </div></li>
                                <p><em>Funciones desempeñadas </em></p>
                                <ul>
                                    <li><div className="input-group">
                                        <textarea className="form-control" aria-label="With textarea"></textarea>
                                    </div></li>
                                    <li><div className="input-group">
                                        <textarea className="form-control" aria-label="With textarea"></textarea>
                                    </div></li>
                                    <li><div className="input-group">
                                        <textarea className="form-control" aria-label="With textarea"></textarea>
                                    </div></li>
                                </ul>
                                <p><em>Fecha de inicio y terminación </em></p>
                                <ul>
                                    <li><div className="input-group">
                                        <textarea className="form-control" aria-label="With textarea"></textarea>
                                    </div></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br/>
            <br/>

            <div id="portfolio" className="portfolio section-bg">
                <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Estudios</h2>
                    <p></p>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                    <div className="card h-100">
                        
                        <div className="card-body">
                        <h5 className="card-title">Estudios</h5>
                        <p className="card-text"><div className="input-group">
                            <textarea className="form-control" aria-label="With textarea"></textarea>
                        </div></p>
                        <p className="card-text"><div className="input-group">
                            <textarea className="form-control" aria-label="With textarea"></textarea>
                        </div></p>
                        </div>
                        
                    </div>
                    </div>
                    <div className="col">
                    <div className="card h-100">
                        
                        <div className="card-body">
                        <h5 className="card-title">Idiomas</h5>
                        <p className="card-text"><div className="input-group">
                            <textarea className="form-control" aria-label="With textarea"></textarea>
                        </div></p>
                        <p className="card-text"><div className="input-group">
                            <textarea className="form-control" aria-label="With textarea"></textarea>
                        </div></p>
                        </div>
                        
                    </div>
                    </div>
                    <div className="col">
                    <div className="card h-100">
                        
                        <div className="card-body">
                        <h5 className="card-title">Cursos y talleres</h5>
                        <p className="card-text"><div className="input-group">
                            <textarea className="form-control" aria-label="With textarea"></textarea>
                        </div></p>
                        <p className="card-text"><div className="input-group">
                            <textarea className="form-control" aria-label="With textarea"></textarea>
                        </div></p>
                        </div>
                        
                    </div>
                    </div>
                </div>

                

                </div>
            </div>

            <br/>
            <br/>

            <div id="services" className="services">
                <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Servicios</h2>
                    
                </div>

                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                    <div className="card h-100">
                        
                        <div className="card-body">
                        <h5 className="card-title"><div className="input-group">
                            <textarea className="form-control" aria-label="With textarea"></textarea>
                        </div></h5>
                        
                        </div>
                        
                    </div>
                    </div>
                    <div className="col">
                    <div className="card h-100">
                        
                        <div className="card-body">
                        <h5 className="card-title"><div className="input-group">
                            <textarea className="form-control" aria-label="With textarea"></textarea>
                        </div></h5>
                        
                        </div>
                        
                    </div>
                    </div>
                    <div className="col">
                    <div className="card h-100">
                        
                        <div className="card-body">
                        <h5 className="card-title"><div className="input-group">
                            <textarea className="form-control" aria-label="With textarea"></textarea>
                        </div></h5>
                        
                        </div>
                        
                    </div>
                    </div>
                </div>

                </div>
            </div>

            

            <br/>
            <br/>

            <div id="contact" className="contact">
                <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Contacto</h2>
                </div>

                <div className="row row-cols-1 row-cols-md-3 g-4">

                    <div className="col-lg-12">
                    <div className="info">
                        <div className="address">
                        <i className="icofont-google-map"></i>
                        <h4>Dirección  de residencia</h4>
                        <p><div className="input-group">
                            <textarea className="form-control" aria-label="With textarea"></textarea>
                        </div></p>
                        </div>

                        <div className="email">
                        <i className="icofont-envelope"></i>
                        <h4>Correo Electrónico</h4>
                        <p><div className="input-group">
                            <textarea className="form-control" aria-label="With textarea"></textarea>
                        </div></p>
                        </div>

                        <div className="phone">
                        <i className="icofont-phone"></i>
                        <h4>Teléfono de contacto</h4>
                        <p><div className="input-group">
                            <textarea className="form-control" aria-label="With textarea"></textarea>
                        </div></p>
                        </div>

                    </div>

                    </div>

                    <br/>
                    <br/>

                    <div className="text-center"><button type="submit" className="btn btn-dark">Guardar</button></div>
                    <br/>
                    <br/>

                </div>

                </div>
            </div>

            </div>
        </div>
    );
}

export default Pestandar;