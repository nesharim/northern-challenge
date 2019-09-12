import React from "react";
import PropTypes from "prop-types";

import styles from "./fields.module.scss";
const InputField = ({ type, id, handleChange, value, isInvalid }) => (
	<input
		className={`${isInvalid ? styles.error : ""}`}
		type={type}
		name={id}
		onChange={handleChange}
		value={value}
		placeholder='Your Email Address *'
	/>
);

InputField.propTypes = {
	handleChange: PropTypes.func.isRequired,
	value: PropTypes.string,
	type: PropTypes.string,
	id: PropTypes.string
};

InputField.defaultProps = {
	value: "",
	id: "email",
	type: "text"
};

export default InputField;
