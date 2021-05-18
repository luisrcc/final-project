import React from "react";
import PropTypes from "prop-types";
import { PROFILE_CODE_CLIENT, PROFILE_CODE_PROFESIONAL } from "../constantes/index";

const BookedHoursList = ({ perfilId }) => {
	const getTableClientHours = () => {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th scope="col">N°</th>
						<th scope="col">Nombre Mascota</th>
						<th scope="col">Fecha Agendada</th>
						<th scope="col">Hora</th>
						<th scope="col">Especialidad</th>
						<th scope="col">Especialista</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">1</th>
						<td>Wilson3</td>
						<td>2021-05-19</td>
						<td>08:00:00</td>
						<td>Veterinaria</td>
						<td>Fabian Donoso</td>
					</tr>
				</tbody>
			</table>
		);
	};

	const getTableProfessionalHours = () => {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th scope="col">N°</th>
						<th scope="col">Nombre Mascota</th>
						<th scope="col">Fecha Agendada</th>
						<th scope="col">Hora</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">1</th>
						<td>Wilson3</td>
						<td>2021-05-19</td>
						<td>08:00:00</td>
					</tr>
				</tbody>
			</table>
		);
	};

	const renderList = perfilId => {
		if (perfilId == PROFILE_CODE_CLIENT) {
			return getTableClientHours();
		}
		if (perfilId == PROFILE_CODE_PROFESIONAL) {
			return getTableProfessionalHours();
		}
		return null;
	};

	return <div>{renderList(perfilId)}</div>;
};

export default BookedHoursList;

BookedHoursList.propTypes = {
	perfilId: PropTypes.integer
};
