import { configureStore } from "@reduxjs/toolkit";
import { oneReducer, twoReducer } from "./reducers";

const rootReducer = {
    one: oneReducer,
    two: twoReducer,
}

const store = configureStore({
    reducer: rootReducer
})
export default store;