import React from "react";

const Footer = () => {
    return (
        <footer class="pt-4 my-md-5 pt-md-5 border-top">
        <div class="row">
            <div class="col-12 col-md">
                <img class="mb-2" src="./img/landing-page/movie-icon.png" alt="" width="64" height="64"/>
                <small class="d-block mb-3 text-muted">&copy; 2018-2019</small>
            </div>
            <div class="col-6 col-md">
                <h5>Nuestro valores</h5>
                <ul class="list-unstyled text-small">
                    <li><a class="text-muted" href="#">Calidad</a></li>
                    <li><a class="text-muted" href="#">Rapidez</a></li>
                    <li><a class="text-muted" href="#">Precio</a></li>
                </ul>
            </div>
            <div class="col-6 col-md">
                <h5>Webs amigas</h5>
                <ul class="list-unstyled text-small">
                    <li><a class="text-muted" href="#">programame.com</a></li>
                    <li><a class="text-muted" href="#">javapoint.com</a></li>
                    <li><a class="text-muted" href="#">webinar.es</a></li>
                </ul>
            </div>
            <div class="col-6 col-md">
                <h5>Sobre nosotros</h5>
                <ul class="list-unstyled text-small">
                    <li><a class="text-muted" href="#">Equipo</a></li>
                    <li><a class="text-muted" href="#">Localización</a></li>
                    <li><a class="text-muted" href="#">Privacidad</a></li>
                </ul>
            </div>
        </div>
    </footer>
  );
};
export default Footer;