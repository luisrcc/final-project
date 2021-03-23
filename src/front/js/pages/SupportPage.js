import React from "react";

export const SupportPage = () => {
	return (
		<div className="container">
			<div className="supportForm">
				<form>
					<div className="form-group col-md-8">
						<label className="exampleInputEmail1">Correo Electronico</label>
						<input
							type="email"
							className="form-control"
							id="inputEmail1"
							aria-describedby="emailHelp"
							placeholder="Enter email"
							required
						/>
					</div>
					<div className="form-group col-md-8">
						<label className="formControlTextarea1">Escribe Aqui</label>
						<textarea className="form-control" id="formControlTextarea1" />
					</div>
				</form>
				<div className="text-center">
					<button type="submit" className="btn btn-info center-button">
						Enviar Consulta
					</button>
				</div>
			</div>
		</div>
	);
};
