import React from "react";

const Comment = ({
	reply,
	setReply,
	replyId,
	setReplyId,
	text,
	username,
	mail,
	id,
	getUserMail
}) => {

	return (
		<article className="p-4 flex flex-col bg-white">
			<img
				src="https://img.search.brave.com/hFZAFcFYrNLR9_bCKuDB7g-N8De4Kmfb9Hu8rtxSQyE/fit/632/225/ce/1/aHR0cHM6Ly90c2U0/LmV4cGxpY2l0LmJp/bmcubmV0L3RoP2lk/PU9JUC5jdGFaSTla/al9LNHBDMVJIcVFE/Z2pBSGFGaiZwaWQ9/QXBp"
				alt=""
				className="w-12 h-12 rounded-full mr-8 my-4 sm:my-0"
			/>
			<div>
				<section className="flex justify-between items-center">
					<div className="flex items-center">
						<div className="flex flex-col">
							<span className="font-bold">{username}</span>
							<span className="text-gray-700">{mail}</span>
						</div>
					</div>
					<span
						onClick={() => {
							setReply(!reply);
							setReplyId(id);
							getUserMail(mail)
						}}
						className="text-blue-600 font-semibold cursor-pointer"
					>
						Reply
					</span>
				</section>
				<section className="my-7">
					<p className="text-gray-600">{text}</p>
				</section>
			</div>
		</article>
	);
};

export default Comment;
