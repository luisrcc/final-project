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
		<div className="booking-background">
			<div className="container pt-4">
				<div className="row justify-content-center">
					<div className="col-md-5 pr-lg-5 mb-5 mb-md-0" />
					<div className="col-md-6 border p-4">
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="row justify-content-center">
								<div className="input-group col-md-6 mb-4">
									<div className="input-group-prepend">
										<span className="input-group-text bg-white px-4 border-md border-right-0">
											<i className="fa fa-paw text-muted" />
										</span>
									</div>
									<input
										type="email"
										className="form-control border-md border-left-0 erase-outline"
										id="inputPetName"
										name="inputPetName"
										placeholder="Ingrese nombre de la mascota"
										ref={register({
											required: true,
											maxLength: 20
										})}
									/>
								</div>
								<div className="input-group col-md-6 mb-4">
									<div className="input-group-prepend">
										<span className="input-group-text bg-white px-4 border-md border-right-0">
											<i className="fa fa-paw text-muted" />
										</span>
									</div>
									<DropDownList
										data={dataCategories.dataEspecialidad}
										textField={"nombre"}
										idTextField={"especialidadId"}
										defaultItem={defaultItemEspecialidad}
										onChange={especialidadChange}
									/>
								</div>
							</div>
							<div className="input-group col-md-6 mb-4">
								<select
									id="inputPet"
									name="inputPet"
									className="form-control border-md erase-outline"
									ref={register({ required: true })}>
									<option value="" selected>
										Seleccione...
									</option>
									<option value="perro">Perro</option>
									<option value="gato">Gato</option>
								</select>
							</div>
							{inputPet && (
								<div className="row justify-content-center">
									<div className="input-group col-md-5 mb-4">
										<div className="input-group-prepend">
											<span className="input-group-text bg-white px-4 border-md border-right-0">
												<i className="fa fa-user-md text-muted" />
											</span>
										</div>

										<select
											id="inputSpeciality"
											name="inputSpeciality"
											className="form-control border-md border-left-0 erase-outline"
											type="email"
											ref={register({ required: true })}>
											<option value="" selected>
												Seleccione...
											</option>
											<option value="alergias">Veterinaria</option>
											<option value="general">Peluquería</option>
										</select>
									</div>
									<div className="input-group col-md-5 mb-4">
										<div className="input-group-prepend">
											<span className="input-group-text bg-white px-4 border-md border-right-0">
												<i className="fa fa-user-md text-muted" />
											</span>
										</div>

										<select
											id="inputSpecialist"
											name="inputSpecialist"
											className="form-control border-md border-left-0 erase-outline"
											type="email"
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

									<div className="row justify-content-center pt-4">
										<button
											disabled={
												isObjectExist(errors) && Object.entries(errors).length === 0
													? false
													: true
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
		</div>
	);
};
