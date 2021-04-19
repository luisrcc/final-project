import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Button } from "bootstrap";

const TimeSelector = ({ timeList }) => {
	console.log(timeList);

	return (
		<div className="container">
			<div className="row">
				<div className="col-lg btn-block">
					<button type="button" className="btn btn-outline-success btn-lg btn-block">
						12:00
					</button>
				</div>
			</div>
			<div className="row">
				<div className="col-lg btn-block">
					<button type="button" className="btn btn-outline-success btn-lg btn-block">
						12:00
					</button>
				</div>
			</div>
		</div>
	);
};

export default TimeSelector;

TimeSelector.propTypes = {
	timeList: PropTypes.object
};
