import React from "react";
import { Link } from "react-router-dom";
import { ButtonRegister } from "./ButtonRegister";
import { ButtonLogin } from "./ButtonLogin";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<Link to="/">
				<span className="navbar-brand">Brand</span>
			</Link>
			<div className="form-inline ml-auto">
				<Link to="/register">
					<ButtonRegister />
				</Link>
				<Link to="/login">
					<ButtonLogin />
				</Link>
			</div>
		</nav>
	);
};
