import React from "react";

const Footer = () => {
    return (<footer className="site-footer" role="contentinfo">
        <div className="container">
            <div className="row mb-5">
                <div className="col-md-5 mb-5 pl-md-5">
                    <div className="mb-5">
                        <img src="../images/te esperamos.png" alt="img"/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-md-center text-left">
                    <p className="small">
                        Copyright &copy;
                        <script>document.write(new Date().getFullYear());</script>
                        Todos los derechos reservados en Epaña <i className="icon-heart text-danger"
                                                                            aria-hidden="true"/> by <a
                        href="https://colorlib.com" target="_blank">Hostelerias sa</a>
                    </p>
                </div>
            </div>
        </div>
    </footer>);
};
export default Footer;