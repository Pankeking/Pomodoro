import { createSlice } from "@reduxjs/toolkit";

const oneSlice = createSlice({
    name: "one",
    initialState: {
        prop1: "",
        prop2: ""
    },
    reducers: {
        function1: (state, action) => {
            state.prop1 = action.payload;
        },

        function2: (state, action) => {
            state.prop2 = action.payload + state.prop1;
        },

        function3: (state) => {
            state.prop1 = "";
            state.prop2 = "";
        },
    },
});

export const { function1, function2, function3 } = oneSlice.actions;
export const oneReducer = oneSlice.reducer;

export const twoReducer = 1;