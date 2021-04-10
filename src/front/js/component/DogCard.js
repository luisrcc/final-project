import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";


const DogCard = ({ item }) => {
    const { store } = useContext(Context);
    // const [breeds, setBreeds] = useState(initialBreeds);

    // const initialBreeds = [
    //     {
    //         id: 1,
    //         name: 'Labrador'
    //     }
    // ];

   

	return (
		<div className="card">
			<img className="card-img-top" src="https://via.placeholder.com/400/200/" alt="Card cap"></img>
			<div className="card-body">
				<h5 className="card-title"> {item.name}</h5>

				<div className="card-row d-flex justify-content-between">
					<div className="card-col">
						
					</div>

					<div className="card-col">
						
					</div>
				</div>
			</div>
		</div>
	);
};


export default Card;
