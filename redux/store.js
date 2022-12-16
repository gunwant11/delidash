import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../redux/basketSlice"
import restaurantReducer from "../redux/restaurentSlice"
export const store = configureStore({
    reducer:{
        basketReducer,
        restaurantReducer

    }
})