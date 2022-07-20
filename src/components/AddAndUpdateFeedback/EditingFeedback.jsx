import React, { useState, useEffect } from "react";
import CreateNewFeedback from "./CreateNewFeedback";
import useSocket from "../../customHooks/socket";
import { Link } from 'react-router-dom';

const EditingFeedback = () => {
	const [error, setError] = useState({ state: false, message: '' });
	const [socket] = useSocket();

	useEffect(() => {
		socket.on('editFail', data => {
			setError({ ...error, state: true, message: data })
			console.log(error)
		})
	}, [socket])

	if (error.state) {
		return <div className="flex flex-col justify-center items-center h-screen">
			<span className="my-5 text-3xl text-center">{error.message}</span>
			<Link className="text-2xl underline cursor-pointer" to="/feedback-app/index">
				Go home
			</Link>
		</div>
	}

	return <CreateNewFeedback IsItEdit={true} title="Editing 'Title of the feedback'" />;
};

export default EditingFeedback;
