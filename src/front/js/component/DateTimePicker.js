import React, { Component, useState, forwardRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import subDays from "date-fns/subDays";
import getDay from "date-fns/getDay";
import es from "date-fns/locale/es";
import PropTypes from "prop-types";

import "react-datepicker/dist/react-datepicker.css";

export const DateTimePicker = ({ currentDate, setCurrentDate, dropDownListData }) => {
	const [startDate, setStartDate] = useState(currentDate);
	const [user, setUser] = useState(null);
	let userData = JSON.parse(localStorage.getItem("user"));

	const isWeekday = date => {
		const day = getDay(date);
		return day !== 0 && day !== 6;
	};

	const handleChangeDateSelect = async date => {
		if (dropDownListData.especialidad !== 0 && dropDownListData.especialidad !== 0) {
			console.log(dropDownListData);
			console.log(dropDownListData);

			const request = {
				id_speciality: dropDownListData.especialidad,
				id_specialist: dropDownListData.especialista,
				date: date,
				user_id: userData ? userData.id : null
			};

			console.log("request para action available hours");
			console.log(request);
		}
		await setCurrentDate(date);
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
	setCurrentDate: PropTypes.func,
	dropDownListData: PropTypes.object
};
