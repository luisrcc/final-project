import React from "react";
import { Link } from "react-router-dom";
import { ButtonRegister } from "./ButtonRegister";
import { ButtonLogin } from "./ButtonLogin";
import { LogoutButton } from "./LogoutButton";
import logo from "../../img/logo.jpg";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<Link to="/">
				<a href="/#" className="navbar-brand">
					<img src={logo} alt="logo" width="80" />
				</a>
			</Link>
			<div className="form-inline ml-auto">
				<Link to="/register">
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
