import React from "react";

const AddComment = () => {
	return (
		<div className="flex flex-col p-6 bg-white">
			<span className="font-bold">Add Comment</span>
			<textarea
				placeholder="Type your comment here"
				className="bg-gray-300 resize-none p-4 my-5 outline-none"
			></textarea>
			<div className="flex justify-between items-center">
				<span className="text-gray-500">250 Characters left</span>
				<button
					type="button"
					className="p-3 w-48 cursor-pointer rounded-xl text-white font-semibold hover:bg-purple-600 outline-none bg-purple-700"
				>
					Post Comment
				</button>
			</div>
		</div>
	);
};

export default AddComment;
