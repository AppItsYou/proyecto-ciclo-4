import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ruta from '../rutaAPI';
import { withRouter } from "react-router-dom";


 class FilaPortafolioCliente extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data:props.portafolio,
            portafolios:props.portafolios,
            
          };
        this.deletePortafolio = this.deletePortafolio.bind(this); 
        this.autorizarPortafolio = this.autorizarPortafolio.bind(this); 
    }

   deletePortafolio() {
    let apiURL = `${ruta.ruta_api}/api/delete-portafolio/${this.props.portafolio._id}`;
    
    if (window.confirm("Realmente desea borrar?")) {
        axios
          .delete(apiURL)
          .then(() => {
            
            //alert(this.state.portafolios);
            alert("renderizar tabla");
            /* const filtredData = this.state.portafolios.filter(item => item._id !== this.props.portafolio._id);
              obj.setState({portafolios:filtredData}); */
              return this.props.renderizarTabla(this.props.portafolio._id);
          })
          .catch((error) => {
            console.log(error);
          });
      }
      
    }
    
    /********************* */
    autorizarPortafolio() {
        let apiURL = `${ruta.ruta_api}/api/update-portafolio/${this.props.portafolio._id}`;
        if (window.confirm("Realmente desea solicitar aurorización?")) {
        let filtro={estado:"PENDIENTE"}

        
        axios
          .put(apiURL, filtro)
          .then((res) => {
            console.log(res);
            this.setState(prevState => {
                let data = Object.assign({}, prevState.data);
                data.estado = 'PENDIENTE';
                return { data };
              }); 
          })
          .catch((error) => {
            console.log(error);
          });
      }
      }
    /************************* */

    render() {
     
        return(
            <tr>
                <td>{this.state.data.name}</td>
                <td>{this.state.data.email}</td>
                <td>{this.state.data.phone}</td>
                <td>{this.state.data.estado}</td>
                        <td class="align-top">
                    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                <div class="btn-group me-2" role="group" aria-label="First group">
                                <button type="button" class="btn btn-dark">Ver</button>
                                </div>
                                <div class="btn-group" role="group" aria-label="Third group">
                                <button class="btn btn-dark">Editar</button>
                                </div>
                                <div class="btn-group" role="group" aria-label="Third group">
                                <button onClick={this.autorizarPortafolio} class="btn btn-dark">Publicar</button>
                                </div>
                                <div class="btn-group me-2" role="group" aria-label="Second group">
                                <button  onClick={this.deletePortafolio} class="btn btn-dark">Borrar</button>
                                </div>
                            </div>
                    </td>
                </tr>
        );
    }
}
export default withRouter(FilaPortafolioCliente)