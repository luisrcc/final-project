import React, { useState } from "react";
import petShop1 from "../../img/pet-shop1.jpg";
import petShop2 from "../../img/pet-shop2.jpg";
import petShop3 from "../../img/pet-shop3.jpg";
import Card from "./Card";
import PropTypes from "prop-types";

const Cards = ({ title, content, url, buttonName }) => {
	const [cards] = useState([
		{
			title: "petShop1",
			content: "",
			url: petShop1,
			buttonName: "Conozca nuestros servicios"
		},
		{
			title: "petShop2",
			content: "",
			url: petShop2,
			buttonName: "Conozca nuestros servicios"
		},
		{
			title: "petShop3",
			content: "",
			url: petShop3,
			buttonName: "Conozca nuestros servicios"
		}
	]);

	return (
		<div className="row justify-content-center mt-4">
			{cards.map((card, index) => (
				<Card
					key={index}
					title={card.title}
					content={card.content}
					url={card.url}
					buttonName={card.buttonName}
				/>
			))}
		</div>
	);
};

Cards.propTypes = {
	title: PropTypes.string,
	content: PropTypes.string,
	url: PropTypes.string,
	buttonName: PropTypes.string
};

export default Cards;
