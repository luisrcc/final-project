import React, { Component } from "react";

export const RegisterPage = () => {
	return (
		<div className="container">
			<form>
				<div className="">
					<div className="form-row">
						<div className="form-group col-md-8">
							<label className="inputName">Nombre</label>
							<input
								type="name"
								className="form-control"
								id="inputName"
								placeholder="Dinos tu Nombre"
								required
							/>
						</div>
						<br />
						<div className="form-group col-md-8">
							<label className="lastName">Apellido</label>
							<input
								type="lastName"
								className="form-control"
								id="lastName"
								placeholder="Dinos tu Apellido"
								required
							/>
						</div>
						<div className="form-group col-md-8">
							<label className="inputEmail4">Correo Electronico</label>
							<input
								type="email"
								className="form-control"
								id="inputEmail4"
								placeholder="Dinos tu Correo"
								required
							/>
						</div>
						<div className="form-group col-md-8">
							<label className="inputPassword4">Contraseña</label>
							<input
								type="password"
								className="form-control"
								id="inputPassword4"
								placeholder="Escribe tu Contraseña"
								required
							/>
						</div>
						<div className="form-group col-md-8">
							<label className="inputConfirPassword">Confirma tu Contraseña</label>
							<input
								type="password"
								className="form-control"
								id="inputPassword4"
								placeholder="Repite tu Contraseña"
								required
							/>
						</div>
					</div>
				</div>
				<div className="form-group">
					<div className="form-check">
						<input className="form-check-input" type="checkbox" id="gridCheck" required />
						<label className="form-check-label" id="gridCheck">
							Mantenme Informado
						</label>
					</div>
				</div>
				<div className="text-center">
					<button type="submit" className="btn btn-info center-button">
						Registrarme
					</button>
				</div>
			</form>
		</div>
	);
};
