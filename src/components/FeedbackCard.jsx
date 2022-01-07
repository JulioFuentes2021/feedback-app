import React from "react";
import { FaComment, FaChevronUp } from "react-icons/fa";

const FeedbackCard = () => {
	return (
		<article className="bg-white flex items-end sm:items-center p-4 my-6 mx-6 lg:mx-0">
			<section className="flex flex-col-reverse sm:flex-row">
				<div className="sm:mx-6 bg-gray-200 w-20 h-10 rounded-xl flex sm:flex-col sm:w-12 sm:h-16 items-center justify-center">
					<span className="text-blue-600 text-center mx-1">
						<FaChevronUp />
					</span>
					<span className="font-semibold mx-1">112</span>
				</div>
				<div className="flex flex-col">
					<span className="font-semibold text-xl">Add tags for solution</span>
					<span className="my-2 text-gray-600">
						Easier to watch for solutions based on a specific stack.
					</span>
					<button className="rounded-xl mb-2 bg-gray-200 p-2 w-36 font-semibold text-blue-600">
						Enhacement
					</button>
				</div>
			</section>
			<section className="flex items-center absolute right-0 px-8 xl:px-12">
				<span className="mx-2 text-gray-300 text-2xl">
					<FaComment />
				</span>
				<span className="font-semibold">2</span>
			</section>
		</article>
	);
};

export default FeedbackCard;
