import React, { Fragment } from "react";

export const ProfileButton = () => {
	return (
		<>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbar-list-4"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbar-list-4">
				<ul className="navbar-nav">
					<li className="nav-item dropdown">
						<a
							className="nav-link dropdown-toggle"
							href="#"
							id="navbarDropdownMenuLink"
							role="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							<img
								src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg"
								width="40"
								height="40"
								className="rounded-circle"
							/>
						</a>
						<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
							<a className="dropdown-item" href="#">
								Perfil
							</a>
							{/* <a className="dropdown-item" href="#">Edit Profile</a> */}
							<a className="dropdown-item" href="#">
								Cerrar sesión
							</a>
						</div>
					</li>
				</ul>
			</div>
		</>
	);
};
