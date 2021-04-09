import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useHistory } from "react-router-dom";

export const UserRegisterPage = () => {
	const { store, actions } = useContext(Context);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirmation, setPasswordConfirmation] = useState("");

	const history = useHistory();

	const handlerClick = e => {
		e.preventDefault();

		actions.setRegister(
			{
				first_name: firstName,
				last_name: lastName,
				email: email,
				phone: phone,
				password: password,
				password: passwordConfirmation
			},
			history
		);
	};

	// const responseGoogle = answer => {
	// 	console.log(answer);
	// };

	return (
		<div className="register-background">
			<div className="container">
				<div className="row py-4 my-4 align-items-center">
					<div className="col-md-5 pr-lg-5 mb-5 mb-md-0" />

					<div className="col-md-7 col-lg-6 ml-auto border text-center p-4">
						<div className="py-4 register-title">
							<h1>Crea una cuenta</h1>
						</div>
						<form>
							<div className="row">
								<div className="input-group col-lg-6 mb-4 mx-auto">
									<div className="input-group-prepend">
										<span className="input-group-text bg-white px-4 border-md border-right-0">
											<i className="fa fa-user text-muted" />
										</span>
									</div>
									<input
										id="firstName"
										type="email"
										name="firstName"
										value={firstName}
										onChange={e => setFirstName(e.target.value)}
										placeholder="Ingrese Nombre"
										className="form-control bg-white border-left-0 border-md"
									/>
								</div>

								<div className="input-group col-lg-6 mb-4">
									<div className="input-group-prepend">
										<span className="input-group-text bg-white px-4 border-md border-right-0">
											<i className="fa fa-user text-muted" />
										</span>
									</div>
									<input
										id="lastName"
										type="email"
										name="lastname"
										value={lastName}
										onChange={e => setLastName(e.target.value)}
										placeholder="Ingrese Apellido"
										className="form-control bg-white border-left-0 border-md"
									/>
								</div>
								<div className="input-group col-lg-12 mb-4">
									<div className="input-group-prepend">
										<span className="input-group-text bg-white px-4 border-md border-right-0">
											<i className="fa fa-envelope text-muted" />
										</span>
									</div>
									<input
										id="email"
										type="email"
										name="email"
										value={email}
										onChange={e => setEmail(e.target.value)}
										placeholder="Ingrese su email"
										className="form-control bg-white border-left-0 border-md"
									/>
								</div>
								<div className="input-group col-lg-12 mb-4">
									<div className="input-group-prepend">
										<span className="input-group-text bg-white px-4 border-md border-right-0">
											<i className="fa fa-phone-square text-muted" />
										</span>
									</div>
									<select
										id="countryCode"
										name="countryCode"
										className="custom-select form-control bg-white border-left-0 border-md h-100 font-weight-bold text-muted">
										<option value="">+56</option>
										<option value="">+10</option>
										<option value="">+15</option>
										<option value="">+58</option>
									</select>
									<input
										id="phoneNumber"
										type="tel"
										name="phone"
										value={phone}
										onChange={e => setPhone(e.target.value)}
										placeholder="Ingrese numero telefonico"
										className="form-control bg-white border-md border-left-0 pl-3"
									/>
								</div>

								<div className="input-group col-lg-6 mb-4 mx-auto">
									<div className="input-group-prepend">
										<span className="input-group-text bg-white px-4 border-md border-right-0">
											<i className="fa fa-lock text-muted" />
										</span>
									</div>
									<input
										id="password"
										type="password"
										name="password"
										value={password}
										onChange={e => setPassword(e.target.value)}
										placeholder="Ingrese Contraseña"
										className="form-control bg-white border-left-0 border-md"
									/>
								</div>

								<div className="input-group col-lg-6 mb-4 mx-auto">
									<div className="input-group-prepend">
										<span className="input-group-text bg-white px-4 border-md border-right-0">
											<i className="fa fa-lock text-muted" />
										</span>
									</div>
									<input
										id="passwordConfirmation"
										type="password"
										name="passwordConfirmation"
										value={passwordConfirmation}
										onChange={e => setPasswordConfirmation(e.target.value)}
										placeholder="Confirme Contraseña"
										className="form-control bg-white border-left-0 border-md"
									/>
								</div>

								<div className="form-group col-lg-12 mx-auto mb-0">
									<button
										href="#"
										className="btn btn-info btn-block py-2"
										onClick={e => handlerClick(e)}>
										<span className="font-weight-bold">Crea tu cuenta</span>
									</button>
								</div>
								<div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
									<div className="border-bottom w-100 ml-5" />
									<span className="px-2 small text-muted font-weight-bold text-muted">O</span>
									<div className="border-bottom w-100 mr-5" />
								</div>
								<div className="form-group col-lg-12 mx-auto">
									<a href="#" className="btn btn-info btn-block py-2 btn-facebook">
										<i className="fa fa-facebook-f mr-2" />
										<span className="font-weight-bold">Continuar con Facebook</span>
									</a>
								</div>

								<div className="text-center w-100 mb-5">
									<p className="text-muted font-weight-bold">
										¿Ya tienes cuenta?{" "}
										<Link to="/login">
											<a href="#" className="text-info ml-2 mb-5">
												Ingresa
											</a>
										</Link>
									</p>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
