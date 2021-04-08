import React from "react";
import { useParams, Link } from "react-router-dom";
import { imgProfile } from "../../img/photoProfile.png";

export const ProfilePage = () => {
	const { first_name } = useParams();
	return (
		<div className="container">
			<div className="boxDatos">
				<div className="row">
					<div className="col-sm-4">
						<h1>Bienvenido</h1>
					</div>
					<div className="col-sm-8">
						<h1>Usuario</h1>
					</div>
					<div className="photoProfile">
						<img src={imgProfile} />
					</div>
					<div className="col-sm-4">Tu Informacion</div>
					<div className="col-sm-8"> Reservas</div>
				</div>
			</div>
		</div>
	);
};
