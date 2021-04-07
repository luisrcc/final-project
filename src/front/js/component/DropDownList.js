import React, { useState } from "react";

//const DropDownList = ({ data, textField, idTextField, onChange, defaultItem, value, disabled, reference }) => {
const DropDownList = ({
	data,
	textField,
	idTextField,
	onChange,
	defaultItem,
	value,
	reference,
	titulo,
	nameDropDown
}) => {
	const renderOptions = data => {
		if (data !== null && data !== undefined) {
			return data.map((item, index) => (
				<option key={index + 1} value={JSON.stringify(item)}>
					{item[textField]}
				</option>
			));
		}
		return null;
	};

	const addDefaultItem = defaultItem => {
		return (
			<option key={0} value={0} selected>
				{defaultItem.nombre}
			</option>
		);
	};

	return (
		<>
			{/* <label htmlFor={nameDropDown}>{titulo}</label> */}
			<select
				id={nameDropDown}
				name={nameDropDown}
				className="form-control border-left-0 erase-outline"
				ref={reference}
				// id={textField}
				// name={textField}
				// className="form-control bg-white border-left-0 border-md"
				// ref={reference}

				onChange={onChange}>
				{addDefaultItem(defaultItem)}
				{renderOptions(data)}
			</select>
		</>
	);
};

export default DropDownList;
