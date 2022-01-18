import { createSlice } from "@reduxjs/toolkit";

export const error = createSlice({
	name: "error",
	initialState: {
		value: false,
	},
	reducers: {
		setError: state => {
			if (state.value === false) state.value = !state.value;
		},
	},
});

export const { setError } = error.actions;

export default error.reducer;
