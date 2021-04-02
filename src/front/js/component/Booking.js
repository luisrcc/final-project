import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useForm } from "react-hook-form";
import { DateTimePicker } from "./DateTimePicker";
import { Link } from "react-router-dom";
import moment from "moment";

export const Booking = () => {
	const { store, actions } = useContext(Context);
	const [pet, setPet] = useState("");
	const [currentDate, setCurrentDate] = useState(new Date());

	const {
		register,
		handleSubmit,
		watch,
		formState: { isSubmitting }
	} = useForm();
	const inputPet = watch("inputPet");
	const inputSpecialist = watch("inputSpecialist");

	// const handleSubmit = event => {
	// 	event.preventDefault();
	// 	// const request = {
	// 	//     petName: data.petName,
	// 	//     pet: data.pet,
	// 	//     speciality: data.speciality,
	// 	//     specialist: data.specialist,
	// 	//     date: data.date
	// 	// }
	// 	// actions.createNewAppointment(request);
	// 	console.log("entró al submit");
	// };

	const onSubmit = data => {
		console.log(data);
		const exampleDate = moment(currentDate).format("YYYY-MM-DD HH:mm:ss");
		console.log(exampleDate);
	};

	return (
		<div className="container pt-4">
			<div className="row justify-content-center">
				<div className="col-md-6 border p-4">
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="form-row justify-content-center">
							<div className="form-group col-md-5 border-bottom border-info mr-4">
								<input
									type="text"
									className="form-control border-0 erase-outline"
									id="inputPetName"
									placeholder="Ingrese nombre de la mascota"
									ref={register({ required: true })}
								/>
							</div>
							<div className="form-group col-md-5 border-bottom border-info mr-4">
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

						{inputSpecialist && (
							<DateTimePicker currentDate={currentDate} setCurrentDate={setCurrentDate} />
						)}
						<div className="form-row justify-content-center pt-4">
							<input type="submit" />
							{/* <button disabled={isSubmitting} className="btn btn-primary" type="submit">
								Enviar
							</button> */}
						</div>

						<div className="form-row justify-content-center pt-4">
							<Link to="/">
								<span className="btn btn-outline-info" href="#" role="button">
									Regresa
								</span>
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
