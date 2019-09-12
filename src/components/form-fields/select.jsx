import React from "react";
import PropTypes from "prop-types";

import styles from "./fields.module.scss";

const SelectField = ({
	options,
	id,
	handleChange,
	value,
	placeholder,
	isInvalid
}) => (
	<select
		className={`${isInvalid ? styles.error : ""}`}
		name={id}
		value={value}
		onChange={handleChange}
	>
		<option value='' disabled>
			{placeholder}
		</option>
		{options.map(option => {
			return (
				<option key={option} value={option} label={option}>
					{option}
				</option>
			);
		})}
	</select>
);

SelectField.propTypes = {
	handleChange: PropTypes.func.isRequired,
	options: PropTypes.array.isRequired,
	placeholder: PropTypes.string.isRequired,
	value: PropTypes.string,
	type: PropTypes.string,
	id: PropTypes.string
};

SelectField.defaultProps = {
	id: "interest",
	value: ""
};

export default SelectField;
