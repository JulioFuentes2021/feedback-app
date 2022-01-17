import { createSlice } from "@reduxjs/toolkit";

export const totalFeedbacks = createSlice({
	name: "totalFeedbacks",
	initialState: {
		value: 0,
	},
	reducers: {
		increment: state => {
			state.value += 1;
		},
	},
});

export const { increment } = totalFeedbacks.actions;

export default totalFeedbacks.reducer;
