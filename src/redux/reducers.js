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
        workPercentage: 0,
        pausePercentage: 0,
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
            } 
            else if (state.pauseTime <= 0 && state.workTime <= 0) {
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

            state.timerFinished = false;
            state.workPercentage = 0;
            state.pausePercentage = 0;
            state.workSetting = 25;
            state.pauseSetting = 5;
            state.workTime = state.workSetting * 60;
            state.pauseTime = state.pauseSetting * 60;
        },

        // Tickers
        tickTimer: (state) => {
            if (state.workTime > 0) {
                state.workTime -= 1;
                if (state.workTime === 0) {
                    // Sound Beep
                    state.timerFinished = true;
                }
            } else if (state.workTime === 0) {
                state.isWorking = false;
                // Start Pause
                state.isPausing = true;
            }
            state.workPercentage = (((state.workSetting * 60) - state.workTime) / (state.workSetting * 60)) * 100;
                                     
        },
        tickPause: (state) => {
            if(state.pauseTime > 0) {
                state.pauseTime -= 1
                if (state.pauseTime === 0) {
                    // Sound Beep
                    state.timerFinished = true;
                }
            } 
            else if (state.pauseTime === 0) {
                state.isPausing = false;
                // Start Again
                state.workTime = state.workSetting * 60;
                state.pauseTime = state.pauseSetting * 60;
                state.isWorking = true;
            }
            state.pausePercentage = (((state.pauseSetting * 60) - state.pauseTime) / (state.pauseSetting * 60)) * 100;
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
                if (!state.isWorking) {
                    state.workTime = state.workSetting * 60;
                }
            }
        },
        workDecrease: (state) => {
            if (state.workSetting > 1) {
                state.workSetting -= 1;
            } if (!state.isWorking) {
                state.workTime = state.workSetting * 60;
            }
        },
        pauseIncrease: (state) => {
            if (state.pauseSetting < 60) {
                state.pauseSetting += 1;
            } if (!state.isPausing) {
                state.pauseTime = state.pauseSetting * 60;
            }
        },
        pauseDecrease: (state) => {
            if (state.pauseSetting > 1) {
                state.pauseSetting -= 1;
            } if (!state.isPausing) {
                state.pauseTime = state.pauseSetting * 60;
            }
        },
        confirmSettings: (state) => {
            state.isWorking = false;
            state.isPausing = false;
            state.workTime = 5;
            state.pauseTime = 10;

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