import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
    value: number;
    isLoggedIn: boolean;
};

const initialState: InitialState = {
    value: 0,
    isLoggedIn: false,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;   // ab sahi hai
        },
        login: (state) => {
            state.isLoggedIn = true;
        },
        logout: (state) => {
            state.isLoggedIn = false;
        },
    },
});


export const { increment, login, logout } = userSlice.actions;


export default userSlice.reducer;
