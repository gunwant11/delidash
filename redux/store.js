import { configureStore } from "@reduxjs/toolkit";
import baskeReducer from "../redux/basketSlice"
export const store = configureStore({
    reducer:{
        baskeReducer

    }
})