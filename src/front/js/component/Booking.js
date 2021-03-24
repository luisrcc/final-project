import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { DateTimePicker } from "./DateTimePicker";

export const Booking = () => {
	const [pet, setPet] = useState("");

	const {
		register,
		handleSubmit,
		watch,
		formState: { isSubmitting }
	} = useForm();
	const inputPet = watch("inputPet");

	const onSubmit = data => {
		alert(JSON.stringify(data));
	};

	return (
		<div className="container pt-4">
			<div className="row justify-content-center">
				<div className="col-md-6 border p-4">
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="form-row">
							<div className="form-group col-md-6">
								<label htmlFor="inputFirstName">Nombres</label>
								<input
									type="text"
									className="form-control"
									id="inputFirstName"
									placeholder="Nombres"
									ref={register({ required: true })}
								/>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="inputSurname">Apellidos</label>
								<input
									type="text"
									className="form-control"
									id="inputSurname"
									placeholder="Apellidos"
									ref={register({ required: true })}
								/>
							</div>
						</div>
						<div className="form-row">
							<div className="form-group col-md-6">
								<label htmlFor="inputPetName">Nombre de la mascota</label>
								<input
									type="text"
									className="form-control"
									id="inputPetName"
									ref={register({ required: true })}
								/>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="inputPet">Mascota</label>
								<select
									id="inputPet"
									name="inputPet"
									className="form-control"
									ref={register({ required: true })}>
									<option value="">Seleccione...</option>
									<option value="perro">Perro</option>
									<option value="gato">Gato</option>
								</select>
							</div>
						</div>
						{inputPet && (
							<div className="form-row">
								<div className="form-group col-md-6">
									<label htmlFor="inputSpecialist">Elija Especialidad</label>
									<select
										id="inputSpecialist"
										className="form-control"
										ref={register({ required: true })}>
										<option value="">None...</option>
										<option value="alergias">Alergias</option>
										<option value="general">General</option>
									</select>
								</div>
								<div className="form-group col-md-6">
									<label htmlFor="inputSpeciality">Especialista</label>
									<select
										id="inputSpeciality"
										className="form-control"
										ref={register({ required: true })}>
										<option value="">None...</option>
										<option value="doctor-1">Pedro Perez</option>
										<option value="doctor-2">German Gatica</option>
									</select>
								</div>
							</div>
						)}

						<DateTimePicker />
						<div className="form-row justify-content-center pt-4">
							<input disabled={isSubmitting} type="submit" />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
