import React from "react";
import catBanner from "../../img/cat-banner.jpg";
import { ButtonRegister } from "./ButtonRegister";

const JoinUsBanner = () => {
	return (
		<div className="container-fluid">
			<div className="card mt-3 border-0 w-100">
				<div className="">
					<div className="">
						<img width={1400} height={500} src={catBanner} />
					</div>
					<div className="card-img-overlay">
						<div className="card-body text-left">
							<h5 className="card-title pl-4">Nos encantaria conecerte a ti y a tu mascota</h5>
							<h5 className="card-title pl-4">
								<ButtonRegister />
							</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default JoinUsBanner;
