import React, { Component } from "react";

export const RegisterPage = () => {
	return (
		<div className="register-background">
			<div className="container">
				<div className="row py-4 mt-4 align-items-center">
					<div className="col-md-5 pr-lg-5 mb-5 mb-md-0" />

					<div className="col-md-7 col-lg-6 ml-auto border p-4">
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
										placeholder="Ingrese su nombre"
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
										placeholder="Ingrese su apellido"
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
										placeholder="Ingrese su contraseña"
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
										placeholder="Confirme contraseña"
										className="form-control bg-white border-left-0 border-md"
									/>
								</div>

								<div className="form-group col-lg-12 mx-auto mb-0">
									<a href="#" className="btn btn-info btn-block py-2">
										<span className="font-weight-bold">Crea tu cuenta</span>
									</a>
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
									<a href="#" className="btn btn-info btn-block py-2 btn-twitter">
										<i className="fa fa-twitter mr-2" />
										<span className="font-weight-bold">Continuar con Twitter</span>
									</a>
								</div>
								<div className="text-center w-100">
									<p className="text-muted font-weight-bold">
										¿Ya tienes cuenta?{" "}
										<a href="#" className="text-info ml-2 mb-5">
											Ingresa
										</a>
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
