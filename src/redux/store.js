import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
});

const enhancer = composeWithDevTools();

export const store = configureStore({
  reducer: rootReducer,
  enhancers: [enhancer],
});
