import React from "react";
import { FaBars } from "react-icons/fa";

const MenuMobile = () => {
	return (
		<section className="flex p-4 items-center justify-between h-20 customBackground">
			<div className="flex flex-col">
				<span className="font-bold text-white text-2xl">Julio Fuentes</span>
				<span className="text-gray-300 text-xl">Feedback Board</span>
			</div>
			<div className="text-white text-3xl">
				<FaBars />
			</div>
		</section>
	);
};

export default MenuMobile;
