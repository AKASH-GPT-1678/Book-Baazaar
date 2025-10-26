import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
    value: number;
    isLoggedIn: boolean;
    token: string
};

const initialState: InitialState = {
    value: 0,
    isLoggedIn: false,
    token: ""
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
        setToken: (state, action) => {
            state.token = action.payload
        }
    },
});


export const { increment, login, logout, setToken } = userSlice.actions;


export default userSlice.reducer;