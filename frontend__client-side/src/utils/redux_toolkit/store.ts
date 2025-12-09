import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./counterSlice.js";

const store = configureStore({
	reducer: {
		// counter: counterReducer,
	},
});


// Export types for useSelector and useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
