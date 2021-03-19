import React, { Component } from "react";

export const Register = () => {
	return (
		<div className="container">
			<form>
				<div className="form-row">
					<div className="form-group col-md-8">
						<label className="inputName">Nombre</label>
						<input type="name" className="form-control" id="inputName" placeholder="Dinos tu Nombre" />
					</div>
					<br />
					<div className="form-group col-md-8">
						<label className="lastName">Apellido</label>
						<input type="lastName" className="form-control" id="lastName" placeholder="Dinos tu Apellido" />
					</div>
					<div className="form-group col-md-8">
						<label className="inputEmail4">Correo Electronico</label>
						<input type="email" className="form-control" id="inputEmail4" placeholder="Dinos tu Correo" />
					</div>
					<div className="form-group col-md-8">
						<label className="inputPassword4">Contraseña</label>
						<input
							type="password"
							className="form-control"
							id="inputPassword4"
							placeholder="Escribe tu Contraseña"
						/>
					</div>
					<div className="form-group col-md-8">
						<label className="inputConfirPassword">Confirma tu Contraseña</label>
						<input
							type="password"
							className="form-control"
							id="inputPassword4"
							placeholder="Repite tu Contraseña"
						/>
					</div>
				</div>
				<div className="form-group">
					<div className="form-check">
						<input className="form-check-input" type="checkbox" id="gridCheck" />
						<label className="form-check-label" id="gridCheck">
							Mantenme Informado
						</label>
					</div>
				</div>
				<button type="submit" className="btn btn-info center-button">
					Registrarme
				</button>
			</form>
		</div>
	);
};
