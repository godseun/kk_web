import { combineReducers, configureStore } from "@reduxjs/toolkit";

import testSlice from "modules/slice/testSlice";

const rootReducer = combineReducers({
  test: testSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
