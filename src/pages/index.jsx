import React, { useEffect, useContext } from "react";
import MenuMobile from "@Header/MenuMobile";
import AddFeedback from "@AddFeedbackBar/AddFeedback";
import AllFeedbacks from "@FeedbackCard/AllFeedbacks";
import Status from "@Status/Status";
import { FeedbackContext } from "../context/context";
import { io } from "socket.io-client";

const Index = () => {
	const { setSocket, socket } = useContext(FeedbackContext)

	useEffect(() => {
		const setConnection = async () => {
			const response = await fetch('http://localhost:5000/refresh', { credentials: 'include' })
			const { token } = await response.json()

			const socket2 = io.connect("http://localhost:5000", {
				extraHeaders: {
					Authorization: `Bearer ${token}`
				},
				// reconnect: true,
				// 'multiplex': false
			});

			setSocket(socket2)
			return socket2
		}

		setConnection()

	}, [])

	return (
		<div className="xl:grid xl:grid-cols-4 justify-between lg:p-6 gap-5">
			<div className="col-span-1">
				<Status />
				<MenuMobile />
			</div>
			<div className="col-span-3">
				<AddFeedback socket={socket} />
				<article>
					<AllFeedbacks />
				</article>
			</div>
		</div>
	);
};

export default Index;
