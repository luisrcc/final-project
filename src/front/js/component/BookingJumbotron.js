import React, { useState } from "react";
import { Link } from "react-router-dom";

const BookingJumbotron = () => {
	return (
		<div className="jumbotron jumbotron-fluid jumbotron-booking">
			<div className="container">
				<div className="jumbotron-booking-content p-lg-6 py-5">
					<h1 className="display-4">Tenemos todo para tus mascotas</h1>
					<Link to="/booking">
						<button type="submit" className="btn btn-info btn-lg">
							Agendar una cita
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default BookingJumbotron;
