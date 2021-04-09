import React from "react";
import { Link } from "react-router-dom";
import { ButtonRegister } from "./ButtonRegister";
import { ButtonLogin } from "./ButtonLogin";
import { LogoutButton } from "./LogoutButton";
import { Roles } from "./Roles";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<Link to="/">
				<span className="navbar-brand">Brand</span>
			</Link>
			<div className="form-inline ml-auto">
				<Link to="/roles">
					<ButtonRegister />
				</Link>
				<Link to="/login">
					<ButtonLogin />
				</Link>
				<Link to="/login">
					<LogoutButton />
				</Link>
			</div>
		</nav>
	);
};
