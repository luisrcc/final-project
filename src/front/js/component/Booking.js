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
	const inputSpecialist = watch("inputSpecialist");

	const onSubmit = data => {
		alert(JSON.stringify(data));
	};

	return (
		<div className="container pt-4">
			<div className="row justify-content-center">
				<div className="col-md-6 border p-4">
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="form-row justify-content-center">
							<div className="form-group col-md-5 border-bottom border-info mr-4">
								<label htmlFor="inputFirstName">Nombres</label>
								<input
									type="text"
									className="form-control border-0 input-outline"
									id="inputFirstName"
									placeholder="Ingrese su nombre"
									ref={register({ required: true })}
								/>
							</div>
							<div className="form-group col-md-5 border-bottom border-info mr-4">
								<label htmlFor="inputSurname">Apellidos</label>
								<input
									type="text"
									className="form-control border-0 erase-outline"
									id="inputSurname"
									placeholder="Ingrese su apellido"
									ref={register({ required: true })}
								/>
							</div>
						</div>
						<div className="form-row justify-content-center">
							<div className="form-group col-md-5 border-bottom border-info mr-4">
								<label htmlFor="inputPetName">Nombre de la mascota</label>
								<input
									type="text"
									className="form-control border-0 erase-outline"
									id="inputPetName"
									placeholder="Ingrese nombre de la mascota"
									ref={register({ required: true })}
								/>
							</div>
							<div className="form-group col-md-5 border-bottom border-info mr-4">
								<label htmlFor="inputPet">Mascota</label>
								<select
									id="inputPet"
									name="inputPet"
									className="form-control border-0 erase-outline"
									ref={register({ required: true })}>
									<option value="">Seleccione...</option>
									<option value="perro">Perro</option>
									<option value="gato">Gato</option>
								</select>
							</div>
						</div>
						{inputPet && (
							<div className="form-row justify-content-center">
								<div className="form-group col-md-5 border-bottom border-info mr-4">
									<label htmlFor="inputSpeciality">Elija Especialidad</label>
									<select
										id="inputSpeciality"
										name="inputSpeciality"
										className="form-control border-0 erase-outline"
										ref={register({ required: true })}>
										<option value="">Seleccione...</option>
										<option value="alergias">Veterinaria</option>
										<option value="general">Peluquería</option>
									</select>
								</div>
								<div className="form-group col-md-5 border-bottom border-info mr-4">
									<label htmlFor="inputSpecialist">Especialista</label>
									<select
										id="inputSpecialist"
										name="inputSpecialist"
										className="form-control border-0 erase-outline"
										ref={register({ required: true })}>
										<option value="">Seleccione...</option>
										<option value="doctor-1">Pedro Perez</option>
										<option value="doctor-2">German Gatica</option>
									</select>
								</div>
							</div>
						)}

						{inputSpecialist && <DateTimePicker />}
						<div className="form-row justify-content-center pt-4">
							<input disabled={isSubmitting} type="submit" />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
