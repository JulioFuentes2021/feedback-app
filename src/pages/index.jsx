import React, { useEffect } from "react";
import MenuMobile from "@Header/MenuMobile";
import AddFeedback from "@AddFeedbackBar/AddFeedback";
import AllFeedbacks from "@FeedbackCard/AllFeedbacks";
import Status from "@Status/Status";
import { useSelector, useDispatch } from 'react-redux'
import { connection } from "../redux/slices/socketConnection";
import { connectionSocket } from "../socket/index";
import { io } from "socket.io-client";

const Index = () => {
	const sockets = useSelector((state) => state.sockets.value)
	const dispatch = useDispatch();

	useEffect(() => {
		const test = async () => {
			try {
				const response = await fetch('http://localhost:5000/refresh', { credentials: 'include' })
				const { token } = await response.json();
				const socket = io.connect("http://localhost:5000", {
					extraHeaders: {
						Authorization: `Bearer ${token}`
					},
					// reconnect: true,
					// 'multiplex': false
				});

				return () => dispatch(connection(socket))
			} catch (error) {
				return error
			}
		}

		// dispatch(connection(connectionSocket))
		console.log(test())
		console.log(dispatch)
	}, [])

	return (
		<div className="xl:grid xl:grid-cols-4 justify-between lg:p-6 gap-5">
			<div className="col-span-1">
				<Status />
				<MenuMobile />
			</div>
			<div className="col-span-3">
				<AddFeedback />
				<article>
					<AllFeedbacks />
				</article>
			</div>
		</div>
	);
};

export default Index;
