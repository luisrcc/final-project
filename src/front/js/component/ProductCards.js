import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import cat from "../../img/cat-veterinari.jpeg";

const DogList = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.getDogApi();
	}, []);
	return (
		<div className="cards">
			{!!store.getDog &&
				store.getDog.map((item, index) => (
					<div
						className="card"
						key={index}
						style={{
							width: "300px"
						}}>
						<img className="card-img-top" src={cat} alt="Card image" />
						<div className="card-body">
							<h4 className="card-title">{item.name}</h4>
						</div>
					</div>
				))}
		</div>
	);
};

export default DogList;
