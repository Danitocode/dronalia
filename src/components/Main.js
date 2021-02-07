import React from "react";

const navbar = {
    border: 'solid',
    width : '2px',
    color:  '#ccc'
  }

const Main = () => {
    return (	<div class="container">
    <header class="py-md-3">
        <nav class="navbar navbar-expand-lg navbar-light bg-light py-md-2" style={navbar}>
            <a class="navbar-brand" href="#">
                <img src="./img/landing-page/film-icon.png" width="32" height="32" class="d-inline-block align-top"
                    alt=""/>
                Postermania
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Ofertas
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Ofertas series</a>
                            <a class="dropdown-item" href="#">Ofertas películas</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Último minuto</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Registro</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Tus pedidos</a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" id="txt-search" type="search"
                        placeholder="nombre serie o película" aria-label="buscar"/>
                    <button class="btn btn-outline-success my-2 my-sm-0" id="btn-search"
                        type="submit">Buscar</button>
                </form>
            </div>
        </nav>
    </header>

    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-5">Tu póster personalizado</h1>
            <p class="lead">Elige tu poster de tu serie o película favorita por un precio sin competencia</p>
        </div>
    </div>

    <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <a class="nav-item nav-link active" id="nav-films-tab" data-toggle="tab" href="#nav-films" role="tab"
                aria-controls="nav-home" aria-selected="true">Pósters de películas</a>
            <a class="nav-item nav-link" id="nav-series-tab" data-toggle="tab" href="#nav-series" role="tab"
                aria-controls="nav-profile" aria-selected="false">Pósters de series</a>
        </div>
    </nav>

    <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-films" role="tabpanel" aria-labelledby="nav-home-tab">
            <div id="list-films" class="card-deck mb-3 text-center py-3"></div>
        </div>

        <div class="tab-pane fade" id="nav-series" role="tabpanel" aria-labelledby="nav-profile-tab">
            <div id="list-series" class="row py-3"></div>
        </div>
    </div>

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

    <div id="pedido" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalLabel">Pedido</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <input type="hidden" id="order_id" name="order_id" value="" />
                        <div class="form-group">
                            <label>Póster:</label>
                            <span id="order_name">nombre póster</span>
                        </div>
                        <div class="form-group">
                            <label>Cantidad:</label>
                            <input type="number" id="order_quantity" name="cantidad" size="4" value="1" min="1"
                                max="10" />
                        </div>
                        <div class="form-group">
                            <label>Precio:</label>
                            <input type="text" id="order_price" name="precio" data-price="50" value="50€" readonly
                                disabled />
                        </div>
                        <div class="form-group">
                            <label>Medida:</label>
                            <input type="radio" name="order_size" value="S" checked /> Pequeño
                            <input type="radio" name="order_size" value="M" /> Medio
                            <input type="radio" name="order_size" value="L" /> Grande
                        </div>
                        <p>
                            <a class="link" data-toggle="collapse" href="#collapsePedido" role="button"
                                aria-expanded="false" aria-controls="collapsePedido">
                                Leer condiciones
                            </a>
                        </p>
                        <div class="collapse bg-light" id="collapsePedido">
                            <div class="card card-body">detalles</div>
                        </div>

                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                    <button id="btn-order" type="button" class="btn btn-primary">Realizar pedido</button>
                </div>
            </div>
        </div>
    </div>

	<script src="js/jquery-3.4.1.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
		integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
		crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
		integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
		crossorigin="anonymous"></script>

	<script type="module" src="../App.js"></script>


</div>
);
};
export default Main;