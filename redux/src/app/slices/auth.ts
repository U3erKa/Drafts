import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as API from 'app/api';
import { User } from 'types/api/getFromOwnDB';
import { AuthSliceState } from 'types/slices';

const SLICE_NAME = 'auth';

const initialState: AuthSliceState = {
  user: null as any,
  isLoading: false,
  error: null as any,
};

const register = createAsyncThunk(
  `${SLICE_NAME}/register`,
  async (arg: User, thunkAPI) => {
    try {
      const {
        data: { data: user },
      } = await API.registerUser(arg);
      return user as User;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.error as string);
    }
  },
);

const authSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export { register };
export default authSlice.reducer;
