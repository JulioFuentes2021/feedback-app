import React, { useRef, useState, useContext, useEffect } from "react";
import Back from "@Utilities/Back";
import { useParams } from 'react-router-dom';
import useSocket from "../../customHooks/socket";
import { FeedbackContext } from "../../context/context";

const CreateNewFeedback = props => {

	const { socket } = useContext(FeedbackContext);
	// const [socket] = useSocket();
	const [title, setTitle] = useState();
	const [feature, setFeature] = useState('feature');
	const [description, setDescription] = useState();
	const { id } = useParams();

	const getFeedbackForEdit = async () => {
		const data = await fetch(`${import.meta.env.VITE_URL}/feedback/${id}`)
		const response = await data.json()
		console.log(response)
		setTitle(response[0].title)
		setFeature(response[0].feature)
		setDescription(response[0].description)
	}

	useEffect(() => {
		if (props.IsItEdit) getFeedbackForEdit();
	}, [socket])

	const handleSubmit = e => {
		try {
			e.preventDefault();
			const form = e.target;
			console.log(form)
			socket && socket.emit('addFeedback', {
				title,
				feature,
				description,
				id
			})
			setTitle("");
			setDescription("");
			setFeature("feature");
			setCharacters(0)
		} catch (error) {
			console.log('Feedback failed!!', error)
		}
	};

	const handleEdit = async (e) => {
		e.preventDefault()
		socket.emit('edit', { title, feature, description, id })
	};

	const editFeedback = (e, setValue) => {
		setValue(e.target.value)
		console.log(feature)
	}

	const feedbackDetail = useRef()

	const [characters, setCharacters] = useState(250)

	const handleChange = (e) => {
		setCharacters(250 - feedbackDetail.current.value.length)
		setDescription(e.target.value)
	}

	return (
		<div className="flex flex-col justify-center items-center">
			<div className="max-w-7xl w-full px-8">
				<Back />
			</div>
			<form
				className="bg-white p-8 m-8 max-w-7xl"
				onSubmit={props.IsItEdit ? handleEdit : handleSubmit}
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
						value={title}
						required
						name="title"
						id=""
						placeholder=""
						onChange={(e) => editFeedback(e, setTitle)}
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
						onChange={(e) => editFeedback(e, setFeature)}
						value={feature}
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
						value={description}
						placeholder=""
						className="bg-gray-300 h-32 outline-none p-4 text-black resize-none"
					></textarea>
					<span className="my-3">{characters} characters left</span>
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
