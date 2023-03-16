import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as API from 'app/api';
import { UserEntry } from 'types/api/getFromJsonPlaceholder';
import { UserSliceState } from 'types/slices';

const SLICE_NAME = 'users';

const getUsers = createAsyncThunk(
  `${SLICE_NAME}/getUsers`,
  async (arg, thunkAPI) => {
    try {
      const {
        data: { data: users },
      } = await API.getUsers(arg);
      return users as UserEntry[];
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message as string);
    }
  },
);

const initialState: UserSliceState = {
  users: [],
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export { getUsers };
export default usersSlice.reducer;
