import React from "react";
import PropTypes from "prop-types";

import styles from "./paragraph.module.scss";

const Paragraph = ({ textContent }) => (
	<p className={styles.paragraph}>{textContent}</p>
);

Paragraph.propTypes = {
	textContent: PropTypes.string.isRequired
};

export default Paragraph;
