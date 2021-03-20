import React from "react";

export const Login = () => (
	<form>
		<div className="form-group row">
			<label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
				Email
			</label>
			<div className="col-sm-10">
				<input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
			</div>
		</div>
		<div className="form-group row">
			<label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
				Contraseña
			</label>
			<div className="col-sm-10">
				<input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
			</div>
		</div>

		<div className="form-group row">
			<div className="justify-content-center">
				<button type="submit" className="btn btn-info">
					Entrar
				</button>
			</div>
		</div>
	</form>
);
