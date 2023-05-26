import { createSlice } from "@reduxjs/toolkit";

const timerSlice = createSlice({
    name: "timer",
    initialState: {
        workTime: 1500,
        pauseTime: 300,
        workSetting: 25,
        pauseSetting: 5,
        isWorking: false,
        isPausing: false,
    },
    reducers: {
        // Main Timer Usage
        startTimer: (state) => {
            if (!state.isWorking && !state.isPausing && state.workTime > 0) {
                state.isWorking = true;
                state.isPausing = false;
            } else if (!state.isWorking && !state.isPausing && state.pauseTime > 0) {
                state.isWorking = false;
                state.isPausing = true;
            } else if (state.pauseTime <= 0 && state.workTime <= 0) {
                resetTimer();
            }
        },
        stopTimer: (state) => {
            state.isWorking = false;
            state.isPausing = false;
        },

        resetTimer: (state) => {
            state.isWorking = false;
            state.isPausing = false;
            state.workTime = 1500;
            state.pauseTime = 300;
        },

        // Tickers
        tickTimer: (state) => {
            if (state.workTime > 0) {
                state.workTime -= 1;
            } else if (state.workTime === 0) {
                state.isPausing = true;
                state.isWorking = false;
            }
        },
        tickPause: (state) => {
            if(state.pauseTime > 0) {
                state.pauseTime -= 1
            } 
            else {
                state.isWorking = false;
                state.isPausing = false;
            }
        },

        // Settings
        workIncrease: (state) => {
            state.workSetting += 1;
        },
        workDecrease: (state) => {
            if (state.workSetting > 2) {
                state.workSetting -= 1;
            }
        },
        pauseIncrease: (state) => {
            state.pauseSetting += 1;
        },
        pauseDecrease: (state) => {
            if (state.pauseSetting > 2) {
                state.pauseSetting -= 1;
            }
        },
        confirmSettings: (state) => {
            state.workTime = state.workSetting * 60;
            state.pauseSetting = state.pauseSetting * 60;
        },
    },
});

export const { 
    startTimer, stopTimer, resetTimer, tickTimer, tickPause,
    workIncrease, workDecrease, pauseIncrease, pauseDecrease,
    confirmSettings,
} = timerSlice.actions;
export const timerReducer = timerSlice.reducer;

export const twoReducer = 2;