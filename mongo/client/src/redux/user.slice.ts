import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import * as API from 'api';
import type { AxiosResponse } from 'axios';
import { createExtraReducers } from 'utils';

const SLICE_NAME = 'user';
const initialState = {
  data: null,
  isLoading: false,
  error: null,
};

const decorateAsyncThunk = (thunkName: string, APICall: <T>(arg0: T) => Promise<AxiosResponse<any, any>>) =>
  createAsyncThunk(`${SLICE_NAME}/${thunkName}`, async (userData, thunkAPI) => {
    try {
      const {
        data: {
          data: { user },
        },
      } = await APICall(userData);

      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  });

export const login = decorateAsyncThunk('login', (userData) => API.login(userData));
export const register = decorateAsyncThunk('register', (userData) => API.register(userData));
export const refresh = decorateAsyncThunk('refresh', (token) => API.refresh(token));

const fulfilledReducer = (state, { payload }) => {
  state.isLoading = false;
  state.data = payload;
};

const userSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    clearErrors: (state) => {
      state.error = null;
    },
  },
  extraReducers(builder) {
    createExtraReducers({ thunk: login, fulfilledReducer })(builder);
    createExtraReducers({ thunk: register, fulfilledReducer })(builder);
    createExtraReducers({ thunk: refresh, fulfilledReducer })(builder);
  },
});

const { reducer, actions } = userSlice;
const { clearErrors } = actions;

export { clearErrors };

export default reducer;
