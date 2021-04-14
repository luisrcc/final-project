import React, { Component, useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import subDays from "date-fns/subDays";
import getDay from "date-fns/getDay";
import es from "date-fns/locale/es";
import PropTypes from "prop-types";

import "react-datepicker/dist/react-datepicker.css";

export const DateTimePicker = ({ currentDate, setCurrentDate }) => {
	const [startDate, setStartDate] = useState(currentDate);

	const isWeekday = date => {
		const day = getDay(date);
		return day !== 0 && day !== 6;
	};

	const handleChangeDateSelect = date => {
		setCurrentDate(date);
	};

	return (
		<div className="form-row justify-content-center">
			<DatePicker
				selected={currentDate}
				onChange={date => handleChangeDateSelect(date)}
				filterDate={isWeekday}
				excludeDates={[new Date(), subDays(new Date(), 1)]}
				dateFormat="dd/MM/yyyy"
			/>
		</div>
	);
};

DateTimePicker.propTypes = {
	currentDate: PropTypes.instanceOf(Date),
	setCurrentDate: PropTypes.func
};
