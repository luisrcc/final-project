import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { ButtonRegister } from "./ButtonRegister";
import { ButtonLogin } from "./ButtonLogin";
import { LogoutButton } from "./LogoutButton";

export const Navbar = () => {
	const { store } = useContext(Context);
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<Link to="/">
				<span className="navbar-brand">Brand</span>
			</Link>
			<div className="form-inline ml-auto">
				<Link to="/register">{!store.isLogged ? <ButtonRegister /> : null}</Link>
				<Link to="/login">{!store.isLogged ? <ButtonLogin /> : null}</Link>
				<Link to="/login">{store.isLogged ? <LogoutButton /> : null}</Link>
			</div>
		</nav>
	);
};
