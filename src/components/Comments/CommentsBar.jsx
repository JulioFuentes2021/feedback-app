import React from "react";

const CommentsBar = ({ total }) => {
	return (
		<div className="bg-white p-4">
			<span className="font-bold">{total} Comments</span>
		</div>
	);
};

export default CommentsBar;
