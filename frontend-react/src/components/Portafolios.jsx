import React,{Fragment} from 'react';

export const Portafolios = () => {
    return (
    <Fragment>
        
        <div className="testimonials container" style={{width: "500px"}}>
        <div className="section-title">
                    <h2>Portafolios</h2>
                    <p>Usuarios y servicos</p>
                </div>

        <div className="section-title">
        <h2>Perfiles publicados</h2>
        </div>

        <div className="owl-carousel testimonials-carousel">

        <div className="testimonial-item">
            <p>
            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, id quibusdam praesentium adipisci, cupiditate magni ipsam deserunt tempora veniam, illum omnis beatae architecto tempore impedit animi temporibus cumque facilis exercitationem.
            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
            <h3>Saul Goodman</h3>
            <h4>Arquitecto &amp; Programador</h4>
        </div>

        <div className="testimonial-item">
            <p>
            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda iure nesciunt quisquam aliquam quod eligendi quo totam tenetur porro expedita. Debitis pariatur totam neque fuga? Dolorem non deleniti quasi provident.
            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt=""/>
            <h3>Sara Wilsson</h3>
            <h4>Diseñadora Gráfica</h4>
        </div>

        <div className="testimonial-item">
            <p>
            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos facere explicabo exercitationem, fugit facilis quo, vero veritatis sequi harum ea neque nemo. Ratione aliquam enim, quam possimus unde dignissimos suscipit.
            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt=""/>
            <h3>Jena Karlis</h3>
            <h4>Ingeniera de Sistemas</h4>
        </div>

        <div className="testimonial-item">
            <p>
            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam facere, ut quae rerum ducimus architecto! Explicabo suscipit tenetur perspiciatis expedita modi provident asperiores saepe doloribus? Excepturi consectetur dolore qui voluptatem.
            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt=""/>
            <h3>Matt Brandon</h3>
            <h4>Freelancer</h4>
        </div>

        <div className="testimonial-item">
            <p>
            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
            Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
            <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
            <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt=""/>
            <h3>John Larson</h3>
            <h4>Administrador</h4>
        </div>

        </div>

        </div>
</Fragment>
    );
}
