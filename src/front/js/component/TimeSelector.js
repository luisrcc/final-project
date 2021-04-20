import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Button } from "bootstrap";

const TimeSelector = () => {
	const { store } = useContext(Context);

	let listTimesAvailable = store.listTimesAvailable;

	return (
		<div className="container">
			{listTimesAvailable !== undefined && listTimesAvailable !== null ? (
				listTimesAvailable.map((item, index) => {
					return (
						<div key={index} className="row">
							<div className="col-lg btn-block">
								<button type="button" className="btn btn-outline-success btn-lg btn-block">
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
	timeList: PropTypes.object
};
