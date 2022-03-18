import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "../pages/index";
import AddFeedback from "../components/AddAndUpdateFeedback/CreateNewFeedback";
import Login from "../components/LoginAndRegister/Login";
import SignIn from "../components/LoginAndRegister/SignIn";

const RoutesPage = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/feedback-app" element={<Index />} />
				<Route path="add" element={<AddFeedback />} />
				<Route path="/feedback-app/login" element={<Login />} />
				<Route path="/feedback-app/sign-in" element={<SignIn />} />
			</Routes>
		</BrowserRouter>
	);
};

export default RoutesPage;
