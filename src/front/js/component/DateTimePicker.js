import React, { Component, useState } from "react";
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import subDays from "date-fns/subDays";
import getDay from "date-fns/getDay";
import es from "date-fns/locale/es";

import "react-datepicker/dist/react-datepicker.css";

export const DateTimePicker = () => {
	const [startDate, setStartDate] = useState(setHours(setMinutes(new Date(), 30), 16));

	const isWeekday = date => {
		const day = getDay(date);
		return day !== 0 && day !== 6;
	};

	return (
		<div className="form-row justify-content-center">
			<DatePicker
				selected={startDate}
				onChange={date => setStartDate(date)}
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
