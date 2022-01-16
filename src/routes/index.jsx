import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "../pages/index";
import AddFeedback from "../components/CreateNewFeedback";

const RoutesPage = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/feedback-app" element={<Index />} />
				<Route path="add" element={<AddFeedback />} />
			</Routes>
		</BrowserRouter>
	);
};

export default RoutesPage;
