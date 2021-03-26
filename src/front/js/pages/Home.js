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
			<Carousel />

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
		</div>
	);
};
