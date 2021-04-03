import React, { useContext, Fragment } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Carousel } from "../component/Carousel";
import Cards from "../component/Cards";
import Reviews from "../component/Reviews";
import ProductCards from "../component/ProductCards";
import JoinUsBanner from "../component/JoinUsBanner";
import BookingJumbotron from "../component/BookingJumbotron";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<div className="text-center">
				<Carousel />
			</div>

			<div className="justify-content-center">
				<div className="ml-auto">
					<BookingJumbotron />
				</div>
			</div>

			<div className="mx-auto my-5">
				<Cards />
			</div>

			<div className="reviews-component">
				<Reviews />
			</div>

			<div className="my-5">
				<ProductCards />
			</div>

			<div className="register-join-us-banner">
				<JoinUsBanner />
			</div>
		</>
	);
};
