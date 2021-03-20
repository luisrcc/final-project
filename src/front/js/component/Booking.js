import React from "react";

export const Booking = () => (
	<div className="container pt-4">
		<div className="row justify-content-center">
			<div className="col-md-6 border p-4">
				<form>
					{/* <div className="form-row">
				<div className="form-group col-md-3">
					<input type="text" className="form-control" placeholder="First name" />
				</div>
				<div className="form-group col-md-3">
					<input type="text" className="form-control" placeholder="Last name" />
				</div>
			</div> */}
					<div className="form-row">
						<div className="form-group col-md-6">
							<label htmlFor="inputFirstName">Nombres</label>
							<input
								type="text"
								className="form-control"
								id="inputFirstName"
								placeholder="Nombres"
								required
							/>
						</div>
						<div className="form-group col-md-6">
							<label htmlFor="inputSurname">Apellidos</label>
							<input
								type="text"
								className="form-control"
								id="inputSurname"
								placeholder="Apellidos"
								required
							/>
						</div>
					</div>
					<div className="form-row">
						<div className="form-group col-md-6">
							<label htmlFor="inputPetName">Nombre de la mascota</label>
							<input type="text" className="form-control" id="inputPetName" required />
						</div>
						<div className="form-group col-md-6">
							<label htmlFor="inputPet">Mascota</label>
							<select id="inputPet" className="form-control">
								<option value="">None...</option>
								<option>Perro</option>
								<option>Gato</option>
							</select>
						</div>
					</div>

					<div className="form-row justify-content-center">
						<button type="submit" className="btn btn-info ">
							Reservar
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
);
