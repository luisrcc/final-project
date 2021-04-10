import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import cat from "../../img/cat-veterinari.jpeg";

const DogList = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.getDogApi();
	}, []);
	return (
		<div className="dog">
			<div
				className="llamadaDog"
				style={{
					minHeight: "600px"
				}}>
				<img className="" alt="Card image" />
				<div className="">
					<span>{JSON.stringify(store.getDog)}</span>
				</div>
			</div>
		</div>
	);
};

export default DogList;
