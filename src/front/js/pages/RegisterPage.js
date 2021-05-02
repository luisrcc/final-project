import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useHistory } from "react-router-dom";
import GoogleLogin from "react-google-login";
import Swal from "sweetalert2";
import dog from "../../img/black-dog-bg.jpg";

export const RegisterPage = () => {
	const { actions } = useContext(Context);

	const [errors, setErrors] = useState({});
	const inicializarCamposForm = {
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		password: "",
		passwordConfirmation: ""
	};
	const [values, setValues] = useState(inicializarCamposForm);

	const history = useHistory();
	const userData = JSON.parse(localStorage.getItem("user"));

	const handlerClick = async e => {
		e.preventDefault();

		const isOk = await actions.setRegister({
			first_name: values.firstName,
			last_name: values.lastName,
			email: values.email,
			phone: values.phone,
			password: values.password,
			perfil_id: userData.perfil_id ? paseInt(userData.perfil_id) : 1
		});

		if (!isOk) {
			Swal.fire({
				title: "Hubo un Error!",
				text: "Favor reintente la operación",
				icon: "error",
				confirmButtonText: "Continuar"
			}).then(() => {
				history.push("/");
			});
		} else {
			Swal.fire({
				title: "Usuario registrado con exito",
				text: "¿Deseas continuar?",
				icon: "success",
				confirmButtonText: "Continuar"
			}).then(() => {
				history.push("/");
			});
		}
	};

	const handleInputChange = (e, validarNumeros) => {
		e.preventDefault();
		const regexp = /^[0-9\b]+$/;
		const { name, value } = e.target;
		const valorTrim = value;

		if (validarNumeros) {
			if (valorTrim === "" || regexp.test(valorTrim)) {
				const fieldValue = { [name]: valorTrim };
				setValues({
					...values,
					...fieldValue
				});
				validate(fieldValue);
			}
		} else {
			const fieldValue = { [name]: valorTrim };
			setValues({
				...values,
				...fieldValue
			});
			validate(fieldValue);
		}
	};

	const validate = (fieldValues = values) => {
		let temp = { ...errors };

		if ("firstName" in fieldValues)
			temp.firstName =
				fieldValues.firstName && fieldValues.firstName.trim().length > 0 ? "" : "Nombre corto es obligatorio";

		if ("lastName" in fieldValues)
			temp.lastName =
				fieldValues.lastName && fieldValues.lastName.trim().length > 0 ? "" : "Apellido es obligatorio";

		if ("email" in fieldValues)
			temp.email = fieldValues.email && fieldValues.email.trim().length > 0 ? "" : "Email es obligatorio";

		if ("phone" in fieldValues)
			temp.phone = fieldValues.phone && fieldValues.phone.trim().length > 0 ? "" : "Teléfono es obligatorio";

		if ("password" in fieldValues)
			temp.password =
				fieldValues.password && fieldValues.password.trim().length > 0 ? "" : "Password es obligatorio";

		if ("passwordConfirmation" in fieldValues)
			temp.passwordConfirmation =
				fieldValues.passwordConfirmation && fieldValues.passwordConfirmation.trim().length > 0
					? ""
					: "Confirmación Password es obligatorio";

		setErrors({
			...temp
		});
		if (fieldValues === values) return Object.values(temp).every(x => x === "");
	};

	console.log("errors");
	console.log(errors);

	return (
		<div className="">
			<div className="container ">
				<div className="row pb-4 mb-4 align-items-center">
					<div className="col-sm-12 col-lg-6 p-0">
						<img src={dog} className="register-background" width="100%" />
					</div>

					<div className="col-sm-12 col-md-12 col-lg-6 border text-center p-4 mt-3 register-form">
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
										value={values.firstName}
										onChange={e => handleInputChange(e, false)}
										placeholder="Ingrese Nombre"
										className="form-control bg-white border-left-0 border-md"
									/>
									{errors.firstName ? (
										<small id="error-nombre" className="form-text text-danger">
											{errors.firstName}
										</small>
									) : null}
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
										name="lastName"
										value={values.lastName}
										onChange={e => handleInputChange(e, false)}
										placeholder="Ingrese Apellido"
										className="form-control bg-white border-left-0 border-md"
									/>
									{errors.lastName ? (
										<small id="error-lastName" className="form-text text-danger">
											{errors.lastName}
										</small>
									) : null}
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
										value={values.email}
										onChange={e => handleInputChange(e, false)}
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
										value={values.phone}
										onChange={e => handleInputChange(e, false)}
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
										value={values.password}
										onChange={e => handleInputChange(e, false)}
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
										value={values.passwordConfirmation}
										onChange={e => handleInputChange(e, false)}
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
								<div className="form-group col-lg-12 mx-auto">
									<a href="#" className="btn btn-info btn-block py-2 btn-facebook">
										<i className="fa fa-facebook-f mr-2" />
										<span className="font-weight-bold">Continuar con Google</span>
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
									<Link to="/">
										<span className="btn btn-outline-info" href="#" role="button">
											Regresa
										</span>
									</Link>
								</div>
							</div>
						</form>
					</div>
					<div className="col-sm-12 col-md-12 text-center">
						<img src={dog} className="register-bg-small" width="100%" />
					</div>
				</div>
			</div>
		</div>
	);
};
