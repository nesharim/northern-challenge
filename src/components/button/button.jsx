import React from "react";
import PropTypes from "prop-types";

import { FaCaretRight, FaSpinner } from "react-icons/fa";

import { IconWrapper } from "components/icon-wrapper";

import styles from "./button.module.scss";

const Button = ({ name, handleClick, isLoading }) => {
	const className = isLoading ? styles["icon-spin"] : styles.icon;
	return (
		<button onClick={handleClick}>
			{name}
			<IconWrapper className={className}>
				{isLoading ? <FaSpinner /> : <FaCaretRight />}
			</IconWrapper>
		</button>
	);
};

Button.propTypes = {
	name: PropTypes.string.isRequired,
	isLoading: PropTypes.bool.isRequired,
	handleClick: PropTypes.func
};

export default Button;
