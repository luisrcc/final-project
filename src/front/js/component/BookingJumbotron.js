import React, { useState } from "react";

const BookingJumbotron = () => {
	return (
		<div className="jumbotron jumbotron-fluid">
			<div className="container">
				<h1 className="display-4">Tenemos todo para tus mascotas</h1>
				<p className="lead my-4">
					<button type="submit" className="btn btn-info btn-lg">
						Agendar una cita
					</button>
				</p>
			</div>
		</div>
	);
};

export default BookingJumbotron;
