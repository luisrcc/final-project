import React, { useState } from "react";
import { Link } from "react-router-dom";
import catDog from "../../img/cat-dog-info.jpg";

const JumbotronInfo = () => {
	return (
		<div className="jumbotron jumbotron-fluid jumbotron-info">
			<div className="container">
				<div className="jumbotron-info-content py-5 text-center">
					<h2 className="fs-5 jumbotron-info-title text-uppercase">Veterinarios PetsVets</h2>
					<h1 className="fs-5 jumbotron-info-title text-uppercase mb-3">....</h1>
					<p>
						En PetsVets, cada veterinario ama a su mascota como si fuesen nuestras. Para ayudarlos a
						prosperar y pasar tantos años con usted como sea posible, ofrecemos medicina personalizada que
						considera sus circunstancias únicas. Nuestro objetivo es conocerlos tan bien como usted y
						concentrarnos tanto tiempo como podamos en su cuidado y su educación.
					</p>
				</div>
				<div className="row">
					<div className="col">
						<img className="text-left" src={catDog} />
					</div>
					<div className="col">
						<div className="row">
							<div className="col">
								<i className="far fa-clock" />
							</div>
							<div className="col">
								<p>
									<ul className="delete-bullet-points">
										<li>Lun - Vie: 7:30 am - 6:00 pm</li>
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
