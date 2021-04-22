import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Button } from "bootstrap";

const TimeSelector = ({ handleClick }) => {
	const { store } = useContext(Context);

	let listTimesAvailable = store.listTimesAvailable;

	return (
		<div className="container">
			{listTimesAvailable !== undefined && listTimesAvailable !== null && listTimesAvailable.length > 0 ? (
				listTimesAvailable.map((item, index) => {
					return (
						<div key={index} className="row">
							<div className="col-lg btn-block">
								<button
									type="button"
									className="btn btn-outline-success btn-lg btn-block"
									value={item.id}
									onClick={e => handleClick(e)}>
									{item.time}
								</button>
							</div>
						</div>
					);
				})
			) : (
				<div className="row">
					<div className="col-lg btn-block">
						<button type="button" className="btn btn-outline-success btn-lg btn-block">
							{"No existen horas disponibles"}
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default TimeSelector;

TimeSelector.propTypes = {
	timeList: PropTypes.object,
	handleClick: PropTypes.func
};
