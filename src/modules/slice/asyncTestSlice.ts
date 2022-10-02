import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AD_URL } from "service/constants/api";
import customAxios from "service/customAxios";

interface MyKnownError {
  errorMessage: string;
}

interface fetchActionType {
  success: boolean;
}

export const reload = createAsyncThunk<
  fetchActionType,
  object,
  { rejectValue: MyKnownError }
>("contents/reload", async (dto, thunkAPI) => {
  try {
    // success 객체가 들어올 것으로 예상됨.
    const { data } = await customAxios.post(AD_URL, dto);
    return data;
  } catch (err) {
    return thunkAPI.rejectWithValue({
      errorMessage: "광고 데이터가져오기 실패",
    });
  }
});

export interface InitailStateType {
  userData: object;
  error: null | MyKnownError | undefined;
  loading: boolean;
}

const initialState: InitailStateType = {
  userData: {},
  error: null,
  loading: false,
};

export const aTestSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // ... //
    getADList: (state) => {
      console.log(state.userData);
    },
  },
  extraReducers: (builder) => {
    builder
      // 통신 중
      .addCase(reload.pending, (state) => {
        console.log("async test pending : ", state);
        state.error = null;
        state.loading = true;
      })
      // 통신 성공
      .addCase(reload.fulfilled, (state, { payload }) => {
        console.log("async test fulfilled : ", state, payload);
        state.error = null;
        state.loading = false;
        state.userData = payload;
      })
      // 통신 에러
      .addCase(reload.rejected, (state, { payload }) => {
        console.log("async test rejected : ", state, payload);
        state.error = payload;
        state.loading = false;
      });
  },
});

export const {} = aTestSlice.actions;

export default aTestSlice.reducer;
