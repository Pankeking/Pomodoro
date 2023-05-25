import { configureStore } from "@reduxjs/toolkit";
import { timerReducer, twoReducer } from "./reducers";

const rootReducer = {
    timer: timerReducer,
    two: twoReducer,
}

const store = configureStore({
    reducer: rootReducer
})
export default store;