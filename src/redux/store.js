import { configureStore } from "@reduxjs/toolkit";
import totalFeedbacksReducer from "./slices/test";
import loading from "./slices/loading";
import error from "./slices/error";
import sockets from './slices/socketConnection';

export default configureStore({
	reducer: {
		counter: totalFeedbacksReducer,
		loading: loading,
		error: error,
		sockets
	},
});
