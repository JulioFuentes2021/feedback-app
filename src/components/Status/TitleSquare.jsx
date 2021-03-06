import React, { useState } from "react";

const TitleSquare = () => {

	const [userName, setUserName] = useState('');

	return (
		<div className="customBackground w-72 h-48 flex flex-col justify-end">
			<span className="font-bold text-white text-2xl mx-5 my-1">
				{userName || 'Julio'}
			</span>
			<span className="text-gray-300 text-xl mx-5 mb-6">Feedback Board</span>
		</div>
	);
};

export default TitleSquare;
