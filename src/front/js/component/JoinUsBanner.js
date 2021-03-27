import React from "react";
import { ButtonRegister } from "./ButtonRegister";

const JoinUsBanner = () => {
	return (
		<div className="jumbotron jumbotron-fluid jumbotron-join-us p-0">
			<div className="container">
				<div className="content p-lg-6 py-5">
					<h1 className="display-4 join-us-text">Nos encantaria conecerte a ti y a tu mascota</h1>
					<h5 className="">
						<ButtonRegister />
					</h5>
				</div>
			</div>
		</div>
	);
};

export default JoinUsBanner;
