import { createSlice } from "@reduxjs/toolkit";

const timerSlice = createSlice({
    name: "timer",
    initialState: {
        time: 1500,
        isRunning: true
    },
    reducers: {
        startTimer: (state) => {
            state.isRunning = true;
        },

        stopTimer: (state) => {
            state.isRunning = false;
        },

        resetTimer: (state) => {
            state.isRunning = false;
            state.time = 1500;
        },
        tickTimer: (state) => {
            if (state.time > 0) {
                state.time -= 1;
            }
        }
    },
});

export const { startTimer, stopTimer, resetTimer, tickTimer } = timerSlice.actions;
export const timerReducer = timerSlice.reducer;

export const twoReducer = 2;