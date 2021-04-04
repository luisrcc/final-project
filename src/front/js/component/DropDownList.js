import React, { useState } from "react";

//const DropDownList = ({ data, textField, idTextField, onChange, defaultItem, value, disabled, reference }) => {
const DropDownList = ({ data, textField, idTextField, onChange, defaultItem }) => {
	// 1 - llenar el select con la data correspondiente. .map(), para ello crear una function que renderize las options.

	const renderOptions = data => {
		return data.map((item, index) => (
			<option key={index + 1} value={JSON.stringify(item)}>
				{item[textField]}
			</option>
		));
	};

	const addDefaultItem = defaultItem => {
		return defaultItem ? (
			<option key={0} value={0} selected>
				{defaultItem.nombre}
			</option>
		) : null;
	};

	return (
		<>
			<select
				id={textField}
				name={textField}
				className="form-control bg-white border-left-0 border-md"
				// ref={reference}
				onChange={onChange}>
				{addDefaultItem(defaultItem)}
				{renderOptions(data)}
			</select>
		</>
	);
};

export default DropDownList;
