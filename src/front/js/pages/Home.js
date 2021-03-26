import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Carousel } from "../component/Carousel";
import Cards from "../component/Cards";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>
			<Carousel />
			<p>
				<img src={rigoImageUrl} />
			</p>
			<div className="alert alert-info">{store.message || "Loading message from the backend..."}</div>

			<div className="justify-content-center">
				<div className="ml-auto">
					<Link to="/booking">
						<button type="submit" className="btn btn-info">
							Agendar una cita
						</button>
					</Link>
				</div>
			</div>

			<div className="">
				<Cards />
			</div>

			<p>
				This boilerplate comes with lots of documentation:{" "}
				<a href="https://github.com/4GeeksAcademy/react-flask-hello/tree/95e0540bd1422249c3004f149825285118594325/docs">
					Read documentation
				</a>
			</p>
		</div>
	);
};
