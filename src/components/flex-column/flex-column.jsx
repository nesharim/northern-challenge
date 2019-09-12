import React from "react";
import PropTypes from "prop-types";

import styles from "./flex-column.module.scss";

const FlexColumn = ({ children }) => (
	<div className={styles.flexColumn}>{children}</div>
);

FlexColumn.propTypes = {
	children: PropTypes.any.isRequired
};

export default FlexColumn;
