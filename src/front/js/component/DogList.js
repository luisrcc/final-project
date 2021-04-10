import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import cat from "../../img/cat-veterinari.jpeg";
import PropTypes from "prop-types";

const DogList = breeds => {
	// const { store, actions } = useContext(Context);
	// useEffect(() => {
	// 	actions.getDogApi();
	// }, []);
	return (
		<div className="dog">
			<div
				className="llamadaDog"
				// style={{
				// 	minHeight: "600px"
				// }}
			>
				<img className="" alt="Card image" />
				<div className="card-deck">
					{breeds.map((item, index) => {
						return (
							<div className="card" key={index} item={item} value={item.id}>
								{item.bred_for}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

DogList.propTypes = {
	breeds: PropTypes.shape([
		{
			id: PropTypes.string,
			name: PropTypes.string
		}
	])
};

export default DogList;
