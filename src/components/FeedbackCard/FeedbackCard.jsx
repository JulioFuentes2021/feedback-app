import React, { useContext } from "react";
import { FaComment, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FeedbackContext } from "../../context/context";
import useSocket from "../../customHooks/socket";

const FeedbackCard = props => {

	const { socket } = useContext(FeedbackContext)

	const increaseUpvoteCount = async () => {
		socket.emit("test", { id: props.id })
	}


	//!Para aumentar el upvote idea: Cuando el usuario de click al upvote agarrar la cookie con el token de identificacion y mediante el backend realizar la firma correspondiente para obtener el payload y asi obtener el sub de identificacion.
	//*Verificar si el refresh token afecta esta idea

	return (
		<article id={props.id} className="bg-white flex justify-between items-end sm:items-center p-4 my-6 lg:mx-0">
			<section className="flex flex-col-reverse sm:flex-row">
				{/* <div onClick={() => addUpvoteSocket(increaseUpvoteCount)} className="sm:mx-6 bg-gray-200 w-20 h-10 rounded-xl flex sm:flex-col sm:w-12 sm:h-16 items-center justify-center"> */}
				<div onClick={increaseUpvoteCount} className="sm:mx-6 bg-gray-200 w-20 h-10 rounded-xl flex sm:flex-col sm:w-12 sm:h-16 items-center justify-center">
					<span className="text-blue-600 text-center mx-1">
						<FaChevronUp />
					</span>
					<span className="font-semibold mx-1">{props.upvotes}</span>
				</div>
				<div className="flex flex-col">
					<span className="font-semibold text-xl">{props.title}</span>
					<span className="my-2 text-gray-600">{props.description}</span>
					<button className="rounded-xl mb-2 bg-gray-200 p-2 w-36 font-semibold text-blue-600">
						{props.feature}
					</button>
				</div>
			</section>
			<section className="flex items-center absolute right-10 sm:relative sm:right-0">
				<span className="mx-2 text-gray-300 text-2xl">
					<FaComment />
				</span>
				<Link to={`/feedback-app/comment/${props.id}`}>
					<span className="font-semibold">{props.comments || 0}</span>
				</Link>
			</section>
		</article>
	);
};

export default FeedbackCard;
