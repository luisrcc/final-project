import React from "react";
import { useParams, Link } from "react-router-dom";
import { imgProfile } from "../../img/photoProfile.png";

export const ProfilePage = () => {
	const { first_name } = useParams();
	return (
		<div className="container">
			<div className="main-body">
				<div className="row gutters-sm">
					<div className="col-md-4 mb-3">
						<div className="card">
							<div className="card-body">
								<div className="d-flex flex-column align-items-center text-center">
									<img
										src="https://bootdey.com/img/Content/avatar/avatar3.png"
										alt="Admin"
										className="rounded-circle"
										width="150"
									/>
									<div className="mt-3">
										<h4>John Doe</h4>
										<p className="text-secondary mb-1">Full Stack Developer</p>
										<p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
										{/* <button className="btn btn-primary">Follow</button> */}
										<Link to="/booking">
											<button className="btn btn-outline-info">Reserva tu Hora</button>
										</Link>
										<hr />
										<Link to="#">
											<button className="btn btn-outline-danger btn-sm">Cancela tu Hora</button>
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="card mt-3">
							<ul className="list-group list-group-flush">
								<li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
									<h6 className="mb-0">
										<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
										TikTok
									</h6>
									<span className="text-secondary">bootdey</span>
								</li>
								<li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
									<h6 className="mb-0">
										<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
										Twitter
									</h6>
									<span className="text-secondary">@bootdey</span>
								</li>
								<li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
									<h6 className="mb-0">
										<rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
										<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
										<line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
										Instagram
									</h6>
									<span className="text-secondary">bootdey</span>
								</li>
								<li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
									<h6 className="mb-0">
										<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
										Facebook
									</h6>
									<span className="text-secondary">bootdey</span>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-md-8">
						<div className="card mb-3">
							<div className="card-body">
								<div className="row">
									<div className="col-sm-3">
										<h6 className="mb-0">Full Name</h6>
									</div>
									<div className="col-sm-9 text-secondary">Kenneth Valdez</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h6 className="mb-0">Email</h6>
									</div>
									<div className="col-sm-9            text-secondary">fip@jukmuh.al</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h6 className="mb-0">Phone</h6>
									</div>
									<div className="col-sm-9 text-secondary">(239) 816-9029</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h6 className="mb-0">Mobile</h6>
									</div>
									<div className="col-sm-9 text-secondary">(320) 380-4539</div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-3">
										<h6 className="mb-0">Address</h6>
									</div>
									<div className="col-sm-9 text-secondary">Bay Area, San Francisco, CA</div>
								</div>
							</div>
						</div>
						<div className="card mb-3">
							<div className="card-body">
								<h4>Hola, tienes 1 reserva hecha</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
