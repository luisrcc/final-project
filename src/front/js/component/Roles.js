import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const Roles = () => {
	//const { store, actions } = useContext(Context);
	//const MySwal = withReactContent(Swal);

	let history = useHistory();

	const [role, setRole] = useState({
		// first_name: "",
		// last_name: "",
		// email: "",
		// phone: "",
		// password: "",
		role: ""
	});

	const handleClick = textRol => {
		// const isSuccefullyCreateUser = actions.createAdminRegistration(data);
		// if (isSuccefullyCreateUser) {
		// 	MySwal.fire({
		// 		title: <p>Hello World</p>,
		// 		footer: "Copyright 2018",
		// 		didOpen: () => {
		// 			// `MySwal` is a subclass of `Swal`
		// 			//   with all the same instance & static methods
		// 			MySwal.clickConfirm();
		// 		}
		// 	}).then(() => {
		// 		return MySwal.fire(<p>Shorthand works too</p>);
		// 	});
		// }
		if (textRol === "Adminsitrator") {
			history.push("/user");
		} else {
			history.push("/register");
		}
	};

	const handleChange = event => {
		setRole({
			role: event
		});
	};

	return (
		<div className="register-background">
			<div className="container">
				<div className="row py-4 my-4 align-items-center">
					<div className="col-md-5 pr-lg-5 mb-5 mb-md-0" />

					<div className="col-md-7 col-lg-6 ml-auto border text-center p-4">
						<div className="py-4 register-title">
							<h1>Eres ...?</h1>
						</div>
						<form>
							<div className="row">
								<div className="input-group col-lg-6 mb-4 mx-auto">
									<div className="input-group-prepend">
										<span className="input-group-text bg-white px-4 border-md border-right-0">
											<i className="fa fa-user text-muted" />
										</span>
									</div>
									<select
										id="role"
										name="role"
										value={role}
										onChange={event => handleChange(event.target.value)}
										placeholder="Ingrese Nombre"
										className="custom-select form-control bg-white border-left-0 border-md font-weight-bold text-muted">
										<option value="">Seleccione</option>
										<option value="Client">Cliente</option>
										<option value="Administrator">Administrador</option>
									</select>
								</div>
							</div>
							{role &&
								("Administrator" ? (
									<div className="row justify-content-center">
										<button
											type="button"
											className="btn btn-info btn-md mb-5"
											onClick={() => handleClick("Administrator")}>
											Siguiente
										</button>
									</div>
								) : (
									<div className="row justify-content-center">
										<button
											type="button"
											className="btn btn-info btn-md mb-5"
											onClick={() => handleClick("Client")}>
											Siguiente
										</button>
									</div>
								))}
							{/* {role && (
								<div className="row justify-content-center">
									<Link to="/user">
										<button
											type="button"
											className="btn btn-info btn-md mb-5"
											onClick={e => handleClick(e)}>
											Siguiente
										</button>
									</Link>
								</div>
							)} */}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
