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
import BookingJumbotron from "../component/BookingJumbotron";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center my-5">
			<Carousel />

			<div className="justify-content-center my-5">
				<div className="ml-auto">
					<Link to="/booking">
						<BookingJumbotron />
					</Link>
				</div>
			</div>

			<div className="my-5">
				<Cards />
			</div>

			<div className="">
				<Reviews />
			</div>

			<div className="m-5">
				<ProductCards />
			</div>

			<div className="">
				<JoinUsBanner />
			</div>
		</div>
	);
};
