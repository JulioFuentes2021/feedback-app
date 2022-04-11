import React from "react";
import { FaComment, FaChevronUp } from "react-icons/fa";
import addUpvote from '../../Axios/addUpvote';

const FeedbackCard = props => {

	console.log(props.users)

	const increaseUpvoteCount = () => {
		//This is the function to get a cookie
		const allCookies = document.cookie.split(';')
		// console.log(t[0].split('=')[1])
		const cookieIndex = allCookies.map((t) => t.split('=').findIndex((t) => t === 'token'))
		const splitCookie = allCookies.map((t) => t.split('='))
		const finalCookie = splitCookie[0][cookieIndex[0] + 1]
		console.log(finalCookie)


		addUpvote({
			url: '/',
			data: {
				id: props.id,
			},
			headers: { 'authorization': `Bearer ${finalCookie}` }
		})
	}


	//!Para aumentar el upvote idea: Cuando el usuario de click al upvote agarrar la cookie con el token de identificacion y mediante el backend realizar la firma correspondiente para obtener el payload y asi obtener el sub de identificacion.
	//*Verificar si el refresh token afecta esta idea

	return (
		<article id={props.id} className="bg-white flex items-end sm:items-center p-4 my-6 mx-6 lg:mx-0">
			<section className="flex flex-col-reverse sm:flex-row">
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
