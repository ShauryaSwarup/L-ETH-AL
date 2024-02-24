import { useState } from "react";

const useLoadingAndError = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const handleLoading = (isLoading) => {
		setLoading(isLoading);
	};

	const handleError = (error) => {
		setError(error);
	};

	return { loading, error, handleLoading, handleError };
};

export default useLoadingAndError;
