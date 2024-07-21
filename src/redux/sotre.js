import { configureStore } from "@reduxjs/toolkit";
import {todoSlice} from './redux'

export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer
    }
})