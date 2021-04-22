import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useForm } from "react-hook-form";
import { DateTimePicker } from "./DateTimePicker";
import { Link } from "react-router-dom";
import moment from "moment";
import DropDownList from "./DropDownList";
import TimeSelector from "./TimeSelector";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

export const Booking = () => {
	const { store, actions } = useContext(Context);
	let history = useHistory();

	const [currentDate, setCurrentDate] = useState(null);

	const { register, errors, handleSubmit, watch } = useForm({ mode: "onChange" });

	const userData = JSON.parse(localStorage.getItem("user"));

	const inputPet = watch("inputPet");
	const inputPetName = watch("inputPetName");
	const inputSpecialist = watch("inputSpecialist");
	const inputSpeciality = watch("inputSpeciality");

	const defaultItemEspecialidad = { nombre: "Seleccione especialidad..." };
	const defaultItemEspecialista = { nombre: "Seleccione especialista..." };

	const dataEspecialidades = store.dataEspecialities ? store.dataEspecialities.specialities : [];
	const dataEspecialistas = store.dataEspecialities ? store.dataEspecialities.specialists : [];

	const [dropDownListData, setDropDownListData] = useState({
		especialidad: 0,
		especialistas: null,
		especialista: 0
	});

	// const onSubmit = async data => {
	// 	const exampleDate = moment(currentDate).format("YYYY-MM-DD HH:mm:ss");
	// 	const request = {
	// 		user_id: 1,
	// 		pet_name: data.inputPetName,
	// 		pet: data.inputPet,
	// 		speciality: dropDownListData.especialidad.id,
	// 		specialist: dropDownListData.especialista.name,
	// 		date: exampleDate
	// 	};

	// 	const response = await actions.createNewAppointment(request);
	// 	if (!response.ok) {
	// 		Swal.fire({
	// 			title: "Hubo un Error!",
	// 			text: "Favor reintente la operación",
	// 			icon: "error",
	// 			confirmButtonText: "Continuar"
	// 		}).then(() => {
	// 			history.push("/");
	// 		});
	// 	} else {
	// 		Swal.fire({
	// 			title: "Hora Agendada con éxito",
	// 			text: "¿Deseas continuar?",
	// 			icon: "success",
	// 			confirmButtonText: "Continuar"
	// 		}).then(() => {
	// 			history.push("/");
	// 		});
	// 	}
	// };

	const isObjectExist = object => {
		if (object === null && object === undefined) return false;
		return true;
	};

	const especialidadChange = event => {
		const especialidad = JSON.parse(event.target.value);
		const datos = dataEspecialistas;
		const especialistas = datos.filter(especialista => especialista.speciality_id === parseInt(especialidad));

		setDropDownListData({
			especialidad: especialidad,
			especialistas: especialistas.length > 0 ? especialistas : [],
			especialista: 0
		});
	};

	const especialistaChange = event => {
		const especialista = JSON.parse(event.target.value);
		setDropDownListData({
			...dropDownListData,
			especialista: especialista
		});
		setCurrentDate(null);
	};

	const handleChangeInputPet = () => {
		setDropDownListData({
			especialidad: 0,
			especialistas: null,
			especialista: 0
		});
	};

	const handleClickReservar = async e => {
		e.preventDefault();

		const exampleDate = moment(currentDate).format("YYYY-MM-DD");
		const request = {
			user_id: userData.id,
			speciality_id: dropDownListData.especialidad,
			specialist_id: dropDownListData.especialista,
			working_hour_id: parseInt(e.target.value),
			pet_name: inputPetName,
			pet: inputPet,
			date: exampleDate
		};

		const response = await actions.createNewAppointment(request);
		if (!response.ok) {
			Swal.fire({
				title: "Hubo un Error!",
				text: "Favor reintente la operación",
				icon: "error",
				confirmButtonText: "Continuar"
			}).then(() => {
				history.push("/");
			});
		} else {
			Swal.fire({
				title: "Hora Agendada con éxito",
				text: "¿Deseas continuar?",
				icon: "success",
				confirmButtonText: "Continuar"
			}).then(() => {
				history.push("/");
			});
		}
	};

	return (
		<div className="booking-background">
			<div className="container pt-4">
				<div className="row justify-content-center">
					<div className="col-md-6 border p-4">
						{/* <form onSubmit={handleSubmit(onSubmit)}> */}
						<form>
							<div className="row justify-content-center">
								<div className="input-group col-md-6 mb-4">
									<div className="input-group-prepend">
										<span className="input-group-text bg-white px-4 border-md border-right-0">
											<i className="fa fa-paw text-muted" />
										</span>
									</div>
									<input
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
									<select
										id="inputPet"
										name="inputPet"
										className="form-control border-md border-left-0 erase-outline"
										ref={register({ required: true })}
										onChange={() => handleChangeInputPet()}>
										<option value="" selected>
											Seleccione...
										</option>
										<option value="perro">Perro</option>
										<option value="gato">Gato</option>
									</select>
								</div>
							</div>

							{inputPet && (
								<div className="row justify-content-center">
									<div className="input-group col-md-6 mb-4">
										<div className="input-group-prepend">
											<span className="input-group-text bg-white border-md border-right-0">
												<i className="fa fa-user-md text-muted" />
											</span>
										</div>
										<DropDownList
											data={dataEspecialidades}
											nameDropDown={"inputSpeciality"}
											textField={"name"}
											idTextField={"id"}
											defaultItem={defaultItemEspecialidad}
											onChange={especialidadChange}
											value={
												dropDownListData.especialidad === 0
													? dropDownListData.especialidad
													: dropDownListData.especialidad
														? dropDownListData.especialidad.id
														: 0
											}
											ref={register({ required: true })}
											titulo={"Especialidad"}
										/>
									</div>
									<div className="input-group col-md-6 mb-4">
										<div className="input-group-prepend">
											<span className="input-group-text bg-white border-md border-right-0">
												<i className="fa fa-user-md text-muted" />
											</span>
										</div>
										<DropDownList
											data={dropDownListData.especialistas}
											textField={"name"}
											nameDropDown={"inputSpecialist"}
											idTextField={"speciality_id"}
											defaultItem={defaultItemEspecialista}
											onChange={especialistaChange}
											value={
												dropDownListData.especialista === 0
													? dropDownListData.especialista
													: dropDownListData.especialista.id
											}
											ref={register({ required: true })}
											titulo={"Especialista"}
										/>
									</div>
								</div>
							)}

							{dropDownListData.especialista && dropDownListData.especialista !== 0 ? (
								<>
{/*<<<<<<< responsive-design
									<DateTimePicker currentDate={currentDate} setCurrentDate={setCurrentDate} />

									<div className="row justify-content-center pt-4">
										<button
											disabled={
												isObjectExist(errors) && Object.entries(errors).length === 0
													? false
													: true
											}
											className="btn btn-info reponsive-button"
											type="submit">
											Reservar {console.log(process.env.BACKEND_URL)}
										</button>
									</div>
======= */}
									<DateTimePicker
										currentDate={currentDate}
										setCurrentDate={setCurrentDate}
										dropDownListData={dropDownListData}
									/>
									<TimeSelector handleClick={handleClickReservar} />
{/*>>>>>>> develop */}
								</>
							) : null}
							<div className="row justify-content-center pt-4">
								<Link to="/">
									<span className="btn btn-outline-info reponsive-button" href="#" role="button">
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
