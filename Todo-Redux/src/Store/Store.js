import { configureStore } from "@reduxjs/toolkit";
import todoReducer from'../Features/todoSlice.js'

export const store = configureStore({
    reducer: todoReducer,
  });
  