import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

const MenuMobile = () => {

	const [userName, setUserName] = useState('');

	return (
		<section className="lg:hidden flex p-4 items-center justify-between h-20 customBackground">
			<div className="flex flex-col">
				<span className="font-bold text-white text-2xl">{userName || 'JUlio'}</span>
				<span className="text-gray-300 text-xl">Feedback Board</span>
			</div>
			<div className="text-white text-3xl">
				<FaBars />
			</div>
		</section>
	);
};

export default MenuMobile;
