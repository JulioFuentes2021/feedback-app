import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: null,
}

export const sockets = createSlice({
    name: "socketConnection",
    initialState,
    reducers: {
        connection: async (state, socket) => {
            state.value = socket;
        },
    },
});

export const { connection } = sockets.actions;

export default sockets.reducer;
