import { configureStore } from "@reduxjs/toolkit";
import totalFeedbacksReducer from "./slices/test";

export default configureStore({
	reducer: {
		counter: totalFeedbacksReducer,
	},
});
