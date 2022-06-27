import React, { useRef } from "react";
import addCommentAction from "../../Axios/addComment";
import { sockets } from "../../socket";

const AddComment = ({ feedbackId }) => {
	const commentContent = useRef();

	const addComment = async () => {
		// await fetch(`http://localhost:5000/feedback/comment/add`, {
		// 	method: 'POST',
		// 	headers: {
		// 		'Accept': 'application/json',
		// 		'Content-Type': 'application/json'
		// 	},
		// 	body: JSON.stringify({
		// 		id: feedbackId,
		// 		comment: commentContent.current.value
		// 	})
		// })
		// await addCommentAction({
		// 	data: {
		// 		id: feedbackId,
		// 		comment: commentContent.current.value
		// 	}
		// })
		const test = feedbackId
		sockets.emit("getSuggestions", { id: feedbackId, comment: commentContent.current.value })

		return () => {
			sockets.off("getSuggestions")
		}

	}

	return (
		<div className="flex flex-col p-6 bg-white">
			<span className="font-bold">Add Comment</span>
			<textarea
				ref={commentContent}
				name="comment"
				placeholder="Type your comment here"
				className="bg-gray-300 resize-none p-4 my-5 outline-none"
			></textarea>
			<div className="flex justify-between items-center">
				<span className="text-gray-500">250 Characters left</span>
				<button
					onClick={addComment}
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
