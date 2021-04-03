import React, { useState } from "react";
import { Link } from "react-router-dom";
import computerCat from "../../img/computer-cat.jpg";

export const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function validateForm() {
		return email.length > 0 && password.length > 0;
	}

	function handleSubmit(event) {
		event.preventDefault();
	}

	return (
		<div className="login-background">
			<div className="container">
				<div className="row py-4 mt-4 Login">
					<div className="col-md-7 col-lg-6 mr-auto border p-4 col-centered">
						<form onSubmit={handleSubmit}>
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
						<div className="text-center mt-4">
							<div className="my-4">
								<button className="btn btn-info center-button" type="submit">
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

					<div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
						{/* <img src={computerCat} alt="" className="img-fluid mb-6 d-none d-md-block" />
                        <h1> Ingresa a tu cuenta</h1>
                        <p className="font-italic text-muted mb-0" /> */}
					</div>
				</div>
			</div>
		</div>
	);
};
