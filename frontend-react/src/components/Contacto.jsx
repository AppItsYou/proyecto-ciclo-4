
import React,{Fragment} from 'react';


export const Contacto = () => {
    return (
<Fragment>

<div className="container">

<div class="section-title">
  <h2>Contacto</h2>
  <p>Canales de contacto</p>
</div>

<div className="row mt-2">

  
  <div class="col-md-6 mt-4 d-flex align-items-stretch">
    <div className="info-box">
      <i className="bx bx-envelope"></i>
      <h3>Correo Electrónico</h3>
      <h3>appitsyou@gmail.com</h3>
       <div v-if="esGuardado" className="alert alert-success" role="alert">
        
</div>
    </div>
  </div>
  
</div>

<form   className="php-email-form mt-4">
  <div className="form-row">
    <div className="col-md-6 form-group">
      <input type="text"  className="form-control" 
       placeholder="Nombre" data-rule="minlen:4" 
       data-msg="Please enter at least 4 chars" 
      /*  v-model="informacion.name" */ />
      <div className="validate"></div>
    </div>
    <br/>
    <div className="col-md-6 form-group">
      <input type="email" className="form-control" placeholder="Correo electrónico"
       data-rule="email" data-msg="Please enter a valid email"
        />
      <div className="validate"></div>
    </div>
  </div>
  <br/>
  <div className="form-group">
    <input type="text" className="form-control"  /* v-model="informacion.subject"  */
    placeholder="Asunto" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
    <div className="validate"></div>
  </div>
  <br/>
  <div className="form-group">
    <textarea className="form-control" /* v-model="informacion.message" */ 
    rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Mensaje"></textarea>
    <div className="validate"></div>
  </div>
  <br/>
  <br/>
 <div className="form-group">
    <button className="btn btn-primary">Enviar</button></div>
</form>

</div>
        </Fragment>
    )
}

export default Contacto;
