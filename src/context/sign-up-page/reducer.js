import * as formActions from "./actions";

export default (state, action) => {
	switch (action.type) {
		case formActions.STARTED_FORM_SUBMISSION:
			return { ...state, isLoading: true };
		case formActions.COMPLETED_FORM_SUBMISSION:
			return { ...state, isLoading: false, isSuccess: true };
		default:
			return state;
	}
};
