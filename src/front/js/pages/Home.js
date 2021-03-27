import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Carousel } from "../component/Carousel";
import Cards from "../component/Cards";
import Reviews from "../component/Reviews";
import ProductCards from "../component/ProductCards";
import JoinUsBanner from "../component/JoinUsBanner";

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

			<div className="container-fluid">
				<Reviews />
			</div>

			<div className="m-5">
				<ProductCards />
			</div>

			<div className="container-fluid">
				<JoinUsBanner />
			</div>
		</div>
	);
};
