import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useForm } from "react-hook-form";
import { DateTimePicker } from "./DateTimePicker";
import { Link } from "react-router-dom";
import moment from "moment";
import DropDownList from "./DropDownList";

export const Booking = () => {
	const { store, actions } = useContext(Context);

	const [currentDate, setCurrentDate] = useState(new Date());
	const [dropDownListData, setDropDownListData] = useState({
		especialidad: null,
		especialistas: null
	});

	const { register, errors, handleSubmit, watch } = useForm({ mode: "onChange" });

	const inputPet = watch("inputPet");
	const inputSpecialist = watch("inputSpecialist");

	// data hardcoded.
	const defaultItemEspecialidad = { nombre: "Seleccione especialidad..." };
	const dataCategories = {
		dataEspecialidad: [{ nombre: "Veterinaria", especialidadId: 1 }, { nombre: "Peluquería", especialidadId: 2 }],
		dataEspecialista: [
			{ nombre: "Felipe Gutierrez", idEspecialista: 1, especialidadId: 1 },
			{ nombre: "Chang", idEspecialista: 2, especialidadId: 1 },
			{ nombre: "Aniseed Syrup", idEspecialista: 3, especialidadId: 2 },
			{ nombre: "Genen Shouyu", idEspecialista: 4, especialidadId: 2 }
		]
	};

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
		console.log("errors");
		console.log(errors);
	};

	const isObjectExist = object => {
		if (object === null && object === undefined) return false;
		return true;
	};

	const especialidadChange = event => {
		const especialidad = JSON.parse(event.target.value);
		const datos = dataCategories.dataEspecialista;

		if (parseInt(especialidad.especialidadId) > 0) {
			const especialistas = datos.filter(
				especialista => especialista.especialidadId === parseInt(especialidad.especialidadId)
			);

			setDropDownListData({
				especialidad: especialidad,
				especialistas: null
			});
		} else {
			setDropDownListData({
				especialidad: null,
				especialistas: dataCategories.dataEspecialista
			});
		}
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
									name="inputPetName"
									placeholder="Ingrese nombre de la mascota"
									ref={register({
										required: true,
										maxLength: 20
									})}
								/>

								<DropDownList
									data={dataCategories.dataEspecialidad}
									textField={"nombre"}
									idTextField={"especialidadId"}
									defaultItem={defaultItemEspecialidad}
									onChange={especialidadChange}
								/>
							</div>
							<div className="form-group col-md-5 border-bottom border-info mr-4">
								<select
									id="inputPet"
									name="inputPet"
									className="form-control border-0 erase-outline"
									ref={register({ required: true })}>
									<option value="" selected>
										Seleccione...
									</option>
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
										<option value="" selected>
											Seleccione...
										</option>
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
										<option value="" selected>
											Seleccione...
										</option>
										<option value="doctor-1">Pedro Perez</option>
										<option value="doctor-2">German Gatica</option>
									</select>
								</div>
							</div>
						)}

						{inputSpecialist && (
							<>
								<DateTimePicker currentDate={currentDate} setCurrentDate={setCurrentDate} />

								<div className="form-row justify-content-center pt-4">
									<button
										disabled={
											isObjectExist(errors) && Object.entries(errors).length === 0 ? false : true
										}
										className="btn btn-info"
										type="submit">
										Reservar
									</button>
								</div>
							</>
						)}

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
