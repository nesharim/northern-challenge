import React, { useReducer } from "react";
import { CSSTransition } from "react-transition-group";

import { FlexColumn } from "components/flex-column";
import { Header } from "components/header";
import { Paragraph } from "components/paragraph";
import { Divider } from "components/divider";

import SignUpPageContext from "context/sign-up-page/context";
import signUpPageReducer from "context/sign-up-page/reducer";

import SignUpForm from "./form/form";

import * as constants from "app-constants";
import * as formActions from "context/sign-up-page/actions";
import * as validator from "util/form-validator";

import styles from "./sign-up-page.module.scss";

const SignUpPage = () => {
	const [state, dispatch] = useReducer(
		signUpPageReducer,
		constants.initialState
	);

	const beginSubmission = () =>
		dispatch({ type: formActions.STARTED_FORM_SUBMISSION });

	const signUp = values => {
		console.log({ values });
		dispatch({ type: formActions.COMPLETED_FORM_SUBMISSION });
	};

	const { isSuccess, isLoading } = state;

	return (
		<SignUpPageContext.Provider value={{ isSuccess, isLoading }}>
			<div className={styles.container}>
				<FlexColumn>
					<Header key='primary' message={constants.formTitle} />
					<Divider />
					<CSSTransition in timeout={600} classNames='registration'>
						{!isSuccess ? (
							<div key='form-body'>
								<Paragraph textContent={constants.infoMessage} />
								<SignUpForm
									signUp={signUp}
									validateForm={validator.validateForm}
									beginSubmission={beginSubmission}
								/>
							</div>
						) : (
							<div key='thank-you-body'>
								<Header
									key='secondary'
									message={constants.thankYouTitle}
									isSubheader
								/>
								<Paragraph textContent={constants.thankYouMessage} />
							</div>
						)}
					</CSSTransition>
				</FlexColumn>
			</div>
		</SignUpPageContext.Provider>
	);
};

export default SignUpPage;
