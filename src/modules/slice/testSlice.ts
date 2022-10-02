import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  numOfCakes: number;
};

const initialState: InitialState = {
  numOfCakes: 0,
};

const testSlice = createSlice({
  name: "cafe",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes--;
      console.log(state.numOfCakes);
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
      console.log(state.numOfCakes);
    },
  },
});

export const { ordered, restocked } = testSlice.actions;

export default testSlice.reducer;
