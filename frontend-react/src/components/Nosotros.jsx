import React,{Fragment} from 'react';

export const Nosotros = () => {
    return (
      <Fragment>
<div className="container">

<div className="section-title">
  <h2>Nosotros</h2>
  <p>Lo que nos representa</p>
</div>

<div className="row">
  <div className="card text-dark bg-light mb-3">
    <div className="card-header">
      <h3> <b>Visión</b> </h3>
    </div>
    <div className="card-body">
      <blockquote className="blockquote mb-0">
        <p>Ser la mejor plataforma web en la guía de  elaboración de portafolios de hoja de vida, en donde tus éxitos serán nuestros logros</p>
        
      </blockquote>
    </div>
  </div>
  <div className="card text-white bg-secondary mb-3">
    <div className="card-header">
      <h3> <b>Misión</b> </h3>
    </div>
    <div className="card-body">
      <blockquote className="blockquote mb-0">
        <p>It’s You, se conecta contigo para sacar la mejor versión de ti desde la web para el mundo.</p>
        
      </blockquote>
    </div>
  </div>

  <div className="card text-white bg-dark mb-3">
      <div className="card-header">
        <h3> <b>Lema</b> </h3>
      </div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p>Haz que las cosas sucedan, con it’s You</p>
          
        </blockquote>
      </div>
  </div>

  
      
    </div>
    
      
    
        
  </div>
  


 </Fragment>  
    );
}
