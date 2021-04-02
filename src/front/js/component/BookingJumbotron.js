import React, { useState } from "react";
import { Link } from "react-router-dom";

const BookingJumbotron = () => {
	return (
		<div className="jumbotron jumbotron-fluid jumbotron-booking">
			<div className="container">
				<div className="jumbotron-booking-content p-lg-6 py-5">
					<h1 className="text-uppercase fs-5 booking-jumbotron-text">Tenemos lo mejor </h1>
					<h1 className="text-uppercase fs-5 booking-jumbotron-text pb-5">para tus mascotas</h1>
					<Link to="/booking">
						<button type="submit" className="btn btn-info btn-lg ml-5">
							Agendar una cita
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default BookingJumbotron;
