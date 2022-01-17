import { createSlice } from "@reduxjs/toolkit";

export const error = createSlice({
	name: "error",
	initialState: {
		value: false,
	},
	reducers: {
		setError: state => {
			state.value = !state.value;
		},
	},
});

export const { setError } = error.actions;

export default error.reducer;
