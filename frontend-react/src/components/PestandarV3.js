<<<<<<< HEAD
import React, { useState, useRef } from 'react';
import Axios from 'axios';
import '../assets/css/estandar.css';
import { Layout, Container, BoxUpload, ImagePreview } from "../assets/js/style";
import FolderIcon from "../assets/img/folder_icon_transparent.png";
import CloseIcon from "../assets/img/CloseIcon.svg";


const Pestandar = () => {
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
    return (
        <div class="row justify-content-center">
            <div class="col-md-6">
            <br/>
                <div className="section-title">
                    <h2>Portafolio</h2>
                    
                    
                </div>
                <div className="col-lg-4">
                    {/* tratamiento de imagenes */}
                    <Layout>
        <Container>
        <h2>Upload your image</h2>
        

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
                  <p style={{ color: "#444" }}>Click to upload image</p>
                </label>
            
                <input
                 id="upload-input"
                  type="file"
                  ref={inputFileRef}
                  accept=".jpg,.jpeg,.gif,.png,.mov,.mp4"
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
                {typeFile.includes("video") ? (
                  <video
                    id="uploaded-image"
                    src={image}
                    draggable={false}
                    controls
                    autoPlay
                    alt="uploaded-img"
                  />
                ) : (
                  <img
                    id="uploaded-image"
                    src={image}
                    draggable={false}
                    alt="uploaded-img"
                  />
                )}
              </ImagePreview>
            )}
          </div>
        </BoxUpload>

        {isUploaded ? <h2>Type is {typeFile}</h2> : null}

        
      </Container>
      </Layout>
        {/* fin de tratamiento de imagenes */}
                    </div>
                    <br/>
                
                <form >
                        <div className="form-group">
                            <label>Nombre</label>
                            <input
                            type="text"
                            className="form-control"
                            // v-model="portafolio.name"
                            required
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
                        />
                        <br/>
                        <label>Celular</label>
                        <input
                        type="text"
                        class="form-control"
                        // v-model="portafolio.phone"
                        required
                        />
                    </div>

                    <br/>

                    <div class="nav-menu">
                        <button class="btn btn-primary">Guardar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Pestandar;
||||||| merged common ancestors
=======
import React from 'react';
import { useState } from 'react';
import Axios from 'axios';
import '../assets/css/estandar.css';


const Pestandar = () => {
    
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
                
                <form >
                        <div className="form-group">
                            <label>Nombre</label>
                            <input
                            type="text"
                            className="form-control"
                            // v-model="portafolio.name"
                            required
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
                        />
                        <br/>
                        <label>Celular</label>
                        <input
                        type="text"
                        class="form-control"
                        // v-model="portafolio.phone"
                        required
                        />
                    </div>

                    <br/>

                    <div class="nav-menu">
                        <button class="btn btn-primary">Guardar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Pestandar;
>>>>>>> 4629513bc2ba6223e66d023e7a331dd53ab690cc
