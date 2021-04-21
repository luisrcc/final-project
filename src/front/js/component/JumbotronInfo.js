import React, { useState } from "react";
import { Link } from "react-router-dom";
import catDog from "../../img/cat-dog-info.jpg";

const JumbotronInfo = () => {
	return (
		<div className="jumbotron jumbotron-info">
			<div className="container">
				<div className="jumbotron-info-content py-5 text-center">
					<h2 className="jumbotron-info-title text-uppercase">Veterinarios PetsVets</h2>
					<h1 className="jumbotron-info-title text-uppercase mb-3">....</h1>
					<p className="vets-info">
						En PetsVets, cada veterinario ama a su mascota como si fuesen nuestras. Para ayudarlos a
						prosperar y pasar tantos años con usted como sea posible, ofrecemos medicina personalizada que
						considera sus circunstancias únicas. Nuestro objetivo es conocerlos tan bien como usted y
						concentrarnos tanto tiempo como podamos en su cuidado y su educación.
					</p>
				</div>
				<div className="row">
					<div className="col-sm-10 col-md-10 col-lg-5">
						<img className="text-left info-image" src={catDog} />
					</div>
					<div className="col-sm-10 col-md-10 col-lg-5 mb-4">
						<div className="row">
							<div className="col-sm-1 col-md-1 col-lg-1">
								<i className="far fa-clock" />
							</div>
							<div className="col">
								<p>
									<ul className="delete-bullet-points m-0 p-0">
										<li>Lun - Vie: 8:30 am - 7:00 pm</li>
										<li>Sab - Dog: 9:00 am - 1:00 pm</li>
									</ul>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default JumbotronInfo;
