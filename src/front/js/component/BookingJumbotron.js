import React, { useState } from "react";
import { Link } from "react-router-dom";

const BookingJumbotron = () => {
	return (
		<div className="jumbotron jumbotron-fluid jumbotron-booking">
			<div className="container">
				<div className="jumbotron-booking-content py-5">
					<h1 className="fs-5 booking-jumbotron-text">Tenemos lo mejor </h1>
					<h1 className="fs-5 booking-jumbotron-text pb-5">para tus mascotas</h1>

					{
						<Link to="/booking">
<<<<<<< HEAD
							<button type="submit" className="btn btn-outline-info btn-lg ml-5 book-appointment-button">
=======
							<button
								type="submit"
								className="btn btn-outline-info btn-lg ml-5 book-appointment-button"
								// onClick={e => handleClick(e)}
							>
>>>>>>> afab8151bd6f0cd2b2884fa6b238e06b43860278
								Agendar una cita
							</button>
						</Link>
					}
				</div>
			</div>
		</div>
	);
};

export default BookingJumbotron;
