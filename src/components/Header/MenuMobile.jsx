import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

const MenuMobile = () => {
	// console.log(document.cookie.split("=")[1].split(";")[0])

	const [userName, setUserName] = useState('');

	useEffect(() => {
		const user = document.cookie.split(';')[1].split('=')[1];
		setUserName(user)
	}, [])

	return (
		<section className="lg:hidden flex p-4 items-center justify-between h-20 customBackground">
			<div className="flex flex-col">
				<span className="font-bold text-white text-2xl">{userName}</span>
				<span className="text-gray-300 text-xl">Feedback Board</span>
			</div>
			<div className="text-white text-3xl">
				<FaBars />
			</div>
		</section>
	);
};

export default MenuMobile;
