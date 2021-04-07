import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useForm } from "react-hook-form";
import { DateTimePicker } from "./DateTimePicker";
import { Link } from "react-router-dom";
import moment from "moment";
import DropDownList from "./DropDownList";
import { useHistory } from "react-router-dom";

export const Booking = () => {
	const { store, actions } = useContext(Context);
	let history = useHistory();

	const [currentDate, setCurrentDate] = useState(new Date());

	const { register, errors, handleSubmit, watch } = useForm({ mode: "onChange" });

	const inputPet = watch("inputPet");
	const inputSpecialist = watch("inputSpecialist");
	const inputSpeciality = watch("inputSpeciality");

	// data hardcoded.
	const defaultItemEspecialidad = { nombre: "Seleccione especialidad..." };
	const defaultItemEspecialista = { nombre: "Seleccione especialista..." };
	const dataCategories = {
		dataEspecialidad: [{ nombre: "Veterinaria", especialidadId: 1 }, { nombre: "Peluquería", especialidadId: 2 }],
		dataEspecialista: [
			{ nombre: "Felipe Gutierrez", idEspecialista: 1, especialidadId: 1 },
			{ nombre: "Chang", idEspecialista: 2, especialidadId: 1 },
			{ nombre: "Aniseed Syrup", idEspecialista: 3, especialidadId: 2 },
			{ nombre: "Genen Shouyu", idEspecialista: 4, especialidadId: 2 }
		]
	};
	const [dropDownListData, setDropDownListData] = useState({
		especialidad: null,
		especialistas: dataCategories.dataEspecialista,
		especialista: null
	});

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
		const exampleDate = moment(currentDate).format("YYYY-MM-DD HH:mm:ss");
		const request = {
			user_id: 1,
			pet_name: data.inputPetName,
			pet: data.inputPet,
			speciality: dropDownListData.especialidad.nombre,
			specialist: dropDownListData.especialista.nombre,
			date: exampleDate
		};
		console.log(request);
		actions.createNewAppointment(request);
		history.push("/");
	};

	const isObjectExist = object => {
		if (object === null && object === undefined) return false;
		return true;
	};

	const especialidadChange = event => {
		const especialidad = JSON.parse(event.target.value);
		const datos = dataCategories.dataEspecialista;

		// if (parseInt(especialidad.especialidadId) > 0) {
		const especialistas = datos.filter(
			especialista => especialista.especialidadId === parseInt(especialidad.especialidadId)
		);
		setDropDownListData({
			especialidad: especialidad,
			especialistas: especialistas,
			especialista: null
		});
	};

	const especialistaChange = event => {
		const especialista = JSON.parse(event.target.value);
		setDropDownListData({
			...dropDownListData,
			especialista: especialista
		});
	};

	console.log("especialista");
	console.log(dropDownListData.especialista);

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
									<DropDownList
										data={dataCategories.dataEspecialidad}
										nameDropDown={"inputSpeciality"}
										textField={"nombre"}
										idTextField={"especialidadId"}
										defaultItem={defaultItemEspecialidad}
										onChange={especialidadChange}
										value={dropDownListData.especialidad}
										ref={register({ required: true })}
										titulo={"Especialidad"}
									/>
								</div>
								<div className="form-group col-md-5 border-bottom border-info mr-4">
									<DropDownList
										data={dropDownListData.especialistas}
										textField={"nombre"}
										nameDropDown={"inputSpecialist"}
										idTextField={"especialidadId"}
										defaultItem={defaultItemEspecialista}
										onChange={especialistaChange}
										value={dropDownListData.especialista}
										ref={register({ required: true })}
										titulo={"Especialista"}
									/>
								</div>
							</div>
						)}

						{dropDownListData.especialista && dropDownListData.especialista !== 0 ? (
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
						) : null}

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
