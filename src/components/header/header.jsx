import React from "react";
import PropTypes from "prop-types";

import styles from "./header.module.scss";

const Header = ({ message, isSubheader }) => (
	<div className={isSubheader ? styles.subTitle : styles.title}>{message}</div>
);

Header.propTypes = {
	message: PropTypes.string.isRequired,
	isSubheader: PropTypes.bool
};

Header.defaultProps = {
	isSubheader: false
};

export default Header;
