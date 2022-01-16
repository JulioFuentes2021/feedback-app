import React from "react";
import { FaLightbulb } from "react-icons/fa";
import { Link } from "react-router-dom";

const AddFeedback = () => {
	return (
		<div className="text-xl p-2 text-white flex items-center justify-between  bg-gray-800">
			<article className="flex">
				<div className="mx-4 hidden md:flex">
					<section className="mx-4">
						<FaLightbulb />
					</section>
					<section className="font-bold">6 Suggestions</section>
				</div>
				<div className="mr-4">
					<span className="text-gray-400">Sort by : </span>
					<select
						name="sort"
						id="options"
						className="bg-gray-800 font-semibold outline-none"
					>
						<option className="" value="MostUpvotes">
							Most Upvotes
						</option>
						<option value="LessUpvotes">Less Upvotes</option>
					</select>
				</div>
			</article>
			<Link to="/add">
				<button
					type="button"
					className="p-3 w-48 rounded-xl hover:bg-purple-600 outline-none bg-purple-700"
				>
					+ Add Feedback
				</button>
			</Link>
		</div>
	);
};

export default AddFeedback;
