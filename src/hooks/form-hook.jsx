import { useState } from "react";

const useForm = (
	callback,
	validator,
	initialState,
	beginSubmission,
	isLoading
) => {
	const [values, setValues] = useState(initialState);
	const [errors, setErrors] = useState({});

	const handleSubmit = event => {
		if (event) {
			event.preventDefault();
		}

		if (isLoading) {
			return;
		}

		const errorMessages = validator(values);
		const hasErrors =
			Object.values(errorMessages).filter(value => !!value).length > 0;

		if (hasErrors) {
			setErrors({ ...errors, ...errorMessages });
		} else {
			beginSubmission();
			setTimeout(() => {
				setErrors({});
				callback(values);
			}, 2000);
		}
	};

	const handleChange = event => {
		setValues({
			...values,
			[event.target.name]: event.target.value
		});
	};

	return {
		handleChange,
		handleSubmit,
		values,
		errors
	};
};

export default useForm;
