import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import customAxios from "service/customAxios";
import { AD_URL } from "service/constants/api";

interface MyKnownError {
  errorMessage: string;
}

type UserData = {
  adList: Array<Object>;
  gameList: Array<Object>;
  isLogin: boolean;
  mbName: string;
  myPoint: number;
  playCnt: number;
  totalPlayCnt: number;
  viewCnt: number;
  totalViewCnt: number;
};

interface fetchActionType {
  success: boolean;
  data: UserData;
  msg: string | null;
}

export const reload = createAsyncThunk<
  fetchActionType,
  object,
  { rejectValue: MyKnownError }
>("contents/reload", async (dto, thunkAPI) => {
  try {
    // success 객체가 들어올 것으로 예상됨.
    const { data } = await customAxios.post(AD_URL, {
      ...dto,
      action: "getADList",
    });
    return data;
  } catch (err) {
    return thunkAPI.rejectWithValue({
      errorMessage: "광고 데이터가져오기 실패",
    });
  }
});

export interface InitailStateType {
  userData: UserData;
  error: null | MyKnownError | undefined;
  loading: boolean;
}

const initialState: InitailStateType = {
  userData: {
    adList: [],
    gameList: [],
    isLogin: false,
    mbName: "솜솜",
    myPoint: 7777777,
    playCnt: 0,
    totalPlayCnt: 0,
    viewCnt: 0,
    totalViewCnt: 0,
  },
  error: null,
  loading: false,
};

export const adSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // ... //
    removeAd: (state) => {
      console.log("removeAd: ", state.userData);
    },
  },
  extraReducers: (builder) => {
    builder
      // 통신 중
      .addCase(reload.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      // 통신 성공
      .addCase(reload.fulfilled, (state, { payload }) => {
        if (payload.success) {
          state.error = null;
          state.loading = false;
          state.userData = payload.data;
        }
      })
      // 통신 에러
      .addCase(reload.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
      });
  },
});

export const {} = adSlice.actions;

export default adSlice.reducer;
