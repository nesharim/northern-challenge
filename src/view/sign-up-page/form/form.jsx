import React, { useContext } from "react";

import { InputField, SelectField } from "components/form-fields";
import { Button } from "components/button";

import useForm from "hooks/form-hook";
import SignUpPageContext from "context/sign-up-page/context";

import * as constants from "app-constants";

import styles from "./form.module.scss";

const initialState = {
	email: "",
	interest: ""
};

const SignUpForm = ({ signUp, validateForm, beginSubmission }) => {
	const { isLoading } = useContext(SignUpPageContext);
	const { values, handleChange, handleSubmit, errors } = useForm(
		signUp,
		validateForm,
		initialState,
		beginSubmission,
		isLoading
	);
	const { email, interest } = values;
	const { emailErrorMsg = "", interestErrorMsg = "" } = errors;

	return (
		<div className={styles.container}>
			<form onSubmit={handleSubmit}>
				<div className={styles.row}>
					<div className={styles.col}>
						<div className={styles.error}>{emailErrorMsg}</div>
						<InputField
							handleChange={handleChange}
							value={email}
							isInvalid={!!emailErrorMsg}
							placeholder={constants.emailFieldPlaceholderText}
						/>
					</div>

					<div className={styles.col}>
						<div className={styles.error}>{interestErrorMsg}</div>
						<SelectField
							handleChange={handleChange}
							placeholder={constants.interestFieldPlaceHolderText}
							options={constants.options}
							value={interest}
							isInvalid={!!interestErrorMsg}
						/>
					</div>
				</div>
				<div className={styles.row}>
					<Button name={constants.submitButtonText} isLoading={isLoading} />
				</div>
			</form>
		</div>
	);
};

export default SignUpForm;
