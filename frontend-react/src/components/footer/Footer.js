import React from 'react';
import Politicas from '../Politicas'

class Footer extends React.Component {

  render() {

    return (

        <footer className="container">
        <p class="fs-3">
        <a href="https://www.facebook.com/profile.php?id=100074188725281"><i className="fab fa-facebook"></i></a>
        
        <a href="https://twitter.com/appitsyou"><i className="fab fa-twitter-square"></i></a>
        
        <a href="https://www.instagram.com/app_itsyou/"><i className="fab fa-instagram"></i></a>
        
        </p>
        
            <p className="float-right"><a href="#" rel="noopener noreferrer">Subir</a></p>
            <p>&copy; {(new Date().getFullYear())} Todos los derechos reservados, it's You. &middot; <a href="/crear" rel="noopener noreferrer">Política de Privacidad</a> &middot; <a href="#" rel="noopener noreferrer">Términos</a></p>
        </footer>

    )
    
  }

}

export default Footer;