import React, { useContext, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import GoogleLogin from "react-google-login";

export const LoginPage = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const history = useHistory();

	function validateForm(values) {
		const errors = {};
		if (!values.email) {
			errors.email = "El email es requerido";
		}
		if (!values.password) {
			errors.password = "La contraseña es requerida";
		}
		return errors;
	}

	function handlerClick(event) {
		event.preventDefault();

		actions.setLogin(
			{
				email: email,
				password: password
			},
			history
		);
	}

	return (
		<div className="login-background">
			<div className="container">
				<div className="row py-4 mt-4 Login">
					<div className="col-md-7 col-lg-6 mr-auto border p-4 col-centered">
						<form>
							<div className="row justify-content-center login-content">
								<div className="py-4 login-title">
									<h1> Ingrese a su cuenta</h1>
								</div>
								<div className="input-group col-lg-10 mb-4">
									<div className="input-group-prepend">
										<span className="input-group-text bg-white px-4 border-md border-right-0">
											<i className="fa fa-envelope text-muted" />
										</span>
									</div>
									<input
										className="form-control bg-white border-left-0 border-md"
										autoFocus
										type="email"
										name="email"
										placeholder="Ingrese su email"
										value={email}
										onChange={e => setEmail(e.target.value)}
										required
									/>
								</div>
								<div className="input-group col-lg-10 mb-4">
									<div className="input-group-prepend">
										<span className="input-group-text bg-white px-4 border-md border-right-0">
											<i className="fa fa-lock text-muted" />
										</span>
									</div>
									<input
										className="form-control bg-white border-left-0 border-md"
										type="password"
										placeholder="Ingrese su contraseña"
										value={password}
										onChange={e => setPassword(e.target.value)}
										required
									/>
								</div>
							</div>
						</form>
						<div className="text-center w-100">
							<p className="text-muted font-weight-bold">
								¿Olvidó su contraseña?{" "}
								<Link to="/recuperar">
									<a href="#" className="text-info ml-2 mb-5">
										Recuperar contraseña
									</a>
								</Link>
							</p>
						</div>
						<div className="text-center mt-4">
							<div className="my-4">
								<button
									className="btn btn-info center-button"
									type="submit"
									onClick={e => handlerClick(e)}>
									Iniciar Sesión
								</button>
							</div>
							<Link to="/">
								<span className="btn btn-outline-info" href="#" role="button">
									Regresa
								</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
