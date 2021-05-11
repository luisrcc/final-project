import React from "react";
import { Link } from "react-router-dom";
import { imgProfile } from "../../img/photoProfile.png";
import PropTypes from "prop-types";
import { Context } from ".././store/appContext";
import BookedHoursList from "../component/BookedHoursList";

export const ProfilePage = () => {
	const userData = JSON.parse(localStorage.getItem("user"));

	return (
		<div className="container">
			<div className="main-body">
				<div className="row gutters-sm mt-5">
					<div className="col-md-4 mb-3">
						<div className="card">
							<div className="card-body">
								<div className="d-flex flex-column align-items-center text-center">
									<img
										src="https://bootdey.com/img/Content/avatar/avatar3.png"
										alt="Admin"
										className="rounded-circle"
										width="150"
									/>
									<div className="mt-3">
										<h4>{`${userData.first_name} ${userData.last_name}`}</h4>
										<Link to="/booking">
											<button className="btn btn-outline-info">{"Reserva tu Hora"}</button>
										</Link>
									</div>
									<div className="mt-3">
										<Link to="/">
											<button className="btn btn-outline-info">{"Regresar"}</button>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-8">
						<div className="card mb-3">
							<div className="card-body">
								<div className="row">
									<div className="col-sm-3">
										<h6 className="mb-0">{"Nombre Completo"}</h6>
									</div>
									<div className="col-sm-9 text-secondary">{`${userData.first_name} ${
										userData.last_name
									}`}</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h6 className="mb-0">Email</h6>
									</div>
									<div className="col-sm-9 text-secondary">{`${userData.email}`}</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h6 className="mb-0">Teléfono</h6>
									</div>
									<div className="col-sm-9 text-secondary">{`${userData.phone}`}</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-8">
						<BookedHoursList />
					</div>
				</div>
			</div>
		</div>
	);
};

ProfilePage.propTypes = {
	item: PropTypes.shape({
		id: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		phone: PropTypes.integer
	})
};
