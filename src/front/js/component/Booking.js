import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { DateTimePicker } from "./DateTimePicker";
import { Link } from "react-router-dom";

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
		<div className="container">
			<div className="row py-5 mt-4 align-items-center">
				<div className="col-md-7 col-lg-6 ml-auto border p-4">
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="row">
							<div className="input-group col-lg-6 mb-4">
								<div className="input-group-prepend">
									<span className="input-group-text bg-white px-4 border-md border-right-0">
										<i className="fa fa-user text-muted" />
									</span>
								</div>
								<input
									type="text"
									name="inputFirstName"
									className="form-control bg-white border-left-0 border-md"
									id="inputFirstName"
									placeholder="Ingrese su nombre"
									ref={register({ required: true })}
								/>
							</div>
							<div className="input-group col-lg-6 mb-4">
								<div className="input-group-prepend">
									<span className="input-group-text bg-white px-4 border-md border-right-0">
										<i className="fa fa-user text-muted" />
									</span>
								</div>
								<input
									type="text"
									name="inputSurname"
									className="form-control erase-outline"
									id="inputSurname"
									placeholder="Ingrese su apellido"
									ref={register({ required: true })}
								/>
							</div>
						</div>
						<div className="input-group col-lg-12 mb-4">
							<div className="input-group-prepend">
								<span className="input-group-text bg-white px-4 border-md border-right-0">
									<i className="fa fa-user text-muted" />
								</span>
							</div>
							<input
								type="text"
								name="inputPetName"
								className="form-control erase-outline"
								id="inputPetName"
								placeholder="Ingrese nombre de la mascota"
								ref={register({ required: true })}
							/>
						</div>
						<div className="input-group col-lg-12 mb-4">
							<div className="input-group-prepend">
								<span className="input-group-text bg-white px-4 border-md border-right-0">
									<i className="fa fa-phone-square text-muted" />
								</span>
							</div>
							<select
								id="inputPet"
								name="inputPet"
								className="form-control erase-outline"
								ref={register({ required: true })}>
								<option value="">Seleccione...</option>
								<option value="perro">Perro</option>
								<option value="gato">Gato</option>
							</select>
						</div>

						{/* {inputPet && (
                                    <div className="input-group col-lg-12 mb-4">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text bg-white px-4 border-md border-right-0">
                                                <i className="fa fa-black-tie text-muted" />
                                            </span>
                                        </div>                                
                                        <select
                                            id="inputSpeciality"
                                            name="inputSpeciality"
                                            className="form-control erase-outline"
                                            ref={register({ required: true })}>
                                            <option value="">Seleccione...</option>
                                            <option value="alergias">Veterinaria</option>
                                            <option value="general">Peluquería</option>
                                        </select>
                                    </div>
                                    <div className="input-group col-lg-12 mb-4">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text bg-white px-4 border-md border-right-0">
                                                <i className="fa fa-black-tie text-muted" />
                                            </span>
                                        </div>
                                        <select
                                            id="inputSpecialist"
                                            name="inputSpecialist"
                                            className="form-control erase-outline"
                                            ref={register({ required: true })}>
                                            <option value="">Seleccione...</option>
                                            <option value="doctor-1">Pedro Perez</option>
                                            <option value="doctor-2">German Gatica</option>
                                        </select>
                                    </div>
                                </div>
                            )} */}

						{inputSpecialist && <DateTimePicker />}
						<div className="form-row justify-content-center pt-4">
							<input disabled={isSubmitting} type="submit" />
						</div>

						<div className="form-row justify-content-center pt-4">
							<Link to="/">
								<span className="btn btn-info" href="#" role="button">
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
