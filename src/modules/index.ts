import { combineReducers, configureStore } from "@reduxjs/toolkit";

import testSlice from "modules/slice/testSlice";
import adSlice from "modules/slice/adSlice";
import aTestSlice from "modules/slice/asyncTestSlice";

const rootReducer = combineReducers({
  aTest: aTestSlice,
  test: testSlice,
  ads: adSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;

export default store;
