import React, { useRef, useState } from "react";
import UtilityButtons from "../Utilities/UtilityButtons";
import Back from "@Utilities/Back";
import AddFeedback from "@Axios/addFeedback";
import { sockets } from "../../socket";

const CreateNewFeedback = props => {

	const handleSubmit = e => {
		console.log('Ejecutando createFeedback')
		try {
			e.preventDefault();
			const form = e.target;
			// const response = await fetch('http://localhost:5000/refresh', { credentials: 'include' })
			// const { token } = await response.json()

			// await AddFeedback({
			// 	url: "/add",
			// 	data: {
			// 		title: form.title.value,
			// 		feature: form.feature.value,
			// 		description: form.description.value,
			// 	},
			// 	headers: { 'authorization': `Bearer ${token}` }
			// });
			sockets.emit("addFeedback", {
				title: form.title.value,
				feature: form.feature.value,
				description: form.description.value,
			})
			console.log('Ejecutando createFeedback')
			form.reset();
		} catch (error) {
			console.log('Feedback failed!!', error)
		}
	};

	const feedbackDetail = useRef()

	const [characters, setCharacters] = useState(0)

	const handleChange = () => {
		setCharacters(250 - feedbackDetail.current.value.length)
	}

	return (
		<div className="flex flex-col justify-center items-center">
			<div className="max-w-7xl w-full px-8">
				<Back />
			</div>
			<form
				method="POST"
				action="feedback/add"
				className="bg-white p-8 m-8 max-w-7xl"
				onSubmit={handleSubmit}
			>
				<article className="mb-5 customBackground text-white font-bold -translate-y-14 w-12 h-12 rounded-full flex justify-center items-center text-2xl">
					<span>+</span>
				</article>
				<span className="font-bold text-2xl">
					{props.title || "Creating New Feedback"}
				</span>
				<section className="flex flex-col my-6">
					<span className="font-semibold text-xl">Feedback Title</span>
					<small className="text-gray-600 text-lg mb-7">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
						consectetur rem nemo nam fuga expedita!
					</small>
					<textarea
						required
						name="title"
						id=""
						placeholder=""
						className="h-24 bg-gray-300 outline-none p-4 resize-none"
					></textarea>
				</section>
				<section className="flex flex-col my-6">
					<span className="font-semibold text-xl">Category</span>
					<small className="text-gray-600 text-lg mb-7">
						Choose a category for your feedback
					</small>
					<select
						name="feature"
						id=""
						className="h-12 px-4 bg-gray-300 outline-none"
					>
						<option value="feature" className="">
							Feature
						</option>
						<option value="enhancement">Enhacement</option>
						<option value="bug">Bug</option>
					</select>
				</section>
				<section className="flex flex-col my-6">
					<span className="font-semibold text-xl">Feedback Detail</span>
					<small className="text-gray-600 text-lg mb-7">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
						facere exercitationem delectus eaque ea cum id, libero iure tenetur
						mollitia.
					</small>
					<textarea
						required
						ref={feedbackDetail}
						onChange={handleChange}
						name="description"
						maxLength={250}
						id=""
						placeholder=""
						className="bg-gray-300 h-32 outline-none p-4 text-black resize-none"
					></textarea>
					<span className="my-3">{characters < 1 ? 250 : characters} characters left</span>
				</section>
				<section className="flex flex-col items-center sm:flex-row justify-between gap-4">
					<button
						type="button"
						className="p-3 w-48 rounded-xl hover:bg-gray-800 transition-colors ease-linear outline-none text-white bg-gray-700"
					>
						Cancel
					</button>
					<button
						type="submit"
						className="p-3 w-48 rounded-xl text-white transition-colors ease-in hover:bg-purple-600 outline-none bg-purple-700"
					>
						Post Feedback
					</button>
				</section>
			</form>
		</div>
	);
};

export default CreateNewFeedback;
