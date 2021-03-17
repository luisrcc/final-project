import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<Link to="/">
				<span className="navbar-brand">Brand</span>
			</Link>
			<div className="navbar-nav">
				<ul className="navbar-nav mr-auto">
					<li className="active">
						<Link className="nav-link" to="/Features">
							<span>Features</span>
						</Link>
					</li>
					<li className="active">
						<Link className="nav-link" to="/Pricing">
							<span>Pricing</span>
						</Link>
					</li>
					<li className="active">
						<Link className="nav-link" to="/Community">
							<span>Community</span>
						</Link>
					</li>
					<li className="active">
						<Link className="nav-link" to="/Support">
							<span>Support</span>
						</Link>
					</li>
				</ul>
			</div>
			<div className="ml-auto">
				<Link to="/Login">
					<button type="button" className="btn btn-outline-primary btn-sm" style={{ marginRight: "10px" }}>
						Log in
					</button>
					<button type="button" className="btn btn-primary btn-sm">
						Register
					</button>
				</Link>
			</div>
		</nav>
	);
};
