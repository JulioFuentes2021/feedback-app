import React from "react";
import { FaCircle } from "react-icons/fa";

const Roadmap = () => {
	return (
		<div className="flex justify-between w-72 h-48 bg-white p-4">
			<div className="flex flex-col justify-around">
				<span className="text-xl font-bold">Roadmap</span>
				<section>
					<div className="flex items-center">
						<span className="text-orange-400 mr-6 text-xs">
							<FaCircle />
						</span>
						<span>Planned</span>
					</div>
				</section>
				<section>
					<div className="flex">
						<span className="text-purple-700 mr-6 text-xs">
							<FaCircle />
						</span>
						<span>In-Progress</span>
					</div>
				</section>
				<section>
					<div className="flex">
						<span className="text-blue-400 mr-6 text-xs">
							<FaCircle />
						</span>
						<span>Live</span>
					</div>
				</section>
			</div>
			<div className="flex flex-col justify-around items-end">
				<span>
					<a className="underline text-blue-700 font-semibold" href="#">
						View
					</a>
				</span>
				<span className="font-semibold">2</span>
				<span className="font-semibold">3</span>
				<span className="font-semibold">1</span>
			</div>
		</div>
	);
};

export default Roadmap;
