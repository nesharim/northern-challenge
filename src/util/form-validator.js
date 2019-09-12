import isEmail from "validator/lib/isEmail";

import * as constants from "app-constants";

export const validateForm = ({ email = "", interest = "" }) => {
	let emailErrorMsg = "";
	let interestErrorMsg = "";
	if (!isEmail(email)) {
		emailErrorMsg = constants.emailErrorMessage;
	}
	if (interest.trim() === "") {
		interestErrorMsg = constants.interestErrorMessage;
	}

	return { emailErrorMsg, interestErrorMsg };
};
