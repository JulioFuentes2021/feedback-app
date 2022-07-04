import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "../pages/index";
import AddFeedback from "../components/AddAndUpdateFeedback/CreateNewFeedback";
import Login from "../components/LoginAndRegister/Login";
import SignIn from "../components/LoginAndRegister/SignIn";
import FormTemplate from '@LoginAndRegister/FormTemplate';
import Comment from '../pages/Comment';
import Context from "../context/context";


const RoutesPage = () => {
	return (
		<BrowserRouter>
			<Context>
				<Routes>
					<Route path="/feedback-app" element={<FormTemplate />} />
					<Route path="/feedback-app/comment/:id" element={<Comment />} />
					<Route path="/feedback-app/add" element={<AddFeedback />} />
					<Route path="/feedback-app/login" element={<Login />} />
					<Route path="/feedback-app/sign-in" element={<SignIn />} />
					<Route path="/feedback-app/index" element={<Index />} />
				</Routes>
			</Context>
		</BrowserRouter>
	);
};

export default RoutesPage;
