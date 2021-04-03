import React, { Component, useState } from "react";
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import subDays from "date-fns/subDays";
import getDay from "date-fns/getDay";
import es from "date-fns/locale/es";
import PropTypes from "prop-types";

import "react-datepicker/dist/react-datepicker.css";

export const DateTimePicker = ({ currentDate, setCurrentDate }) => {
	const [startDate, setStartDate] = useState(setHours(setMinutes(currentDate, 30), 16));

	const isWeekday = date => {
		const day = getDay(date);
		return day !== 0 && day !== 6;
	};

	const handleChangeDateSelect = date => {
		console.log("fecha seleccionada");
		console.log(date);
		setCurrentDate(date);
	};

	return (
		<div className="form-row justify-content-center">
			<DatePicker
				selected={currentDate}
				onChange={date => handleChangeDateSelect(date)}
				filterDate={isWeekday}
				showTimeSelect
				excludeTimes={[
					setHours(setMinutes(new Date(), 0), 17),
					setHours(setMinutes(new Date(), 30), 18),
					setHours(setMinutes(new Date(), 30), 19),
					setHours(setMinutes(new Date(), 30), 17)
				]}
				excludeDates={[new Date(), subDays(new Date(), 1)]}
				placeholderText="Select a date other than today or yesterday"
				dateFormat="MMMM d, yyyy h:mm aa"
			/>
		</div>
	);
};

DateTimePicker.propTypes = {
	currentDate: PropTypes.instanceOf(Date),
	setCurrentDate: PropTypes.func
};
