import React from "react";

const Error = () => {
	return (
		<div className="flex my-5 text-center flex-col items-center justify-center">
			<span className="font-semibold text-4xl lg:text-7xl">500</span>
			<span className="text-2xl sm:text-4xl">Something went wrong.</span>
			<span className="text-2xl sm:text-4xl">
				Refresh the page or try again later.
			</span>
		</div>
	);
};

export default Error;
