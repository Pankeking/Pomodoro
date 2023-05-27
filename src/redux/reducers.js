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
        timerFinished: false,
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
            state.workSetting = 25;
            state.pauseSetting = 5;
            state.workTime = state.workSetting * 60;
            state.pauseTime = state.pauseSetting * 60;
        },

        // Tickers
        tickTimer: (state) => {
            if (state.workTime > 0) {
                state.timerFinished = false;
                state.workTime -= 1;
            } else if (state.workTime === 0) {
                state.isWorking = false;
                // Start Pause
                state.isPausing = true;
                // Sound Beep
                state.timerFinished = true;
            }
        },
        tickPause: (state) => {
            if(state.pauseTime > 0) {
                state.timerFinished = false;
                state.pauseTime -= 1
            } 
            else if (state.pauseTime === 0) {
                state.isPausing = false;
                // Sound Beep
                state.timerFinished = true;
                // Start Again
                state.workTime = state.workSetting * 60;
                state.pauseTime = state.pauseSetting * 60;
                state.isWorking = true;
            }
        },

        // Sound
        setTimerFinished: (state) => {
            state.timerFinished = true;
        },
        resetTimerFinished: (state) => {
            state.timerFinished = false;
        },


        // Settings
        workIncrease: (state) => {
            if (state.workSetting < 60) {
                state.workSetting += 1;
            }
        },
        workDecrease: (state) => {
            if (state.workSetting > 1) {
                state.workSetting -= 1;
            }
        },
        pauseIncrease: (state) => {
            if (state.pauseSetting < 60) {
                state.pauseSetting += 1;
            }
        },
        pauseDecrease: (state) => {
            if (state.pauseSetting > 1) {
                state.pauseSetting -= 1;
            }
        },
        confirmSettings: (state) => {
            state.isWorking = false;
            state.isPausing = false;
            state.workTime = state.workSetting * 60;
            state.pauseTime = state.pauseSetting * 60;

        },
    },
});

export const { 
    startTimer, stopTimer, resetTimer, tickTimer, tickPause,
    workIncrease, workDecrease, pauseIncrease, pauseDecrease,
    confirmSettings, setTimerFinished, resetTimerFinished,
} = timerSlice.actions;
export const timerReducer = timerSlice.reducer;

export const twoReducer = 2;