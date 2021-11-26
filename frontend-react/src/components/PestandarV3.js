import React, { useState, useRef } from 'react';
import axios from 'axios';
import '../assets/css/estandar.css';
import { Layout, Container, BoxUpload, ImagePreview } from "../assets/js/style";
import FolderIcon from "../assets/img/folder_icon_transparent.png";
import CloseIcon from "../assets/img/CloseIcon.svg";
import ruta from '../rutaAPI';
import { useHistory ,withRouter} from "react-router-dom";


const Pestandar = () => {
    /* history =useHistory(); */
    const [portafolio, setPortafolio] = useState({
        name: "name-prueba",
        lema: "lema-prueba",
        servicio:"servicio-prueba",
        habilidad: "habilidad-preba",
        logro: "logro-prueba",
        email: "email-prueba@gmail.com",
        phone: "2432423",
        estado:"CREADO"
      })

    const [image, setImage] = useState("");
    const [isUploaded, setIsUploaded] = useState(false);
    const [typeFile, setTypeFile] = useState("");
    const [imagenSeleccionada, setImagenSeleccionada] = useState("");
    var inputFileRef = useRef();

    function handleImageChange(e) {
        if (e.target.files && e.target.files[0]) {
          setTypeFile(e.target.files[0].type);
          console.log(`archivo:${document.getElementById('upload-input').files[0].name}`);
          setImagenSeleccionada(e.target.files[0]);
          let reader = new FileReader();
    
          reader.onload = function (e) {
            setImage(e.target.result);
            
            setIsUploaded(true);
          };
    
          reader.readAsDataURL(e.target.files[0]);
          
        }
      }
    // actualizacion de campos
      const handleChange = (event) => {
        const { name, value } = event.target
        setPortafolio({ ...portafolio, [name]: value })
      }

      const creacionPortafolio=(e)=>{
        e.preventDefault();
        
       const formData = new FormData()
       alert(typeof(formData));
        formData.append('name', "portafolio.name")
        formData.append('lema', portafolio.lema)
        formData.append('servicio', portafolio.servicio)
        formData.append('habilidad', portafolio.habilidad)
        formData.append('logro', portafolio.logro)
        formData.append('email', portafolio.email)
        formData.append('phone', portafolio.phone)
        formData.append('estado', portafolio.estado)
        formData.append('image', imagenSeleccionada) 
        alert(JSON.stringify(formData))
        let apiURL = `${ruta.ruta_api}/api/crear-portafolio`;
        let config = {
        headers: {
          authorization:`Bearer ${localStorage.token}` ,
        }
      }
        axios
          .post(apiURL, formData, config)
          .then((res) => {
            this.history.push('/cliente');
            
          })
          .catch((error) => {
            console.log(error.message);
            alert("No fue posible registrar portafolio");
          });
      }
    return (
        <div class="row justify-content-center">
            <div class="col-md-6">
            <br/>
                <div className="section-title">
                    <h2>Portafolio</h2>
                    
                    
                </div>
                <div className="col-lg-4">
       </div>
                    <br/>
                
<form onSubmit={creacionPortafolio}>
{/* tratamiento de imagenes */}
    {/* <Layout>
        <Container>
        <h2>Imagen Portafolio</h2>
        

        <BoxUpload>
          <div className="image-upload">
            {!isUploaded ? (
              <>
                <label htmlFor="upload-input">
                  <img
                    src={FolderIcon}
                    draggable={"false"}
                    alt="placeholder"
                    style={{ width: 100, height: 100 }}
                    
                  />
                  <p style={{ color: "#444" }}>Click para subir imagen</p>
                </label>
            
                <input
                 id="upload-input"
                  type="file"
                  ref={inputFileRef}
                  accept=".jpg,.jpeg,.gif,.png"
                  onChange={handleImageChange}
                />
           
              </>
            ) : (
              <ImagePreview>
                <img
                  className="close-icon"
                  src={CloseIcon}
                  alt="CloseIcon"
                  onClick={() => {
                    setIsUploaded(false);
                    setImage(null);
                  }}
                />
                
                  <img
                    id="uploaded-image"
                    src={image}
                    draggable={false}
                    alt="uploaded-img"
                  />
                
              </ImagePreview>
            )}
          </div>
        </BoxUpload>

        {isUploaded ? <h2>Tipo imagen: {typeFile}</h2> : null}

        
      </Container>
      </Layout> */}
        {/* fin de tratamiento de imagenes */}
                 
                        <div className="form-group">
                            <label>Nombre</label>
                            <input
                            type="text"
                            className="form-control"
                            value={portafolio.name}
                            onChange={handleChange} 
                            required
                            />
                        </div>
                    <br/>

                        <div className="form-group">
                            <label>Lema de vida</label>
                            <input
                            type="text"
                            className="form-control"
                            value={portafolio.lema}
                            onChange={handleChange}
                            required
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
                                value={portafolio.servicio}
                                onChange={handleChange}
                                required
                                /></p>
                            
                            </div>
                        </div>
                        <div className="card">
                            
                            <div className="card-body">
                            <h5 className="card-title">Habilidades blandas</h5>
                            <p className="card-text"><input
                                type="text"
                                className="form-control"
                                value={portafolio.habilidad}
                            onChange={handleChange}
                                required
                                /></p>
                            
                            </div>
                        </div>
                        <div className="card">
                            
                            <div className="card-body">
                            <h5 className="card-title">Logros obtenidos</h5>
                            <p className="card-text"><input
                                type="text"
                                class="form-control"
                                value={portafolio.logro}
                                onChange={handleChange}
                                required
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
                        value={portafolio.email}
                        onChange={handleChange}
                        required
                        />
                        <br/>
                        <label>Celular</label>
                        <input
                        type="text"
                        class="form-control"
                        value={portafolio.phone}
                        onChange={handleChange}
                        required
                        />
                    </div>

                    <br/>

                    <div class="btn-toolbar">
                            <div class="btn-group me-2">
                            <button class="btn btn-dark">Guardar</button>
                           
                            </div>
                            </div>
                </form>
            </div>
        </div>
    );
}

export default withRouter(Pestandar);
