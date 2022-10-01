import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  numOfCakes: number;
};

export const initialState: InitialState = {
  numOfCakes: 0,
};

export const testSlice = createSlice({
  name: "cafe",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes--;
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

export const { ordered, restocked } = testSlice.actions;

export default testSlice.reducer;
