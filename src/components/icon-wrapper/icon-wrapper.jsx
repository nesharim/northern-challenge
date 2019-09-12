import React from "react";
import { IconContext } from "react-icons";

const IconWrapper = ({ className, children }) => {
	return (
		<IconContext.Provider value={{ className }}>
			<span>{children}</span>
		</IconContext.Provider>
	);
};

export default IconWrapper;
