import { configureStore } from "@reduxjs/toolkit";
import dragonsReducer from "./dragons/dragonsReducer";

export const store = configureStore({
    reducer: {
        dragons: dragonsReducer,
    }
});