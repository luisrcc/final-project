import React, { useContext, Fragment } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Carousel } from "../component/Carousel";
import Cards from "../component/Cards";
import Reviews from "../component/Reviews";
import DogList from "../component/DogList";
import JoinUsBanner from "../component/JoinUsBanner";
import BookingJumbotron from "../component/BookingJumbotron";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<div className="text-center">
				<div className="ml-auto">
					<Carousel />
				</div>
			</div>

			<div className="mx-auto my-5">
				<Cards />
			</div>

			<div className="reviews-component">
				<Reviews />
			</div>

			<div className="mx-auto my-5">
				<DogList breeds={store.breeds} />
			</div>

			<div className="register-join-us-banner">
				<JoinUsBanner />
			</div>
		</>
	);
};
