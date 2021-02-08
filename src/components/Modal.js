import React from "react";



function Modal() {
  return (
    <div className="modal fade" id="pedido" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
		<div className="modal-dialog" role="document">
			<div className="modal-content">
				<div className="modal-header">
					<h5 className="modal-title" id="modalLabel">Pedido</h5>
					<button type="button" className="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div className="modal-body">
					<form>
						<div className="form-group">
							<label>Cantidad:</label>
							<input type="text" id="ped_cantidad" name="cantidad" value=""/>
						</div>
						<div className="form-group">
							<label>Precio:</label>
							<input type="text" id="ped_precio" name="precio" value="50€" readonly disabled/>
						</div>
					
						<div className="form-group">
							<label>Medida:</label>
							<div className="btn-group" role="group" aria-label="Medida">
								<button type="button" className="btn btn-primary">Pequeño</button>
								<button type="button" className="btn btn-primary">Medio</button>
								<button type="button" className="btn btn-primary">Grande</button>
							</div>
						</div>
						
						<p>
							<a href="#collapsePedido" data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapsePedido">Leer condiciones</a>
						</p>
						<div className="collapse" id="collapsePedido">
							<div className="card card-body">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
							</div>
						</div>
					

					</form>
				</div>
				<div className="modal-footer">
					<button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
					<button type="button" className="btn btn-primary">Realizar pedido</button>
				</div>
			</div>
		</div>
	</div>
  );
}

export default Modal;



